'use client';
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Engrenage droit",
      définitions: [
        "Un engrenage droit est un type d&apos;engrenage où les dents sont disposées parallèlement à l&apos;axe de rotation. Il transmet le mouvement de manière directe et efficace, mais peut générer du bruit et des vibrations à des vitesses élevées.",
      ],
      images: ["/images.jfif"],
    },
    {
      title: "Engrenage hélocoidal",
      définitions: [
        "Un engrenage hélocoidal a des dents en spirale, ce qui permet un contact progressif entre les dents lors de l&apos;engrenage. Cela réduit les chocs et le bruit par rapport aux engrenages droits, ce qui les rend adaptés à des applications à grande vitesse.",
      ],
      images: ["/téléchargement (6).jfif"],
    },
    {
      title: "Engrenage conique droit",
      définitions: [
        "Un engrenage conique droit est un type d&apos;engrenage conique dont les dents sont droites et sont disposées sur un cône. Il permet de transmettre le mouvement entre des axes qui se croisent généralement à 90 degrés.",
      ],
      images: ["/images (1).jfif"],
    },
    {
      title: "Engrenage à chevrons",
      définitions: [
        "Un engrenage à chevrons est conçu pour réduire le bruit et les vibrations, en assurant un contact plus stable entre les dents.",
      ],
      images: ["/téléchargement (1).jfif"],
    },
    {
      title: "Engrenage conique à dentures spirales",
      définitions: [
        "Un engrenage conique à dentures spirales a des dents en spirale, ce qui offre un contact plus doux et progressif entre les dents. Cela permet une transmission de puissance plus efficace et réduit le bruit par rapport aux engrenages coniques droits.",
      ],
      images: ["/39_0509.JPG"],
    },
    {
      title: "Crémaillère à rapport constant et variable",
      définitions: [
        "Une crémaillère à rapport constant et variable transforme un mouvement rotatif en mouvement linéaire, permettant des ajustements précis.",
      ],
      images: ["/téléchargement (2).jfif"],
    },
    {
      title: "Roue à chaîne",
      définitions: [
        "Une roue à chaîne est un mécanisme qui utilise une chaîne pour transmettre le mouvement entre deux ou plusieurs roues dentées.",
      ],
      images: ["/images (3).jfif"],
    },
    {
      title: "Hob cutter",
      définitions: [
        "Un hob cutter est un outil utilisé pour créer des engrenages, des cannelures et d&apos;autres profils dentés.",
      ],
      images: ["/téléchargement (3).jfif"],
    },
    {
      title: "Shaving gear",
      définitions: [
        "Un shaving gear est utilisé pour affiner les dents d&apos;engrenage, améliorant la précision et la finition.",
      ],
      images: ["/téléchargement (4).jfif"],
    },
    {
      title: "Identification d&apos;engrenage droit et hélicoidal",
      définitions: [
        "L&apos;identification d&apos;engrenage droit et hélicoidal concerne les méthodes de mesure pour déterminer les caractéristiques géométriques des engrenages.",
      ],
      images: ["/téléchargement (5).jfif"],
    },
  ];

  return (
    <div 
      className="flex flex-col items-center p-10 min-h-screen"
      style={{
        backgroundImage: "url('/4872987.jpg')", // Background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.img
        src="/2.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-3xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Inspection d&apos;engrenage</h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Introduction</h2>
        <p className="text-gray-700">
          L&apos;inspection des engrenages a toujours été un domaine très pointu. Avec des calculs spécifiques à la géométrie des engrenages, même les meilleurs inspecteurs ne pouvaient en général pas exploiter les détails de la géométrie de ces éléments. On utilisait traditionnellement un matériel dédié à l&apos;inspection des engrenages, très onéreux, qui était la seule méthode permettant d&apos;identifier des problèmes de fabrication. La possibilité d&apos;automatiser l&apos;inspection des engrenages à l&apos;aide d&apos;une MMT, un équipement plus flexible et relativement économique, met l&apos;inspection des engrenages à la portée de presque tout atelier qui en a besoin. L&apos;autre avantage est que de nombreux ateliers possèdent de toute façon une MMT automatique. Ainsi, l&apos;inspection des engrenages étend les fonctionnalités d&apos;un outil existant.
        </p>
      </section>
      
      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Services</h1>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl transition-transform transform hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{service.title}</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null; // Prevent looping
                    e.target.src = "/path/to/placeholder.jpg"; // Placeholder image
                  }}
                />
              ))}
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Définitions :</h3>
              <ul className="list-disc list-inside text-gray-700">
                {service.définitions.map((def, idx) => (
                  <li key={idx}>{def}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default EtalonnagePage;
