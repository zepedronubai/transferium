import type { Metadata } from 'next';
import './globals.css';
import '../app/utils/embla.css';
import localFont from 'next/font/local';
import Header from './components/header';
import I18nProvider from './utils/i18n-provider';
import Footer from './components/footer';

export const metadata: Metadata = {
  title: 'Transferium',
  description: 'Book your Transfer anywhere, anytime.',
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
