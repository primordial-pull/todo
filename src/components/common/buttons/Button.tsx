'use client';

import { cn } from '@/utils/cn';
import { cva } from 'class-variance-authority';

type ButtonType = 'neutral' | 'danger' | 'complete' | 'primary';

type ButtonProps = {
  type: ButtonType;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
  responsive?: boolean;
  className?: string;
  onClick?: () => void;
};

/*
  label + icon을 포함하는 기본 버튼
  responsive=true 옵션으로 모바일 화면에서 반응형으로 사용 가능
*/
export const Button = ({
  type,
  label,
  icon,
  responsive = false,
  disabled = false,
  className = '',
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ type, responsive, disabled }), className)}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="flex items-center gap-1">
        <div className="w-4 h-4 my-px">{icon}</div>
        <div className={`text-base font-bold ${responsive ? 'max-[743px]:hidden' : ''}`}>
          {label}
        </div>
      </div>
    </button>
  );
};

const buttonVariants = cva(
  'flex justify-center items-center w-[164.35] h-13 rounded-3xl border-2 border-[#0F172A] shadow-[3.65px_4px_1px_#0F172A]',
  {
    variants: {
      type: {
        neutral: 'bg-slate-200',
        danger: 'bg-rose-500 text-white',
        complete: 'bg-success',
        primary: 'bg-primary text-white',
      },
      responsive: {
        true: 'max-[743px]:w-[54.78px] max-[743px]:shadow-[1.22px_4px_1px_#0F172A]',
      },
      disabled: {
        true: 'bg-gray-400',
      },
    },
    defaultVariants: {
      type: 'neutral',
      responsive: false,
      disabled: false,
    },
  },
);
