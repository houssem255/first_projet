"use client";
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Cales étalons 0,1 … 100 mm",
      Capacite: [
        "a) Avec démagnétisation précédent et enlèvement de formation de morfil : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
        "b) Seulement pour des cales étalons nouvelles : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
      ],
      images: ["/19.jpg", "/20.jpg"],
    }, 
  ];

  return (
    <div className="flex flex-col items-center bg-cover bg-center bg-no-repeat p-10 min-h-screen" style={{ backgroundImage: 'url("/4872987.jpg")' }}>
      
      <motion.img
        src="/32-imageonline.co-merged.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-10xl h-1000 mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Pièces complexe</h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <p className="text-gray-700">
          • L’existence des machines à Mesurer Tridimensionnelle (3D) permettant d’effectuer des mesures sur des pièces complexes (des pièces à haute précisions, des gabarits, des outillages et des pièces de prototypes complexes).
        </p>
      </section>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl transition-transform transform hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{service.title}</h2>
          {service.subtitle && <h3 className="text-lg text-gray-600 mb-2">{service.subtitle}</h3>}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className="w-full h-40 object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Capacités :</h3>
              <ul className="list-disc list-inside text-gray-700">
                {service.Capacite.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processus d&apos;Étalonnage</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Réception et vérification de l&apos;instrument.</li>
          <li>Étalonnage selon les spécifications requises.</li>
          <li>Tests de précision et ajustements.</li>
          <li>Émission d&apos;un certificat d&apos;étalonnage.</li>
        </ol>
      </section>
    </div>
  );
};

export default EtalonnagePage;
