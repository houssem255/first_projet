"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-10 min-h-screen" style={{ backgroundImage: 'url("/4872987.jpg")' }}>
      <motion.img
        src="/Capturehl.PNG" // Remplace par l'URL de ton image
        alt="Présentation de l'entreprise"
        className="w-full max-w-3xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Rétroconception </h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Notre Mission</h2>
        <p className="text-gray-700">
        La rétro-ingénierie est le processus qui permet d’identifier Les propriétés d’un objet physique en effectuant une analyse complète de sa structure, de ses fonctions et de ses conditions de fonctionnement. 
        </p>
        <p>
        Les mesures de la géométrie de la surface totale de l’objet sont prises, soit manuellement, soit à l’aide de diverses technologies de mesure.
        </p>
      </section>
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">RÉTRO CONCEPTION PAR NUMÉRISATION 3D</h2>
        <p className="text-gray-700">
        C’est une technologie de mesure 3D, afin de créer une représentation numérique 3D de l’objet. Elle permet de relever les géométries les plus complexes.
        </p>
      </section>

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Vidéo de Présentation</h2>
        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src="/houssem.mp4" // Remplace par l'ID de ta vidéo
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Vidéo de Présentation"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
