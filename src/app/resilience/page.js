"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Caractéristique ",
      définitions: [
        {
          subtitle: "Les matériaux capables de supporter des charges de traction aussi élevées sont généralement des métaux ou des alliages à haute performance. Voici quelques exemples :",
          items: [
            "Energie max : 450 J ",
            "Poids du marteau : 30.3 kg (approx. 300N)",
            "Longueur du pendule :  770 mm ",
            "Résolution en<< énergie 0.01 J et en angle 0.018°.",
            "Vitesse : 5.42 m/s.",
            "Système de mesure : via encodeur.",
            "Capacité d’enregistré 1000 essais.",

          ],
        },
      ],
      images: ["/Capture17.PNG"],
    },
    {
      title: "Les différents types d'entailles",
      définitions: [
        {
          
          items: [
            "•	L’entaille en V (type A dans la norme ASTM).",
            "•	L’entaille en U (type C dans la norme ASTM) .",
            "Le choix de l'entaille dépend de la norme utilisée et du type de matériau testé.",
          
          ],
        },
      ],
      images: ["/Capture75.PNG"],
    },
    {
      title: "L'entailleuse",
      définitions: [
        {
          items: [
            "Vitesse de coupe de broche : 7,1 à 37,8 mm/sec ",
            "Fourchette de température de fonctionnement : 5°C à 40°C ",
            "Classe de protection : Classe 1 (doit être reliée à la terre) ",
            "Longueur du pendule :  770 mm",
            "Résolution en énergie 0.01 J et en angle 0.018°. ",
            "Vitesse : 5.42 m/s.",
            
          ],
        },
      ],
      images: ["/Capture75.PNG"],
    },
    {
      title: "Dispositif ",
      définitions: [
        {
          subtitle: "Type pelle pour positionnement et centrage rapide des éprouvettes",
        },
      ],
      images: ["/Capture712.PNG"],
    },
    {
      title: "Centreur de référence",
      définitions: [
        {
          items: [
            "Pour ajustement et vérification du centrage des supports‐percuteur.",
          ],
        },
      ],
      images: ["/Capture46.PNG"],
    },
    {
      title: "Pinces ASTM",
      définitions: [
        {
          items: [
            "Pour positionnement des éprouvettes sur les supports",
          ],
        },
      ],
      images: ["/Capture1456.PNG"],
    },

  ];

  return (
    <div
      className="flex flex-col items-center p-4 min-h-screen"
      style={{
        backgroundImage: "url('/4872987.jpg')", // Background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.img
        src="/image (4).jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Essai de Charpty</h1>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Introduction</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
        L&apos;essai de Charpy est une méthode standardisée utilisée en métallurgie pour évaluer la résistance d&apos;un matériau à la rupture par choc. Il est particulièrement pertinent pour les matériaux métalliques, mais peut également être appliqué à d&apos;autres types de matériaux. Cet essai mesure l&apos;énergie absorbée par un matériau lorsqu&apos;il est soumis à un choc soudain, ce qui permet d&apos;évaluer sa ténacité.
        </p>
      </section>

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
              {/* Loop through the definitions */}
              {service.définitions.map((def, idx) => (
                <div key={idx} className="mb-6">
                  <h6 className="text-gray-800">{def.subtitle}</h6>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    {def.items && def.items.length > 0 ? (
                      def.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li></li>
                    )}
                  </ul>
                </div>
              ))}
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4 p-4">
              {/* Display images */}
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className={`w-full ${service.title === "Les différents types d'entailles" || service.title === "L'entailleuse"|| service.title === "• Échelle de Rockwell :" ? 'max-w-[50%]' : 'max-w-[500px]'} h-auto object-contain rounded-lg shadow-md transition-transform transform hover:scale-105`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/path/to/placeholder.jpg"; // Placeholder image path
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
