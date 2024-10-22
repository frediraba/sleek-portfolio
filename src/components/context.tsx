"use client";

import React from 'react';
import { createContext, useState, ReactNode } from 'react';

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

interface LanguageContextType {
  language: string;
  toggleLanguage: () => void;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
});

export const LanguageContext = createContext<LanguageContextType>({
  language: 'ee',
  toggleLanguage: () => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('ee');

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ee' ? 'en' : 'ee'));
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <LanguageContext.Provider value={{ language, toggleLanguage }}>
        {children}
      </LanguageContext.Provider>
    </DarkModeContext.Provider>
  );
};
