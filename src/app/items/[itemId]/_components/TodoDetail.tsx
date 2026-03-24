'use client';

import { fetchTodoItem } from '@/queries/TodoItem';
import { useQuery } from '@tanstack/react-query';
import { DetailTitle } from './DetailTitle';

type TodoDetailProps = {
  itemId: string;
};

export const TodoDetail = ({ itemId }: TodoDetailProps) => {
  const { data: todo, isPending } = useQuery({
    queryKey: ['todo', itemId],
    queryFn: () => fetchTodoItem({ itemId }),
  });

  if (isPending) return <div>loading...</div>;

  return (
    <>
      <DetailTitle todo={todo} />
    </>
  );
};
