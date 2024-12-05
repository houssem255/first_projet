"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Matériaux de haute résistance à la traction jusqu'a 600 kN",
      définitions: [
        {
          subtitle: "Les matériaux capables de supporter des charges de traction aussi élevées sont généralement des métaux ou des alliages à haute performance.",
          items: [
            "Aciers haute résistance : (Aciers alliés, Aciers inoxydables)",
            "Alliages d’aluminium : (Alliages d'aluminium série 7000)",
            "Superalliages ",
            "Titane et ses alliages",
          ],
        },
      ],
      images: ["/Capture3.PNG"],
    },
   
  ];

  return (
    <div
      className="flex flex-col items-center p-4 min-h-screen"
      style={{
        backgroundImage: "url('/4872987.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.img
        src="/41-imageonline.co-merged.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-2xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Pièces volumineuses</h1>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
        
        <p className="text-gray-700 text-lg leading-relaxed">
        Il constitue une gamme de solutions d’application plus étendue, de très longue portée et extrêmement portable. Une mesure 3D dans un grand volume est une solution rapide et précise qui convient à de multiples applications industrielles.
        </p>
      </section>

      
    </div>
  );
};

export default EtalonnagePage;
