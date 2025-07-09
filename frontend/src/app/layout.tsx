import type { Metadata } from 'next';
import './globals.css';
import '../app/utils/embla.css';
import localFont from 'next/font/local';
import Header from './components/header';
import I18nProvider from './utils/i18n-provider';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Transferium | Book Your Private Transfer in Portugal Easily',
  description:
    'Book your private transfers anywhere in Portugal, anytime. Safe, fast, and reliable rides at your fingertips.',
  openGraph: {
    title: 'Transferium | Book Your Private Transfer in Portugal Easily',
    description:
      'Book your private transfers anywhere in Portugal, anytime. Safe, fast, and reliable rides at your fingertips.',
    url: 'https://www.transferium.online',
    siteName: 'Transferium',
    images: [
      {
        url: 'https://www.transferium.online/logo.svg', // use your real domain + image path here
        width: 1200,
        height: 630,
        alt: 'Transferium Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transferium | Book Your Private Transfer in Portugal Easily',
    description:
      'Book your private transfers anywhere in Portugal, anytime. Safe, fast, and reliable rides at your fingertips.',
    images: ['https://www.transferium.online/twitter.avif'],
  },
};

const poppins = localFont({
  src: [
    {
      path: '../../public/Fonts/Poppins-Thin.woff',
      weight: '100',
      style: 'thin',
    },
    {
      path: '../../public/Fonts/Poppins-Light.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../public/Fonts/Poppins-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/Fonts/Poppins-SemiBold.woff',
      weight: '600',
      style: 'semibold',
    },
    {
      path: '../../public/Fonts/Poppins-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/Fonts/Poppins-Black.woff',
      weight: '900',
      style: 'black',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} antialiased `}>
        <I18nProvider>
          <Header />
          {children}
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
