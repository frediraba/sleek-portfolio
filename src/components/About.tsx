"use client";

import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-16 px-8 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6 animate-fade-in">Minust</h2>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/images/fredi-profile.png"
          alt="Fredi Raba"
          width={400}
          height={400}
          className="rounded-full shadow-lg animate-slide-in"
        />
        <div className="max-w-md text-center md:text-left">
          <p className="text-lg leading-relaxed">
            Ma olen Fredi Raba, kirglik veebiarendaja, kes ühendab loomingulisuse ja tehnoloogia. Ma ehitan modernseid ja responsiivseid veebirakendusi, keskendudes suurepärasele kasutajakogemusele.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
