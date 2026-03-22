'use client';

import { useDeviceType } from '@/hooks/useDeviceType';
import { Logo, LogoDoit } from './icons';

export const GlobalNavBar = () => {
  const deviceType = useDeviceType();

  const getLogo = () => {
    if (deviceType === null) return null;
    return deviceType === 'mobile' ? <Logo /> : <LogoDoit />;
  };

  return (
    <div className="w-full h-15">
      <div className="mt-[10px] ml-6 min-[1920px]:ml-[360px]"> {getLogo()}</div>
    </div>
  );
};
