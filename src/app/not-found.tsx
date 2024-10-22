"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-8">
        <Image
          src="/images/404-illustration.png"
          alt="404 - Lehte ei leitud"
          width={400}
          height={300}
          className="mb-8 animate-slide-in"
        />
        <h1 className="text-5xl font-bold mb-4 animate-fade-in">404 - Oih! Lehte ei leitud!</h1>
        <p className="text-lg text-center mb-8 animate-fade-in delay-100">
          Tundub, et oled eksinud. Aga ära muretse, aitame sul koju tagasi leida!
        </p>
        <Link href="/" className="bg-blue-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transform transition-transform duration-300 ease-in-out animate-bounce-once">
          Tagasi Avalehele
        </Link>
        <div className="mt-8">
          <p className="text-md text-center animate-fade-in delay-200">
            Või uurige meie populaarseid sektsioone:
          </p>
          <div className="flex space-x-4 mt-4 animate-slide-in delay-300">
            <Link href="/projects" className="bg-purple-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-purple-600 hover:scale-105 transform transition-transform duration-300 ease-in-out">
              Projektid
            </Link>
            <Link href="/about" className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600 hover:scale-105 transform transition-transform duration-300 ease-in-out">
              Minust
            </Link>
            <Link href="/contact" className="bg-yellow-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-yellow-600 hover:scale-105 transform transition-transform duration-300 ease-in-out">
              Võta Ühendust
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFoundPage;

