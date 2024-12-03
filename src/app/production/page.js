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
        •	La surveillance et l&apos;amélioration de la précision pour les machines CNC (Computer Numerical Control), CMMS (Coordinate Measuring Machines), machines à mesurer la longueur, etc. Par interférométrie (Contrôle le déplacement suivant l&apos;axe X, Y et Z. La rotation de la table à 360°).
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
                  className="w-full h-auto object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
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
