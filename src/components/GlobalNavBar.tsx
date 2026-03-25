'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import { Logo, LogoDoit } from './icons';
import { useRouter } from 'next/navigation';

export const GlobalNavBar = () => {
  const deviceType = useDeviceType();
  const router = useRouter();

  const getLogo = () => {
    if (deviceType === null) return null;
    return deviceType === 'mobile' ? <Logo /> : <LogoDoit />;
  };

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <div className="w-full h-15 border-slate-200 border-b">
      <div className="mt-[10px] ml-6 min-[1920px]:ml-[360px]" onClick={handleLogoClick}>
        {getLogo()}
      </div>
    </div>
  );
};
