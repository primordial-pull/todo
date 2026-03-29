'use client';

import { DetailTitle } from './DetailTitle';
import { DetailImageSection } from './DetailImageSection';
import { useState } from 'react';
import { Todo } from '@/types/Todo';
import { DetailMemoSection } from './DetailMemoSection';
import { Button } from '@/components/common/buttons/Button';
import { CheckIcon, XIcon } from '@/components/icons';
import { useUpdateTodo } from '@/hooks/useUpdateTodo';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useRouter } from 'next/navigation';
import { useDeleteTodo } from '@/hooks/useDeleteTodo';

type TodoDetailProps = {
  todo: Todo;
};

export const TodoDetail = ({ todo }: TodoDetailProps) => {
  const router = useRouter();
  const { updateMutation } = useUpdateTodo();
  const { mutation } = useFileUpload();
  const { deleteMutation } = useDeleteTodo();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [localTodo, setLocalTodo] = useState<Todo>(todo);

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
      if (!isValidImage(imageFile)) return;
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

  const isValidImage = (imageFile: File): boolean => {
    const MAX_SIZE = 5 * 1024 * 1024;
    const FILE_NAME_REGEX = /^[a-zA-Z]+$/;
    const nameWithoutExt = imageFile.name.split('.').slice(0, -1).join('.');

    if (!FILE_NAME_REGEX.test(nameWithoutExt)) {
      alert('파일 이름은 영어만 가능합니다.');
      return false;
    }
    if (imageFile.size > MAX_SIZE) {
      alert('파일 크기는 5MB 이하만 가능합니다.');
      return false;
    }
    return true;
  };

  const handleDeleteButtonClick = () => {
    deleteMutation.mutate({ itemId: todo.id });
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <DetailTitle todo={localTodo} onToggle={handleToggle} onChangeName={handleChangeName} />
      <div className="flex gap-6 w-full max-[1919px]:flex-col">
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
      <div className="flex justify-center w-full gap-4 mb-12 min-[1920px]:justify-end">
        <Button label="수정 완료" icon={<CheckIcon />} onClick={handleSave} type="complete" />
        <Button label="삭제하기" icon={<XIcon />} onClick={handleDeleteButtonClick} type="danger" />
      </div>
    </div>
  );
};
