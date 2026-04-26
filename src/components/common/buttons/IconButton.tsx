'use client';

import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

type IconButtonProps = {
  variant?: 'neutral' | 'solid';
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

/* 
  아이콘 하나만 포함하는 동그란 버튼
*/

export const IconButton = ({
  variant = 'neutral',
  icon,
  className,
  onClick,
  disabled = false,
}: IconButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(buttonVariants({ variant, disabled }), className)}
    >
      <div className="flex items-center justify-center">{icon}</div>
    </button>
  );
};

const buttonVariants = cva('flex justify-center items-center w-12 h-12 rounded-full', {
  variants: {
    variant: {
      neutral: 'bg-slate-200 text-slate-500',
      solid: 'bg-slate-900 text-white',
    },

    disabled: {
      true: 'bg-gray-400',
    },
  },
  defaultVariants: {
    variant: 'neutral',
    disabled: false,
  },
});
