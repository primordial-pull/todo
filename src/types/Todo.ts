export type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
  tenantId?: string;
  memo?: string;
  imageUrl?: string;
};

export type AddTodoInput = {
  name: string;
};

export type UpdateTodoInput = Partial<
  Pick<Todo, 'id' | 'name' | 'memo' | 'imageUrl' | 'isCompleted'>
>;

export type FetchTodoItemInput = {
  itemId: Todo['id'];
};

export type UploadResponse = {
  url: string;
};

export type DeleteTodoItemInput = {
  itemId: Todo['id'];
};
