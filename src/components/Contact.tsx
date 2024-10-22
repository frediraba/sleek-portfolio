"use client";

import React, { useState, useContext } from 'react';
import { LanguageContext } from '../app/layout';

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      title: 'Contact Me',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Your Message',
      sendButton: 'Send',
      nameError: 'Name is required.',
      emailError: 'Please enter a valid email address.',
      messageError: 'Message must contain at least 10 characters.',
      successMessage: 'Message sent! Thank you for getting in touch.',
    },
    ee: {
      title: 'Võta minuga ühendust',
      namePlaceholder: 'Sinu nimi',
      emailPlaceholder: 'Sinu e-post',
      messagePlaceholder: 'Sinu sõnum',
      sendButton: 'Saada',
      nameError: 'Nimi on kohustuslik.',
      emailError: 'Palun sisesta kehtiv e-posti aadress.',
      messageError: 'Sõnum peab sisaldama vähemalt 10 märki.',
      successMessage: 'Sõnum saadetud! Täname, et võtsid ühendust.',
    },
  };

  const currentText = texts[language as 'en' | 'ee'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = { name: '', email: '', message: '' };
    let formValid = true;

    if (!formData.name.trim()) {
      newErrors.name = currentText.nameError;
      formValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = currentText.emailError;
      formValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = currentText.messageError;
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert(currentText.successMessage);
      // Lähtestab vormi andmed ja vead pärast edukat sõnumi saatmist
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="bg-gray-100 dark:bg-gray-800 py-16 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-yellow-200">
        {currentText.title}
      </h2>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={currentText.namePlaceholder}
            autoComplete="name"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-colors duration-300"
            required
          />
          {errors.name && <span className="text-red-500 dark:text-yellow-500">{errors.name}</span>}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={currentText.emailPlaceholder}
            autoComplete="email"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-colors duration-300"
            required
          />
          {errors.email && <span className="text-red-500 dark:text-yellow-500">{errors.email}</span>}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={currentText.messagePlaceholder}
            autoComplete="off"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 h-32 resize-none transition-colors duration-300"
            required
          />
          {errors.message && <span className="text-red-500 dark:text-yellow-500">{errors.message}</span>}
          <button
            type="submit"
            className="bg-blue-500 dark:bg-yellow-500 text-white dark:text-black py-4 px-8 rounded-md font-semibold hover:bg-blue-600 dark:hover:bg-yellow-600 hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            {currentText.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
