// app/I18nProvider.tsx
'use client';

import './i18n'; // side-effect import

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
