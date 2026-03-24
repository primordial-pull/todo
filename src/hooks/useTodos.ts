import { fetchTodoItems } from '@/queries/TodoItem';
import { Todo } from '@/types/Todo';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export const useTodos = () => {
  const { data, isPending } = useQuery({ queryKey: ['todoItems'], queryFn: fetchTodoItems });
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (data && data.length && todos.length === 0) setTodos(data);
  }, [data, todos.length]);

  return { todos, setTodos, isPending };
};
