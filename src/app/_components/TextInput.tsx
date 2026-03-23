'use client';

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
};

export const TextInput = ({ value, onChange, placeholder, className }: InputProps) => {
  return (
    <input
      className={className}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
