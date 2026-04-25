import Link from 'next/link';
import { Logo, LogoDoit } from './icons';

export const GlobalNavBar = () => {
  return (
    <div className="flex items-center w-full h-15 border-slate-200 border-b">
      <Link href="/" className="my-[10px] ml-6 desktop:ml-[360px] block">
        <Logo className="block tablet:hidden" />
        <LogoDoit className="hidden tablet:block" />
      </Link>
    </div>
  );
};
