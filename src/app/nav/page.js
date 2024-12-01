"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const EtalonnagePage = () => {
  const services = [
    {
      title: "",
      définitions: [
        {
          subtitle: "",
          items: [
            "Capacité en essai dynamique ±100KN. ",
            "Capacité en essai statique ±150KN.",
            "Fréquence de 0.01Hz à 50 Hz.",
            
            

           
          ],
        },
      ],
      images: ["/Capturehb.PNG"],
    },
    {
      title: "Les paramètres mesurés",
      définitions: [
        {
          
          items: [
            "•	Nombre de cycles à la rupture (Nf)",
            "•	Amplitude de la contrainte (Δσ)",
            "•	Rapport de contrainte (R)",
            "•	Température",
            "•	Fréquence de résonance",

           
          ],
        },
      ],
      images: ["/IMG_4412.JPG"],
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
        src="/image (17).jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Essai de fatigue</h1>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
       
        <p className="text-gray-700 text-lg leading-relaxed">
        L&apos;essai de fatigue est un outil indispensable pour évaluer la durée de vie d&apos;un matériau soumis à des sollicitations cycliques. Il permet de garantir la fiabilité des structures et d&apos;optimiser la conception des composants.
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
                  className={`w-full ${service.title === "" || service.title === "L'entailleuse"|| service.title === "• Échelle de Rockwell :" ? 'max-w-[50%]' : 'max-w-[500px]'} h-auto object-contain rounded-lg shadow-md transition-transform transform hover:scale-105`}
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
