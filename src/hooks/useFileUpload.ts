import { uploadFile } from '@/queries/TodoItem';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useFileUpload = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: uploadFile,
  });

  return { mutation };
};
