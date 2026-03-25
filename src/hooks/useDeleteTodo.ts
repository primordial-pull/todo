import { deleteTodoItem, DeleteTodoItemInput } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteMutation = useMutation({
    mutationFn: ({ itemId }: DeleteTodoItemInput) => deleteTodoItem({ itemId }),
    onError: () => queryClient.invalidateQueries({ queryKey: ['todoItems'] }),
    onSuccess: (_, { itemId }) => {
      queryClient.setQueryData<Todo[]>(['todoItems'], (old) =>
        (old || []).filter((t) => t.id !== itemId),
      );
      router.replace('/');
    },
  });

  return { deleteMutation };
};
