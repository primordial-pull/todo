import localFont from 'next/font/local';

export const nanumSquare = localFont({
  src: [
    {
      path: './fonts/NanumSquareB.woff2',
      weight: '400',
    },
    {
      path: './fonts/NanumSquareR.woff2',
      weight: '700',
    },
  ],
  variable: '--font-sans',
});
