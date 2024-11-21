"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Qu'est-ce la fatigue d'un matériau ?",
      définitions: [
        {
          subtitle: "La fatigue d’un matériau désigne le phénomène de détérioration progressive et finalement la rupture d’un matériau sous l’effet de charges répétées qui sont généralement inférieures à la charge maximale que le matériau peut supporter en une seule application. ",
          items: [
            "Ce processus de fatigue est particulièrement pertinent pour les matériaux utilisés dans des structures ou des composants soumis à des cycles de charge répétés au cours de leur utilisation normale, comme dans l’aéronautique ou l’automobile. ",
           
          ],
        },
      ],
      images: ["/materaux.png"],
    },
    {
      title: "Qu'est-ce qu'un essai de fatigue ?",
      définitions: [
        {
          subtitle: "Les essais de traction permettent d’assurer le contrôle de qualité et faciliter le développement de nouveaux produits. Ces tests portant sur les propriétés mécaniques permettent de déterminer la résistance, l’élasticité et la ductilité des matériaux. Les industries font appel à notre laboratoire pour un essai de traction afin de :",
          items: [
            "L'essai de fatigue est un type d'essai mécanique qui consiste à soumettre un matériau à des charges cycliques répétées, c'est-à-dire à des sollicitations qui varient en amplitude et en direction au cours du temps. L'objectif est de déterminer la résistance du matériau à ce type de sollicitation, qui peut conduire à une rupture progressive, même si la contrainte maximale appliquée est inférieure à la limite élastique du matériau.",
           
          ],
        },
      ],
      images: ["/machine de fatigue.png"],
    },
    {
      title: "Pourquoi réaliser un essai de fatigue ?",
      définitions: [
        {
          items: [
            "mieux connaître l’espérance de vie du produit et le cycle de vie ",
            "déterminer une durée de garantie adaptée",
            "élaborer un calendrier de maintenance préventive ",
            "mettre en évidence les zones d’usures, les points de rupture et les faiblesses mécaniques",
            "Tout ceci permet d’envisager des évolutions de conception pour améliorer la robustesse et la fiabilité du produit.",
          ],
        },
      ],
      images: ["/dispo.jpg"],
    },
    {
      title: "Les paramètres influençant la fatigue",
      définitions: [
        {
         
          items: [
            "Amplitude de la contrainte : Plus l'amplitude de la contrainte est élevée, plus la durée de vie en fatigue est courte.",
            "Rapport de charge : Le rapport entre la contrainte maximale et la contrainte minimale influence la durée de vie en fatigue.",
            "Fréquence de chargement : La fréquence de chargement peut avoir un impact sur la durée de vie en fatigue, notamment pour certains matériaux.",
            "Température : La température peut affecter la résistance à la fatigue.",
            "Environnement : L'environnement (humidité, corrosion) peut accélérer la propagation des fissures de fatigue.",
          ],
        },
      ],
      images: ["/essai de fatigue.png"],
    },
    {
      title: "Les matériaux soumis à un essai de fatigue",
      définitions: [
        {
         
          items: [
            "L'essai de fatigue est un outil indispensable pour assurer la fiabilité et la durabilité des structures et des composants. Il permet d'évaluer la résistance d'un matériau à des sollicitations répétées et de prévenir les ruptures inattendues.",
            "Les matériaux soumis à un essai de fatigue",
            "Les différents types de matériaux qui subissent ces essais comprennent : les métaux, les composites, les polymères…",
            "Les industries notamment de l’aérospatiale ou l’automobile, utilisent des essais de fatigue pour déterminer les propriétés mécaniques d’un matériau ou d’une structure, afin de garantir leur fiabilité et leur durabilité dans des conditions d’utilisation réelles et répétitives.",
          ],
        },
      ],
      images: ["/IMG_4125.JPG"],
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
        src="/images (10)-imageonline.co-merged.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">essai de fatigue</h1>

     

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="bg-white shadow-lg rounded-lg p-0 mb-5 w-full max-w-3xl transition-transform transform hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2
            className={`text-2xl font-semibold text-gray-800 mb-4 text-center ${service.title === "Identification d'engrenage droit et hélicoidal" ? 'text-red-600' : ''}`}
          >
            {service.title}
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 p-4 bg-gray-100 rounded-lg shadow-md">
              {service.définitions.map((def, idx) => (
                <div key={idx} className="mb-6">
                  <p className=" text-gray-800">{def.subtitle}</p>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    {def.items && def.items.length > 0 ? (
                      def.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>Pas d&apos;éléments disponibles</li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
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
                    e.target.onerror = null;
                    e.target.src = "/path/to/placeholder.jpg"; // Path to placeholder image
                  }}
                />
              ))}
            </div>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default EtalonnagePage;
