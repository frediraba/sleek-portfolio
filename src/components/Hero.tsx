import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">Kujundan tuleviku veebikogemusi</h1>
      <p className="text-2xl mb-8 animate-slide-in">Kire ja loomingulisusega loodud veebirakendused</p>
      <button className="bg-white text-blue-500 px-6 py-3 rounded-md font-semibold transition duration-300 transform hover:scale-105 hover:bg-purple-500 hover:text-white">
        Avasta minu tööd
      </button>
    </section>
  );
};

export default Hero;
