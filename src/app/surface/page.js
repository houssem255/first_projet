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
        src="/27-imageonline.co-merged.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-3xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Etat de surface et contour de profil</h1>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
        
        <p className="text-gray-700 text-lg leading-relaxed">
        Le CTIME propose un service avancé de mesure des paramètres de l&apos;état de surface et du contour de vos pièces mécaniques, en utilisant des équipements de très haute précision. Grâce à des technologies de pointe nous offrons une analyse complète et précise des caractéristiques critiques de vos pièces.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
        Nos services incluent :
        </p>
        <ul className="text-gray-700 text-lg leading-relaxed">
        <li>•	<strong>Mesure de la rugosité de surface : </strong> Détection et quantification des irrégularités de surface (raies, aspérités, etc.) selon les normes définies.</li>
        <li>•	<strong>Analyse des dimensions et du contour :</strong> Vérification de la forme et des dimensions avec une précision micrométrique, assurant la conformité aux spécifications techniques.</li>
        <li>•	<strong>Contrôle topographique 2D et 3D :</strong> Modélisation détaillée des contours et des surfaces pour des rapports approfondis.</li>

    
        </ul>
        <p className="text-gray-700 text-lg leading-relaxed">
        Les résultats sont fournis sous forme de rapports détaillés, avec des visualisations graphiques 
Nous garantissons des résultats rapides, fiables et adaptés à vos besoins spécifiques.

        </p>

        
      </section>

     
    </div>
  );
};

export default EtalonnagePage;
