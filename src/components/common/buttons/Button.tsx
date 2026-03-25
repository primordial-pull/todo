'use client';

type ButtonType = 'neutral' | 'danger' | 'complete' | 'primary';

type ButtonProps = {
  type: ButtonType;
  label: string;
  icon: React.ReactNode;
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
  className,
  onClick,
}: ButtonProps) => {
  const typeClass = {
    neutral: 'bg-slate-200',
    danger: 'bg-rose-500 text-white',
    complete: 'bg-success',
    primary: 'bg-primary text-white',
  };

  return (
    <button
      className={`flex justify-center items-center w-[164.35] h-13 rounded-3xl border-2 border-[#0F172A] shadow-[3.65px_4px_1px_#0F172A] 
        ${typeClass[type]} 
        ${responsive ? 'max-[743px]:w-[54.78px] max-[743px]:shadow-[1.22px_4px_1px_#0F172A] ' : ''}
        ${className}`}
      onClick={onClick}
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
