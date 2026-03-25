'use client';

import { fetchTodoItem } from '@/queries/TodoItem';
import { useQuery } from '@tanstack/react-query';
import { DetailTitle } from './DetailTitle';
import { DetailImageSection } from './DetailImageSection';
import { useEffect, useState } from 'react';
import { Todo } from '@/types/Todo';
import { DetailMemoSection } from './DetailMemoSection';
import { Button } from '@/components/common/buttons/Button';
import { CheckIcon, XIcon } from '@/components/icons';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useRouter } from 'next/navigation';

type TodoDetailProps = {
  itemId: string;
};

export const TodoDetail = ({ itemId }: TodoDetailProps) => {
  const router = useRouter();
  const { data: todo, isPending } = useQuery({
    queryKey: ['todo', itemId],
    queryFn: () => fetchTodoItem({ itemId }),
    staleTime: 0,
  });
  const { updateMutation } = useUpdateTodo();
  const { mutation } = useFileUpload();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [localTodo, setLocalTodo] = useState<Todo | null>(null);

  useEffect(() => {
    if (todo) {
      setLocalTodo({
        id: todo.id,
        name: todo.name ?? '',
        isCompleted: todo.isCompleted ?? false,
        imageUrl: todo.imageUrl ?? '',
        memo: todo.memo ?? '',
      });
    }
  }, [todo]);

  const handleToggle = () => {
    setLocalTodo((prev) => (prev ? { ...prev, isCompleted: !prev.isCompleted } : prev));
  };

  const handleChangeName = (name: string) => {
    setLocalTodo((prev) => (prev ? { ...prev, name } : prev));
  };

  const handleSave = async () => {
    if (!localTodo) return;
    let fileUrl = localTodo?.imageUrl;

    if (imageFile) {
      try {
        fileUrl = (await mutation.mutateAsync({ imageFile })).url;
      } catch (err) {
        alert('파일 업로드 실패');
        return;
      }
    }

    try {
      await updateMutation.mutateAsync({ ...localTodo, imageUrl: fileUrl });
      alert('저장 완료');
      router.push('/');
    } catch (err) {
      alert('업데이트 실패');
    }
  };

  if (isPending || !localTodo) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-6 w-full">
      <DetailTitle todo={localTodo} onToggle={handleToggle} onChangeName={handleChangeName} />
      <div className="flex gap-6 w-full">
        <DetailImageSection
          imageFile={imageFile}
          setImageFile={setImageFile}
          imageUrl={localTodo?.imageUrl}
        />
        <DetailMemoSection
          memo={localTodo.memo ?? ''}
          onChange={(value) => setLocalTodo((prev) => (prev ? { ...prev, memo: value } : prev))}
        />
      </div>
      <div className="flex justify-end w-full gap-4">
        <Button label="수정 완료" icon={<CheckIcon />} onClick={handleSave} type="complete" />
        <Button label="삭제하기" icon={<XIcon />} onClick={() => {}} type="danger" />
      </div>
    </div>
  );
};
