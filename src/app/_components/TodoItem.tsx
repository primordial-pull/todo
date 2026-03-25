'use client';

import { CheckedIcon, UnCheckedIcon } from '@/components/icons';
import { Todo } from '@/types/Todo';
import { useRouter } from 'next/navigation';

type TodoItemProps = {
  todo: Todo;
  onClick: (todo: Todo) => void;
};

export const TodoItem = ({ todo, onClick }: TodoItemProps) => {
  const { isCompleted, name, id } = todo;
  const router = useRouter();

  const handleNameClick = () => {
    router.push(`/items/${id}`);
  };

  return (
    <div
      className={`flex items-center w-full h-[50px] px-3 py-[9px] gap-4 border-2 border-slate-800 rounded-3xl  ${
        isCompleted ? 'bg-primary-100' : ''
      }`}
    >
      <div onClick={() => onClick(todo)}>{isCompleted ? <CheckedIcon /> : <UnCheckedIcon />}</div>
      <div className={`w-full cursor-pointer`} onClick={handleNameClick}>
        <span
          className={`text-base font-normal leading-none tracking-normal ${
            isCompleted ? 'line-through text-slate-800' : ''
          }`}
        >
          {name}
        </span>
      </div>
    </div>
  );
};
