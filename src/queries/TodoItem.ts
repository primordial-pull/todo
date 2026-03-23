import { TodoItem } from '@/types/TodoItem';

export const fetchTodoItems = async (): Promise<TodoItem[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/items');
  return response.json();
};

export type AddTodoInput = {
  name: string;
};

export const addTodoItem = async ({ name }: AddTodoInput): Promise<TodoItem> => {
  const config = {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/items', config);
  return response.json();
};
