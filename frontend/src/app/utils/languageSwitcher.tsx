'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Image from 'next/image';

const languages = [
  { code: 'pt', label: 'Português', flag: '/flags/PT.svg' },
  { code: 'es', label: 'Español', flag: '/flags/ES.svg' },
  { code: 'en', label: 'English', flag: '/flags/US.svg' },
  { code: 'de', label: 'Deutsch', flag: '/flags/DE.svg' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className='relative'>
      <div className={`relative  text-left flex flex-col `}>
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-2 py-2 rounded-t cursor-pointer  outline-0 ${
            open ? '  ' : 'border-transparent'
          }`}
        >
          <Image
            src={currentLang.flag}
            width={24}
            height={16}
            alt={currentLang.label}
          />
          {/* {<FaAngleDown className={`${open ? 'rotate-180' : 'rotate-0'} `} />} */}
          {/* <span className='text-sm'>{currentLang.label}</span> */}
        </button>
        {open && (
          <div className='absolute z-10 mt-[32px] flex flex-col items-start  gap-4  rounded-b  py-2 w-full'>
            {languages
              .filter((lang) => lang.code !== currentLang.code) // ✅ remove current
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className='w-full flex flex-col items-center gap-2 cursor-pointer'
                >
                  <Image
                    src={lang.flag}
                    width={24}
                    height={16}
                    alt={lang.label}
                  />
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
