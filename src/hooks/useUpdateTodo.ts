import { updateTodoItem } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateTodo = (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>) => {
  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (todo: Todo) => updateTodoItem(todo),
    onMutate: (updatedTodo) =>
      setTodos((prev) => prev.map((t) => (t.id === updatedTodo.id ? { ...t, ...updatedTodo } : t))),
    onError: () => queryClient.invalidateQueries({ queryKey: ['todoItems'] }),
    onSuccess: (serverData) =>
      queryClient.setQueryData<Todo[]>(['todoItems'], (old) =>
        (old || []).map((t) => (t.id === serverData.id ? serverData : t)),
      ),
  });

  const toggleTodo = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t)),
    );
    updateMutation.mutate({ ...todo, isCompleted: !todo.isCompleted });
  };

  return { toggleTodo };
};
