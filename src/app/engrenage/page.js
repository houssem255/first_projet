"use client"
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Engrenage droit",
      définitions: [
        {
          subtitle: "Engrenage droit",
          items: [
            "Measurement of straight (cylindrical gears)",
            "Single points & scanning",
            "Internal and external gears",
            "With and without eccentricity",
            "Profile and helix and also pitch, runout and topography",
            "Graphical evaluation and report",
            "Reverse engineering: Generation of the CAO",
          ],
        },
      ],
      images: ["/images.jfif"],
    },
    {
      title: "Engrenage hélocoidal",
      définitions: [
        {
          subtitle: "Engrenage hélocoidal",
          items: [
            "Measurement of helical gear",
            "Single points & scanning",
            "Internal and external gears",
            "With and without eccentricity",
            "Profile and helix and also pitch, runout and topography",
            "Graphical evaluation and report",
            "Reverse engineering: Generation of the CAO",
          ],
        },
      ],
      images: ["/téléchargement (6).jfif"],
    },
    {
      title: "Engrenage conique droit",
      définitions: [
        {
          subtitle: "Engrenage conique droit",
          items: [
            "Internal and external gear",
            "Gear geometry parameter definition via input or measurement",
            "Single points & Scanning",
            "Master grid generation (calculated, measured or CAD master)",
            "Best fit of the topography; • Graphical evaluation and report",
            "Reverse engineering: Generation of the CAD model based on the parameter set",
          ],
        },
      ],
      images: ["/images (1).jfif"],
    },
    {
      title: "Engrenage à chevrons",
      définitions: [
        {
          subtitle: "Engrenage à chevrons",
          items: [
            "Measurement and evaluation of the relative axial and radial Position of two helical gears (internal and external gearings)",
            "Z-position of the apex",
          ],
        },
      ],
      images: ["/téléchargement (1).jfif"],
    },
    {
      title: "Engrenage conique à dentures spirales",
      définitions: [
        {
          subtitle: "Engrenage conique à dentures spirales",
          items: [
            "Measurement of involute spiral bevel gears and crown gears",
            "Gear geometry parameter definition via input or measurement",
            "Single point & scanning",
            "Measurement of the master flank",
            "Measurement and evaluation of topography incl. best fit, pitch and runout",
            "Pitch point definition based on the master grid or based on the radius & Z coordinate",
            "Evaluations of the runout: with eccentricity and/or eccentricity eliminated",
            "Special measurements like tip cone, root cone, tooth height and root scan",
            "Definition of the master flank (import or CAD based)",
            "Graphical evaluation and report",
          ],
        },
      ],
      images: ["/39_0509.JPG"],
    },
    {
      title: "Crémaillère à rapport constant et variable",
      définitions: [
        {
          subtitle: "Crémaillère à rapport constant",
          items: [
            "Measurement and evaluation of straight/helical racks with constant pitch incl. alignment",
            "Measurement and evaluation of pin holes",
            "The following evaluations are supported: width and height of the gear rack, Pitch, Tooth thickness and height, Size over ball, Helix line and angle, Profile line and angle",
            "Measurement in scanning mode",
            "Graphical evaluation and report",
          ],
        },
        {
          subtitle: "Crémaillère à rapport variable",
          items: [
            "Graphical evaluation of peripheral speed and the path deviation depending on the angle of rotation of the pinion.",
          ],
        },
      ],
      images: ["/téléchargement (2).jfif"],
    },
    {
      title: "Roue à chaîne",
      définitions: [
        {
          subtitle: "Roue à chaîne",
          items: [
            "Measurement and evaluation of sprockets according to DIN 606",
            "Continuous contact scanning",
            "With & without rotary table",
            "Gap types:",
            "Max/Min Profile with Radius and Angle (Typ A)",
            "Profile according to DIN 8186-1 (Typ B)",
            "Flank Angle Gamma (Typ C)",
            "Measurement and evaluation of the axial and flank profile, pitch and topography",
            "Evaluation of the tip, root and pitch circle and the ball size over balls",
            "CAD model generation",
            "Graphical evaluation and 3D-evaluation of the topography deviations with the CAD model",
          ],
        },
      ],
      images: ["/sproket.jpg"],
    },
    {
      title: "Hob cutter",
      définitions: [
        {
          subtitle: "Hob cutter",
          items: [
            "For single and multi-thread hobs with parallel or helical flutes;",
            "All evaluations as required by DIN 3968:1960",
            "Radial/axial run-out upper & lower test cullar and chucking face",
            "Shape/position cutting face",
            "Pitch of flutes-Form deviation of the cutting edge",
            "Tooth thickness-Hob lead over cutting edge etc",
            "Radial run-out at tooth tip",
            "Shape/position cutting face",
            "Pitch of flutes-Form deviation of the cutting edge",
            "Tooth thickness-Hob lead over cutting edge etc",
            "In addition to DIN:",
            "Axial pitch",
            "Tooth height for topping cutter",
          ],
        },
      ],
      images: ["/téléchargement (3).jfif"],
    },
    {
      title: "Shaving gear",
      définitions: [
        {
          subtitle: "Shaving gear",
          items: [
            "Measurement and evaluation of: Helix, Profile, Pitch, Runout",
            "Corrections adjustment parameters for shaper cutter",
            "The evaluations of shaving gears are similar to the of the cylindrical gears",
            "Single points and scan mode",
          ],
        },
      ],
      images: ["/téléchargement (4).jfif"],
    },
    {
      title: "Identification d'engrenage droit et hélicoidal",
      définitions: [
        {
          subtitle: "Identification d'engrenage droit et hélicoidal",
          items: [
            "Inspection of straight and helical, external and internal gears or gear segments with unknown parameters",
            "All standard parameters are evaluated, i.e. module, pressure and helix angle, addendum modification, crowning of profile an helix, tip/root circle diameter etc.",
            "Reverse engineering: Generation of the CAD model based on the parameter set",
          ],
        },
      ],
      images: ["/images.jfif", "/téléchargement (6).jfif"],
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
        src="/helical-gear-imageonline.co-merged.png"
        alt="Étalonnage des Instruments"
        className="w-full max-w-5xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">Inspection d&apos;engrenage</h1>

      <section className="bg-white shadow-lg rounded-lg p-8 mb-10 w-full max-w-5xl">
        
        <p className="text-gray-700 text-lg leading-relaxed">
        Le CTIME propose d&apos;effectuer une inspection complète de vos engrenages en utilisant la MMT de haute précision. Cette technologie avancée permet de mesurer avec une grande précision les dimensions, la géométrie et les spécifications de vos engrenages, garantissant ainsi une qualité et une performance optimales.
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
                  <h3 className="text-xl font-semibold text-gray-800">{def.subtitle}</h3>
                  <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    {def.items && def.items.length > 0 ? (
                      def.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))
                    ) : (
                      <li>No items available</li>
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
                  className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
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
