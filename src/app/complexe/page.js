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
        src="/MMT-2024-12-22-13h54m50s880-imageonline.co-merged.png"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl h-600 mb-12 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Pièces complexe</h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-6xl">
        <p className="text-gray-700">
        Le CTIME propose un service d&apos;inspection et de mesure de pièces complexes, utilisant des équipements de mesure de très haute précision. Notre expertise permet de garantir l’exactitude des dimensions et des tolérances les plus strictes, essentielles à la qualité et à la performance de vos produits.
        </p>
        <p className="text-gray-700">Nous utilisons des technologies avancées telles que la métrologie 3D et une machine de mesure tridimensionnelle (MMT) pour inspecter vos pièces sous tous les angles, détecter les défauts invisibles à l&apos;œil nu, et réaliser des contrôles détaillés des géométries.</p>
        <p className="text-gray-700">Nos services incluent :</p>
        <ul className="text-gray-700">
          <li><strong>- Analyse préliminaire</strong>  des spécifications de la pièce et des critères de mesure.</li>
          <li><strong>- Inspection détaillée</strong> à l’aide d’équipements de haute précision.</li>
          <li><strong>- Mesure de dimensions complexes</strong>, telles que les tolérances géométriques et les contours 3D.</li>
          <li><strong>- Édition de rapports détaillés</strong>et recommandations pour les améliorations nécessaires.</li>
        </ul>
        <p className="text-gray-700">Nous assurons un service rapide, fiable et conforme aux normes les plus rigoureuses, avec des résultats documentés et traçables pour optimiser vos processus de fabrication.</p>
      </section>

      

      
    </div>
  );
};

export default EtalonnagePage;
