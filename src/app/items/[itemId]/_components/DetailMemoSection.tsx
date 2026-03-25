type DetailMemoSectionProps = {
  memo: string;
  onChange: (value: string) => void;
};

export const DetailMemoSection = ({ memo, onChange }: DetailMemoSectionProps) => {
  return (
    <div
      className="flex flex-col items-center w-full h-[311px] rounded-3xl border-none px-4 py-6"
      style={{
        backgroundImage: `url('/memo-bg.svg')`,
        backgroundSize: 'cover',
      }}
    >
      <div className="mb-4 text-accent text-base font-extrabold">Memo</div>
      <textarea
        className="w-full h-full bg-transparent resize-none outline-none"
        value={memo}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
