'use client';

import { AddTodoInput, addTodoItem } from '@/queries/TodoItem';
import { TodoItem } from '@/types/TodoItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { TextInput } from './TextInput';
import { Button } from '@/components/common/buttons/Button';
import { PlusIcon } from '@/components/icons';

export const TodoForm = () => {
  const queryClient = useQueryClient();
  const [todoName, setTodoName] = useState('');

  const mutation = useMutation({
    mutationFn: addTodoItem,

    onMutate: async ({ name }: AddTodoInput) => {
      await queryClient.cancelQueries({ queryKey: ['todoItems'] });
      const previousTodos = queryClient.getQueryData<TodoItem[]>(['todoItems']);
      const newTodo = {
        id: Date.now(), // 임시 id
        name,
        isCompleted: false,
      };

      queryClient.setQueryData<TodoItem[]>(['todoItems'], (old = []) => [newTodo, ...old]);
      return { previousTodos, newTodo };
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(['todoItems'], context?.previousTodos);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['todoItems'] });
    },

    onSuccess: (serverData, variables, context) => {
      queryClient.setQueryData<TodoItem[]>(['todoItems'], (old = []) =>
        old.map((item) => (item.id === context.newTodo.id ? serverData : item)),
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!todoName.trim()) return;
    mutation.mutate({ name: todoName.trim() });
    setTodoName('');
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <TextInput
        className="w-full h-[52.5px] rounded-3xl border-2 border-slate-900 pl-6 pt-[17px] pb-[21px]  font-normal text-base leading-none tracking-normal align-middle shadow-[4px_3.5px_1px_#0F172A] focus:outline-none"
        value={todoName}
        onChange={setTodoName}
        placeholder="할 일을 입력해주세요"
      />
      <Button type="primary" label="추가하기" icon={<PlusIcon />} />
    </form>
  );
};
