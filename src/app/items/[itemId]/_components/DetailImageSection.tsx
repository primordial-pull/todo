'use client';

import { useRef, useState, useEffect } from 'react';
import { IconButton } from '@/components/common/buttons/IconButton';
import { EditIcon, PlusIcon, UploadPlaceholderIcon } from '@/components/icons';
import Image from 'next/image';

type DetailImageSectionProps = {
  imageFile: File | null;
  setImageFile: (file: File | null) => void;
  imageUrl?: string;
};

export const DetailImageSection = ({
  imageFile,
  setImageFile,
  imageUrl,
}: DetailImageSectionProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(imageUrl || null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    return () => {
      if (imageFile && preview && preview !== imageUrl) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview, imageFile, imageUrl]);

  return (
    <div className="relative min-w-[384px]">
      <div className="flex justify-center items-center h-[311px] bg-slate-50 border-2 border-slate-300 border-dashed rounded-3xl overflow-hidden relative">
        {preview ? (
          <Image
            src={preview}
            alt="미리보기"
            fill
            className="object-cover"
            priority={true} // 필요 시 바로 로딩
          />
        ) : (
          <UploadPlaceholderIcon />
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleChange}
        className="hidden"
      />

      <IconButton
        variant={imageUrl || preview ? 'solid' : 'primary'}
        icon={imageUrl || preview ? <EditIcon /> : <PlusIcon />}
        onClick={handleClick}
        className="absolute bottom-4 right-4"
      />
    </div>
  );
};
