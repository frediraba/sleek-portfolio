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
                  <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 shadow-md h-14">
                    <div className="flex items-center space-x-3">
                      <button onClick={toggleLanguage} className="p-1 transition flex items-center space-x-1 hover:text-blue-800 dark:hover:text-yellow-300">
                        <GlobeAltIcon className="h-6 w-6 text-blue-500 dark:text-yellow-500 transition-colors hover:text-blue-800 dark:hover:text-yellow-300" />
                        <span className="text-lg font-semibold text-blue-500 dark:text-yellow-400 transition-colors hover:text-blue-800 dark:hover:text-yellow-300">
                          {language === 'ee' ? 'EE' : 'EN'}
                        </span>
                      </button>
                    </div>
                    <div className="lg:flex-grow lg:flex justify-center items-center space-x-2 hidden">
                      <nav className="flex space-x-4">
                        {['about', 'projects', 'skills', 'contact'].map((section) => (
                          <ScrollLink
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            spy={true}
                            className={`text-lg font-semibold cursor-pointer transition-colors ${
                              activeSection === section
                                ? 'text-blue-800 dark:text-yellow-300'
                                : 'text-blue-500 dark:text-yellow-500'
                            } hover:text-blue-800 dark:hover:text-yellow-300`}
                          >
                            {language === 'ee' ? (
                              section === 'about'
                                ? 'Minust'
                                : section === 'projects'
                                ? 'Projektid'
                                : section === 'skills'
                                ? 'Oskused'
                                : 'E-mail'
                            ) : (
                              section.charAt(0).toUpperCase() + section.slice(1)
                            )}
                          </ScrollLink>
                        ))}
                      </nav>
                    </div>
                    <div className="flex items-center space-x-3 lg:hidden">
                      <button onClick={() => setMenuOpen(!menuOpen)} className="p-1 transition">
                        {menuOpen ? (
                          <XMarkIcon className="h-6 w-6 text-blue-500 dark:text-yellow-500" />
                        ) : (
                          <Bars3Icon className="h-6 w-6 text-blue-500 dark:text-yellow-500" />
                        )}
                      </button>
                    </div>
                    <div className="hidden lg:flex items-center space-x-3">
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
                    {menuOpen && (
                      <div className="absolute top-14 right-0 w-48 p-4 bg-gray-100 dark:bg-gray-800 shadow-lg rounded-lg flex flex-col space-y-4 lg:hidden">
                        <button onClick={toggleDarkMode} className="flex items-center justify-center text-lg font-semibold text-blue-500 dark:text-yellow-500 p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                          {darkMode ? (
                            <SunIcon className="h-6 w-6 mr-2" />
                          ) : (
                            <MoonIcon className="h-6 w-6 mr-2" />
                          )}
                          <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                        </button>
                        {['about', 'projects', 'skills', 'contact'].map((section) => (
                          <ScrollLink
                            key={section}
                            to={section}
                            smooth={true}
                            duration={500}
                            spy={true}
                            className={`text-lg font-semibold cursor-pointer transition-colors text-center ${
                              activeSection === section
                                ? 'text-blue-800 dark:text-yellow-300'
                                : 'text-blue-500 dark:text-yellow-500'
                            } hover:text-blue-800 dark:hover:text-yellow-300`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {language === 'ee' ? (
                              section === 'about'
                                ? 'Minust'
                                : section === 'projects'
                                ? 'Projektid'
                                : section === 'skills'
                                ? 'Oskused'
                                : 'E-mail'
                            ) : (
                              section.charAt(0).toUpperCase() + section.slice(1)
                            )}
                          </ScrollLink>
                        ))}
                      </div>
                    )}
                  </header>
                  <main className="mt-22 flex justify-center px-4 md:px-16 lg:px-24 xl:px-32">
                    {children}
                  </main>
                </body>
              </html>
            )}
          </LanguageContext.Consumer>
        )}
      </DarkModeContext.Consumer>
    </ContextProvider>
  );
}
