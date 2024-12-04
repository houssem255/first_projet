'use client';

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
    { icon: <FaTools className="text-4xl text-red-600 mx-auto mb-4" />, title: "Etalonnage dimensionnelle", description: "Étalonnage précis des instruments à cote variable et des étalons de référence.", link: '/etalo', imgSrc: '/EtalCale.JPG' },
    { icon: <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />, title: "Inspection d'engrenage", description: "Étalonnage précis des instruments à cote variable et des étalons de référence.", link: '/engrenage', imgSrc: '/Engrenage.png' },
    { icon: <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />, title: "Vérification de moyens de production", description: "Vérification des formes, des positions et des états de surface.", link: '/production', imgSrc: '/moyens de production.jpg' },
    { icon: <FaDraftingCompass className="text-4xl text-red-600 mx-auto mb-4" />, title: "Etat de surface et contour de profil", description: "Détecter les caractéristiques géométriques et les caractéristiques de surface des pièces.", link: '/surface', imgSrc: '/imgonline-com-ua-collage-B6xL8tvDBCD.jpg' },
    { icon: <FaCheckCircle className="text-4xl text-red-600 mx-auto mb-4" />, title: "Pièces complexe", description: "Contrôle rigoureux des moyens de production pour une qualité optimale.", imgSrc: '/complexe.jpg' ,link: '/complexe' },
    { icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />, title: "Pièces volumineuse", description: "Réalisation de rétro-conception et vérification de pièces volumineuses.", link: '/volumineuses', imgSrc: '/39-imageonline.co-merged.jpg' },
    { icon: <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />, title: "Digitalisation 3D", description: "Réalisation de rétro-conception et vérification de pièces volumineuses.", link: '/Digitalisation', imgSrc: '/imgonline-com-ua-twotoone-Xqs0kucM0vXfxunV.jpg' },
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
          Laboratoire de Métrologie Dimensionnelle
        </h1>
        <p className="text-center text-lg text-black mb-8">
          Vous souhaitez garantir la précision de vos mesures ? Notre laboratoire de métrologie dimensionnelle vous offre une gamme complète de services pour vérifier et certifier les dimensions de vos pièces et composants.
        </p>
        <h2 className="text-3xl font-semibold text-black my-4">La métrologie dimensionnelle : l&apos;art de la mesure précise</h2>
        <p className="text-lg text-black mb-4">
          La métrologie dimensionnelle est essentielle pour assurer la conformité des dimensions des pièces, garantissant ainsi leur bon fonctionnement et leur interchangeabilité.
        </p>

        <h3 className="text-2xl font-semibold text-black mb-2">Pourquoi réaliser des contrôles de métrologie dimensionnelle ?</h3>
        <ul className="list-disc list-inside text-black mb-4">
          <li><strong>Précision :</strong> Assurer des mesures exactes pour une qualité optimale.</li>
          <li><strong>Conformité :</strong> Vérifier que les pièces respectent les normes et spécifications.</li>
          <li><strong>Amélioration continue :</strong> Identifier les écarts et optimiser les processus de fabrication.</li>
          <li><strong>Fiabilité :</strong> Renforcer la confiance dans les produits finis.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-black mb-2">Les paramètres mesurés</h3>
<ul className="list-disc list-inside text-black mb-4">
  <li><strong>Des dimensions : </strong> longueur, largeur, hauteur, angle …</li>
  <li className="flex ">
    
    
    <strong>•  Dimensionnement et tolérance géométriques ‘GD&T’ :</strong>
      <Image
        src="/hjhkjh.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/wcbn.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6   ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/klmq.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/mpqrcj.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/qsdf.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/fbt.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/cv.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <Image
        src="/0.jpg"
        alt="Laboratoire de Métrologie Dimensionnelle"
        className={`w-6 h-6  ml-2 object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        width={25}
        height={25}
      />
      <strong>....</strong> </li>
      <li><strong>La rugosité (État de surface)</strong>  </li>
  
</ul>
 


        <h2 className="text-3xl font-semibold text-center  text-black mb-25 my-20">Nos services</h2>

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
