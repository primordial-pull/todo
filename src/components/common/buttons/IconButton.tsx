'use client';

type IconButtonProps = {
  variant?: 'primary' | 'solid';
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const IconButton = ({
  variant = 'primary',
  icon,
  className,
  onClick,
  disabled = false,
}: IconButtonProps) => {
  const variantClass = {
    primary: 'bg-slate-200 text-slate-500',
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
      <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
    </button>
  );
};
