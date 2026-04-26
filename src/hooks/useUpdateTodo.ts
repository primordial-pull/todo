import { updateTodoItem } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (todo: Todo) => updateTodoItem(todo),
    onMutate: async (updatedTodo) => {
      await queryClient.cancelQueries({ queryKey: ['todoItems'] });
      const previousTodos = queryClient.getQueryData<Todo[]>(['todoItems']);
      const previousTodo = queryClient.getQueryData<Todo>(['todo', updatedTodo.id]);

      queryClient.setQueryData<Todo[]>(['todoItems'], (old = []) =>
        old.map((t) => (t.id === updatedTodo.id ? updatedTodo : t)),
      );
      queryClient.setQueryData(['todo', updatedTodo.id], updatedTodo);
      return { previousTodos, previousTodo };
    },
    onError: (_err, _vars, context) => {
      if (!context) return;
      queryClient.setQueryData(['todoItems'], context.previousTodos);
      queryClient.setQueryData(['todo', _vars.id], context.previousTodo);
    },
    onSuccess: (serverData) => {
      queryClient.setQueryData<Todo[]>(['todoItems'], (old) =>
        (old || []).map((t) => (t.id === serverData.id ? serverData : t)),
      );
      queryClient.setQueryData(['todo', serverData.id], serverData);
    },
  });

  return { updateMutation };
};
