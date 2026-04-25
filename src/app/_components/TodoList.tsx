'use client';

import { TodoForm } from './TodoForm';
import { useTodos } from '@/hooks/useTodos';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { CheckList } from './CheckList';
import TodoIcon from '@/components/icons/TodoIcon';
import { DoneIcon } from '@/components/icons';
import { EmptyTodoIcon } from '@/components/icons/emptyIcon/EmptyTodoIcon';
import { EmptyDoneIcon } from '@/components/icons/emptyIcon/EmptyDoneIcon';
import { Todo } from '@/types/Todo';

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
  const { updateMutation } = useUpdateTodo();

  /* TodoItem 왼쪽 버튼을 누를 경우 isCompleted toggle */
  const toggleTodo = (todo: Todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === todo.id ? { ...t, isCompleted: !t.isCompleted } : t)),
    );
    updateMutation.mutate({ ...todo, isCompleted: !todo.isCompleted });
  };

  const todoList = todos.filter((t) => !t.isCompleted);
  const doneList = todos.filter((t) => t.isCompleted);

  if (isPending && todos.length === 0) return <div>loading...</div>;

  return (
    <>
      <TodoForm setTodos={setTodos} todoList={todoList} />

      <div className="flex flex-col desktop:flex-row gap-6">
        <CheckList list={todoList} config={checkListConfigs.todo} onClick={toggleTodo} />
        <CheckList list={doneList} config={checkListConfigs.done} onClick={toggleTodo} />
      </div>
    </>
  );
};
