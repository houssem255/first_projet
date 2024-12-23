"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "",
      définitions: [
        {
          subtitle: "",
          items: [
           
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
        src="/19-imageonline.co-merged (1).jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Vérification de moyens de production</h1>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
        
        <p className="text-gray-700 text-lg leading-relaxed">
        Le CTIME propose un service de calibration de vos machines à commande numérique (CN) utilisant des techniques d’interférométrie de haute précision. Cette méthode permet d’obtenir des mesures extrêmement précises des déplacements linéaires et angulaires des axes de vos machines, garantissant ainsi leur performance optimale.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
        Ce service permet d’améliorer la précision des usinages, d’assurer une longévité accrue de vos équipements et de réduire les coûts liés aux erreurs de fabrication.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
        Nous nous engageons à respecter des délais rapides et à offrir un service de haute qualité pour maximiser la productivité et la précision de vos machines à commande numérique
        </p>
      </section>

     
    </div>
  );
};

export default EtalonnagePage;
