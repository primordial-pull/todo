'use client';

import { addTodoItem } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { TextInput } from './TextInput';
import { Button } from '@/components/common/buttons/Button';
import { PlusIcon } from '@/components/icons';

type TodoFormProps = {
  todoList: Todo[];
};

export const TodoForm = ({ todoList }: TodoFormProps) => {
  const queryClient = useQueryClient();
  const [todoName, setTodoName] = useState('');

  const mutation = useMutation({
    mutationFn: addTodoItem,

    onError: () => {
      queryClient.invalidateQueries({ queryKey: ['todoItems'] });
    },

    onSuccess: (serverData: Todo) => {
      queryClient.setQueryData<Todo[]>(['todoItems'], (old) => [serverData, ...(old || [])]);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!todoName.trim()) return;

    await mutation.mutateAsync({ name: todoName.trim() });
    setTodoName('');
  };

  return (
    <form className="flex gap-4 mb-10" onSubmit={handleSubmit}>
      <TextInput
        className="w-full h-[52.5px] rounded-3xl border-2 border-slate-900 pl-6 pt-[17px] pb-[21px] font-normal text-base leading-none tracking-normal align-middle shadow-[4px_3.5px_1px_#0F172A] focus:outline-none"
        value={todoName}
        onChange={setTodoName}
        placeholder="할 일을 입력해주세요"
      />
      <Button
        type={todoList.length > 0 ? 'neutral' : 'primary'}
        label={mutation.isPending ? '추가중..' : '추가하기'}
        icon={<PlusIcon />}
        responsive={true}
        disabled={mutation.isPending}
      />
    </form>
  );
};
