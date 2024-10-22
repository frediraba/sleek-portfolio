"use client";

import React, { useEffect, useState } from 'react';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
      style={{ transition: 'opacity 0.3s, transform 0.3s' }}
    >
      ⬆️
    </button>
  );
};

export default ScrollToTopButton;
