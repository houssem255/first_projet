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
        Le CTIME propose un service de digitalisation 3D de vos pièces mécaniques utilisant un scanner de haute précision. Ce service vous permettra d&apos;obtenir des modèles 3D détaillés et des dessins de définition techniques, parfaitement adaptés à vos besoins de conception et de production. Grâce à notre technologie avancée, nous garantissons une précision micrométrique, idéale pour des pièces complexes ou de petite taille. Nous assurons un traitement rapide des données et la génération de fichiers CAO compatibles (. STL, STEP, IGES, etc.). Nos solutions permettent de réduire les coûts de prototypage et d&apos;améliorer la gestion des pièces existantes.
        </p>
      </section>

    </div>
  );
};

export default EtalonnagePage;

