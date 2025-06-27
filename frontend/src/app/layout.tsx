import type { Metadata } from 'next';
import './globals.css';
import localFont from 'next/font/local';
import Header from './components/header';
import I18nProvider from './utils/i18n-provider';

export const metadata: Metadata = {
  title: 'Transferium',
  description: 'Book your Transfer anywhere, anytime.',
};

const poppinsFont = localFont({
  src: '../../public/Fonts/Poppins-Regular.woff',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} antialiased`}>
        <I18nProvider>
          <Header />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
