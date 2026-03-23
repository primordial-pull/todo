'use client';

import { fetchTodoItems } from '@/queries/TodoItem';
import { TodoItem } from '@/types/TodoItem';
import { useQuery } from '@tanstack/react-query';

export const TodoList = () => {
  const { data, isPending } = useQuery({ queryKey: ['todoItems'], queryFn: fetchTodoItems });
  const todoList = data?.filter((item: TodoItem) => !item.isCompleted);
  const doneList = data?.filter((item: TodoItem) => item.isCompleted);

  if (isPending) return <div>loading...</div>;

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div>todo</div>
        {todoList?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>

      <div className="flex flex-col">
        <div>done</div>
        {doneList?.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
