'use client';

import { useEffect, useState } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

const getDeviceType = (width: number): DeviceType => {
  if (width < 744) return 'mobile';
  if (width < 1920) return 'tablet';
  return 'desktop';
};

export const useDeviceType = (): DeviceType | null => {
  const [type, setType] = useState<DeviceType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const nextType = getDeviceType(window.innerWidth);

      setType((prev) => (prev === nextType ? prev : nextType));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return type;
};
