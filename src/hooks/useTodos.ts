import { fetchTodoItems } from '@/queries/TodoItem';
import { useQuery } from '@tanstack/react-query';

export const useTodos = () => {
  const { data = [], isPending } = useQuery({
    queryKey: ['todoItems'],
    queryFn: fetchTodoItems,
  });

  return { todos: data, isPending };
};
