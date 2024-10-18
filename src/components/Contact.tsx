"use client";

import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      newErrors.name = 'Nimi on kohustuslik.';
      formValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Palun sisesta kehtiv e-posti aadress.';
      formValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Sõnum peab sisaldama vähemalt 10 märki.';
      formValid = false;
    }

    setErrors(newErrors);
    return formValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Sõnum saadetud! Täname, et võtsid ühendust.');
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">Võta Minuga Ühendust</h2>
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Sinu nimi"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Sinu e-post"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Sinu sõnum"
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none transition-colors duration-300"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-4 px-8 rounded-md font-semibold hover:bg-blue-600 hover:scale-105 transform transition-transform duration-300 ease-in-out"
          >
            Saada
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
