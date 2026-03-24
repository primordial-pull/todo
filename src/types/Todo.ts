export type Todo = {
  id: number;
  name: string;
  isCompleted: boolean;
  tenantId?: string;
  memo?: string;
  imageUrl?: string;
};
