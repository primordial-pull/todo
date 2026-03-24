import { TextInput } from '@/app/_components/TextInput';
import { CheckedIcon, UnCheckedIcon } from '@/components/icons';
import { Todo } from '@/types/Todo';
import { useState } from 'react';

type TodoItemProps = {
  todo: Todo;
};

export const DetailTitle = ({ todo }: TodoItemProps) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [name, setName] = useState(todo.name);

  const handleIconClick = () => {
    setIsCompleted((prev) => !prev);
  };

  return (
    <div
      className={`flex justify-center items-center w-full h-[64px] px-3 py-[9px] gap-4 border-2 border-slate-900 rounded-3xl mt-6 ${
        isCompleted ? 'bg-violet-200' : ''
      }`}
    >
      <div className="flex w-[186px] h-8 gap-4">
        <div onClick={handleIconClick}>{isCompleted ? <CheckedIcon /> : <UnCheckedIcon />}</div>
        <div className="py-[4.5px]">
          <TextInput
            value={name}
            onChange={setName}
            className="font-bold text-xl leading-none tracking-normal underline focus:outline-none w-auto h-[23px]"
          />
        </div>
      </div>
    </div>
  );
};
