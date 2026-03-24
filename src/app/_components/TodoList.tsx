'use client';

import { DoneIcon, TodoIcon } from '@/components/icons';
import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { useTodos } from '@/hooks/useTodos';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';

export const TodoList = () => {
  const { todos, setTodos, isPending } = useTodos();
  const { toggleTodo } = useUpdateTodo(setTodos);

  const todoList = todos.filter((t) => !t.isCompleted);
  const doneList = todos.filter((t) => t.isCompleted);

  if (isPending && todos.length === 0) return <div>loading...</div>;

  return (
    <>
      <TodoForm setTodos={setTodos} />

      <div className="flex flex-col min-[1920px]:flex-row gap-6">
        <div className="flex flex-col w-full min-[1920px]:w-1/2 gap-4 mb-12">
          <TodoIcon />
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onClick={() => toggleTodo(todo)} />
          ))}
        </div>

        <div className="flex flex-col w-full min-[1920px]:w-1/2 gap-4">
          <DoneIcon />
          {doneList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onClick={() => toggleTodo(todo)} />
          ))}
        </div>
      </div>
    </>
  );
};
