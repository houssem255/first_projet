"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const services = [
    
    
    {
      title: "• Échelle de Brinell :",
      définitions: [
        {
          items: [
            "• Les pénétrateur bille en acier trompé Brinell (Ø1mm, Ø2.5mm, Ø5mm, Ø10mm)",
            "• La charge est choisie en fonction de la taille de la bille et du matériau à tester.",
          ],
        },
      ],
      images: ["/Capture5.PNG"],
    },
   
  ];

  return (
    <div
      className="flex flex-col items-center p-4 min-h-screen"
      style={{
        backgroundImage: "url('/4872987.jpg')", // Path to background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.img
        src="/40-imageonline.co-merged.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-4xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Digitalisation 3D</h1>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
     
        <p className="text-gray-700 text-lg leading-relaxed">
        La digitalisation d’objets se fait par l’utilisation de scanner 3D, elle est connue par sa rapidité et la précision de la géométrie obtenue. 
        </p>
      </section>

    </div>
  );
};

export default EtalonnagePage;

