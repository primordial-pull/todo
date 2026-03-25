import { updateTodoItem } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const updateMutation = useMutation({
    mutationFn: (todo: Todo) => updateTodoItem(todo),
    onError: () => queryClient.invalidateQueries({ queryKey: ['todoItems'] }),
    onSuccess: (serverData) =>
      queryClient.setQueryData<Todo[]>(['todoItems'], (old) =>
        (old || []).map((t) => (t.id === serverData.id ? serverData : t)),
      ),
  });

  return { updateMutation };
};
