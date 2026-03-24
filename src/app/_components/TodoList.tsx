'use client';

import { TodoForm } from './TodoForm';
import { useTodos } from '@/hooks/useTodos';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { CheckList } from './CheckList';
import TodoIcon from '@/components/icons/TodoIcon';
import { DoneIcon } from '@/components/icons';
import { EmptyTodoIcon } from '@/components/icons/emptyIcon/EmptyTodoIcon';
import { EmptyDoneIcon } from '@/components/icons/emptyIcon/EmptyDoneIcon';

export type CheckListConfig = {
  titleIcon: React.ReactNode;
  emptyIcon: React.ReactNode;
  emptyText: string;
};

const checkListConfigs = {
  todo: {
    titleIcon: <TodoIcon />,
    emptyIcon: <EmptyTodoIcon />,
    emptyText: `할 일이 없어요.\nTODO를 새롭게 추가해주세요.`,
  },
  done: {
    titleIcon: <DoneIcon />,
    emptyIcon: <EmptyDoneIcon />,
    emptyText: `아직 다 한 일이 없어요.\n해야 할 일을 체크해보세요.`,
  },
};

export const TodoList = () => {
  const { todos, setTodos, isPending } = useTodos();
  const { toggleTodo } = useUpdateTodo(setTodos);

  const todoList = todos.filter((t) => !t.isCompleted);
  const doneList = todos.filter((t) => t.isCompleted);

  if (isPending && todos.length === 0) return <div>loading...</div>;

  return (
    <>
      <TodoForm setTodos={setTodos} todoList={todoList} />

      <div className="flex flex-col min-[1920px]:flex-row gap-6">
        <CheckList list={todoList} config={checkListConfigs.todo} onClick={toggleTodo} />
        <CheckList list={doneList} config={checkListConfigs.done} onClick={toggleTodo} />
      </div>
    </>
  );
};
