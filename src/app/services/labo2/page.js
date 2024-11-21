"use client"
import Link from 'next/link'; 
import React, { useEffect, useState } from 'react';
import { FaTools, FaRulerCombined, FaCogs, FaDraftingCompass, FaCheckCircle, FaObjectGroup } from 'react-icons/fa';
import Image from 'next/image';

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />, title: "Essai de Traction", description: "Essais spécifiques", link: '/traction', imgSrc: '/IMG_4411.JPG' },
    { icon: <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />, title: "Essai de Dureté", description: "Mesures spécifiques", imgSrc: '/IMG_4138.JPG', link: '/durete' },
    { icon: <FaDraftingCompass className="text-4xl text-red-600 mx-auto mb-4" />, title: "Essai de Charpty", description: "Analyse des performances sous chargement cyclique.", imgSrc: '/IMG_4418.JPG', link: '/resilience' },
    { icon: <FaCheckCircle className="text-4xl text-red-600 mx-auto mb-4" />, title: "Essai de Fatigue", description: "Mesure de la ténacité à l&apos;impact.", imgSrc: '/IMG_4413.JPG', link: '/nav' },
    
    { icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />, title: "Essai de Flexion", description: "Analyse de la résistance à la flexion .", link: '/flexion', imgSrc: '/Flexion.JPG' },
  ];

  return (
    <div className="bg-gray-100">
      <div className="relative">
        <Image
          src="/Equipements CTIME.jpg"
          alt="Laboratoire de Métrologie Dimensionnelle"
          className={`w-full h-[250px] object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
          width={1000}
          height={250}
        />
      </div>

      <div 
        className={`container mx-auto px-4 py-12 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: 'url(/4872987.jpg)', // Remplacez par le chemin de votre image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className={`text-5xl font-bold text-black transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Laboratoire d&apos;essais mécaniques
        </h1>
        <p className="text-center text-lg text-black mb-8">
          Vous souhaitez connaître les limites de vos matériaux ? Notre laboratoire d&apos;essais mécaniques vous propose une gamme complète de tests pour évaluer la résistance, la dureté, la fatigue et bien d&apos;autres propriétés.
        </p>
        <h2 className="text-3xl font-semibold text-black my-4">Les essais mécaniques : une exploration des propriétés des matériaux</h2>
        <p className="text-lg text-black mb-4">
          Les essais mécaniques sont cruciaux pour évaluer la résistance, la déformabilité et le comportement d&apos;un matériau lors de différentes sollicitations.
        </p>

        <h3 className="text-2xl font-semibold text-black mb-2">Pourquoi réaliser des essais mécaniques ?</h3>
        <ul className="list-disc list-inside text-black mb-4">
          <li><strong>Sécurité:</strong> Garantir la fiabilité des structures et produits.</li>
          <li><strong>Conception :</strong> Optimiser la conception des pièces et structures.</li>
          <li><strong>Contrôle qualité :</strong> Assurer la conformité des matériaux.</li>
          <li><strong>Recherche et développement :</strong> Améliorer les performances des matériaux.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-black mb-2">Les paramètres mesurés</h3>
        <ul className="list-disc list-inside text-black mb-4">
          <li><strong>Limite élastique:</strong> Contraintes maximale sans déformation permanente.</li>
          <li><strong>Résistance à la traction :</strong> Contraintes maximale avant rupture.</li>
          <li><strong>Allongement à la rupture :</strong> Augmentation de longueur à la rupture.</li>
          <li><strong>Module d&apos;Young :</strong> Rigidité du matériau.</li>
          <li><strong>Dureté :</strong> Résistance à la pénétration.</li>
          <li><strong>Fatigue:</strong> Rupture sous charge répétée.</li>
          <li><strong>Ténacité :</strong> Capacité d&apos;un matériau à résister à la propagation d&apos;une fissure.</li>
          
          <li> La sensibilité d&apos;un matériau à la température.</li>
          <li>Les propriétés d&apos;un matériau composite ou d&apos;un assemblage.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-center text-black mb-10">Nos services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {services.map(({ icon, title, description, link, imgSrc }, index) => (
            <div
              key={index}
              className={`relative overflow-hidden transition-all duration-500 ${hoveredIndex === index ? 'scale-150' : 'scale-75'}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image
                src={imgSrc}
                alt={title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-80' : 'opacity-100'}`}
                width={300}
                height={200}
              />
              <div className="relative z-10 p-4">
                {link ? (
                  <Link href={link}>
                    <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                  </Link>
                ) : (
                  <h3 className="text-xl font-semibold text-black mb-2">{title}</h3>
                )}
                {icon}
                <p className="text-black">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaboratoireDeMetrologie;
