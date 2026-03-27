import Link from 'next/link';
import { Logo, LogoDoit } from './icons';

export const GlobalNavBar = () => {
  return (
    <div className="flex items-center w-full h-15 border-slate-200 border-b">
      <Link href="/" className="my-[10px] ml-6 min-[1920px]:ml-[360px] block">
        <Logo className="block min-[744px]:hidden" />
        <LogoDoit className="hidden min-[744px]:block" />
      </Link>
    </div>
  );
};
