import { Todo } from '@/types/Todo';

export const fetchTodoItems = async (): Promise<Todo[]> => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/items');
  return response.json();
};

export type AddTodoInput = {
  name: string;
};

export type UpdateTodoInput = Partial<
  Pick<Todo, 'id' | 'name' | 'memo' | 'imageUrl' | 'isCompleted'>
>;

export const addTodoItem = async ({ name }: AddTodoInput): Promise<Todo> => {
  const config = {
    method: 'POST',
    body: JSON.stringify({ name }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/items', config);
  const result = await response.json();
  return { id: result.id, name: result.name, isCompleted: false };
};

export const updateTodoItem = async ({
  id,
  name,
  memo,
  imageUrl,
  isCompleted,
}: UpdateTodoInput): Promise<Todo> => {
  const config = {
    method: 'PATCH',
    body: JSON.stringify({ name, memo, imageUrl, isCompleted }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/items/${id}`, config);
  return response.json();
};

export type FetchTodoItemInput = {
  itemId: Todo['id'];
};

export const fetchTodoItem = async ({ itemId }: FetchTodoItemInput) => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/items/${itemId}`);
  return response.json();
};

type UploadResponse = {
  url: string;
};

export const uploadFile = async ({ imageFile }: { imageFile: File }): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  const config = {
    method: 'POST',
    body: formData,
  };

  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/images/upload`, config);
  return await response.json();
};

export type DeleteTodoItemInput = {
  itemId: Todo['id'];
};

export const deleteTodoItem = async ({ itemId }: DeleteTodoItemInput) => {
  const config = {
    method: 'DELETE',
  };
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + `/items/${itemId}`, config);
  return response.json();
};
