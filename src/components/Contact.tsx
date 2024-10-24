"use client";

import React, { useState, useContext } from 'react';
import { LanguageContext, DarkModeContext } from '../components/context';

const Contact: React.FC = () => {
  const { language } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

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
      sendCopyLabel: 'Send me a copy to my email',
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
      sendCopyLabel: 'Soovin koopia e-mailile',
    },
  };

  const currentText = texts[language as 'en' | 'ee'];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    sendCopy: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the error when user starts typing
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
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        sendCopy: false,
      });
      setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 px-10 transition-all duration-700 ${
        darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-yellow-100' : 'bg-gradient-to-b from-blue-50 via-blue-200 to-white text-gray-900'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 tracking-wide leading-snug">
        {currentText.title}
      </h2>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-700 p-10 rounded-lg shadow-lg transition-all duration-500">
        {success && (
          <div className="mb-6 text-green-500 font-bold text-lg">
            {currentText.successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={currentText.namePlaceholder}
            autoComplete="name"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-colors duration-300 bg-gray-100 dark:bg-gray-300 text-gray-900 dark:text-black"
          />
          {errors.name && (
            <span className="text-red-500 dark:text-yellow-500">
              {errors.name}
            </span>
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={currentText.emailPlaceholder}
            autoComplete="email"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 transition-colors duration-300 bg-gray-100 dark:bg-gray-300 text-gray-900 dark:text-black"
          />
          {errors.email && (
            <span className="text-red-500 dark:text-yellow-500">
              {errors.email}
            </span>
          )}
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={currentText.messagePlaceholder}
            autoComplete="off"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 h-32 resize-none transition-colors duration-300 bg-gray-100 dark:bg-gray-300 text-gray-900 dark:text-black"
          />
          {errors.message && (
            <span className="text-red-500 dark:text-yellow-500">
              {errors.message}
            </span>
          )}
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleChange}
              className="w-5 h-5 text-blue-500 dark:text-yellow-500 focus:ring-blue-500 dark:focus:ring-yellow-500"
            />
            <label htmlFor="sendCopy" className="text-lg font-semibold">
              {currentText.sendCopyLabel}
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue-500 dark:bg-yellow-500 text-white dark:text-black py-4 px-8 rounded-md font-semibold hover:bg-blue-700 dark:hover:bg-yellow-500 hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            {currentText.sendButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
