"use client";

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LanguageContext } from '../components/context';

const NotFoundPage: React.FC = () => {
  const { language } = useContext(LanguageContext);

  return (
    <html lang={language || 'en'}>
      <body className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
        <div className="flex flex-col items-center space-y-4 max-w-lg text-center">
          <Image
            src="/images/404-illustration.png"
            alt="404 - Lehte ei leitud"
            width={250} height={150}
            className="animate-slide-in"
          />
          <h1 className="text-5xl font-bold animate-fade-in">
            {language === 'ee' ? '404 - Oih! Lehte ei leitud!' : '404 - Oops! Page Not Found!'}
          </h1>
          <p className="text-lg animate-fade-in delay-100">
            {language === 'ee' ? 'Tundub, et oled eksinud. Aga ära muretse, aitame sul koju tagasi leida!' : 'It seems you are lost. Don\'t worry, we will help you get back home!'}
          </p>
          <Link href="/" className="bg-blue-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-blue-600 transform transition-transform duration-300 ease-in-out">
            {language === 'ee' ? 'Tagasi Avalehele' : 'Back to Home'}
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;
