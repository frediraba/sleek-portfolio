"use client";

import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { ContextProvider, DarkModeContext, LanguageContext } from '../components/context';
import NotFoundPage from './not-found';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'skills', 'contact'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const validRoutes = ['/', '/about', '/projects', '/skills', '/contact'];

  if (!validRoutes.includes(pathname)) {
    return <NotFoundPage />;
  }

  return (
    <ContextProvider>
      <DarkModeContext.Consumer>
        {({ darkMode, toggleDarkMode }) => (
          <LanguageContext.Consumer>
            {({ language, toggleLanguage }) => (
              <html lang={language} className={darkMode ? 'dark' : ''}>
                <body className={`${geistSans.variable} ${geistMono.variable}`}>
                  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md h-14">
                    <div className="flex items-center space-x-3">
                      <button onClick={toggleLanguage} className="p-1 transition flex items-center space-x-1 hover:text-blue-800 dark:hover:text-yellow-300">
                        <GlobeAltIcon className="h-6 w-6 text-blue-500 dark:text-yellow-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                        <span className="text-lg font-semibold text-blue-500 dark:text-yellow-400 transition-colors hover:text-blue-800 dark:hover:text-yellow-300">
                          {language === 'ee' ? 'EE' : 'EN'}
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center md:hidden">
                      <button onClick={toggleMenu} className="text-blue-500 dark:text-yellow-500 p-2">
                        {menuOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
                      </button>
                    </div>

                    <nav
                      className={`${
                        menuOpen ? 'flex' : 'hidden'
                      } absolute top-14 left-0 right-0 bg-gray-100 dark:bg-gray-800 p-4 flex-col items-center space-y-4 md:static md:flex md:flex-row md:space-y-0 md:space-x-10 md:justify-center md:bg-transparent md:p-0 md:items-center md:flex-grow`}
                    >
                      {['about', 'projects', 'skills', 'contact'].map((section) => (
                        <ScrollLink
                          key={section}
                          to={section}
                          smooth={true}
                          duration={500}
                          spy={true}
                          onClick={() => setMenuOpen(false)}
                          className={`text-lg font-semibold cursor-pointer transition-colors ${
                            activeSection === section || menuOpen
                              ? 'text-blue-800 dark:text-yellow-300'
                              : 'text-blue-500 dark:text-yellow-500'
                          } hover:text-blue-800 dark:hover:text-yellow-300`}
                        >
                          {language === 'ee'
                            ? section === 'about'
                              ? 'Minust'
                              : section === 'projects'
                              ? 'Projektid'
                              : section === 'skills'
                              ? 'Oskused'
                              : 'Kontakt'
                            : section.charAt(0).toUpperCase() + section.slice(1)}
                        </ScrollLink>
                      ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-3">
                      <button onClick={toggleDarkMode} className="p-1 transition hover:text-blue-800 dark:hover:text-yellow-300">
                        {darkMode ? (
                          <SunIcon className="h-6 w-6 text-yellow-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                        ) : (
                          <MoonIcon className="h-6 w-6 text-blue-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                        )}
                      </button>
                      <a href="https://linkedin.com/in/frediraba" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-blue-800 dark:hover:text-yellow-300">
                        <FaLinkedin className="h-6 w-6 text-blue-500 dark:text-yellow-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                      </a>
                      <a href="https://github.com/frediraba" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-blue-800 dark:hover:text-yellow-300">
                        <FaGithub className="h-6 w-6 text-blue-500 dark:text-yellow-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                      </a>
                    </div>
                  </header>
                  <main className="mt-22 flex justify-center">{children}</main>
                </body>
              </html>
            )}
          </LanguageContext.Consumer>
        )}
      </DarkModeContext.Consumer>
    </ContextProvider>
  );
}
