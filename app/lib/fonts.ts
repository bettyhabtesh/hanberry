import localFont from 'next/font/local'

export const salvager = localFont({
  src: [
    {
      path: '../../public/fonts/SALVAGER.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-salvager',
})