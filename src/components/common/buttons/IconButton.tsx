'use client';

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
  const variantClass = {
    neutral: 'bg-slate-200 text-slate-500',
    solid: 'bg-slate-900 text-white',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center 
        w-12 h-12 rounded-full 
        ${variantClass[variant]}
        ${className}
      `}
    >
      <div className="flex items-center justify-center">{icon}</div>
    </button>
  );
};
