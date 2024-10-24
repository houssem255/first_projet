"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTachometerAlt, FaShieldAlt, FaWeight, FaHammer } from 'react-icons/fa';
import Link from 'next/link';

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-900 text-gray-200">
      <div className="relative">
        <Image
          src="/Equipements CTIME.jpg"
          alt="Laboratoire de Métrologie Dimensionnelle"
          width={800}
          height={250}
          className={`w-full h-[250px] object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        />
      </div>

      <div className={`container mx-auto px-4 py-12 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`text-5xl font-bold text-red-600 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Laboratoire d’essais mécaniques
        </h1>

        <p className="text-lg text-gray-300 my-4">
          Vous souhaitez connaître les limites de vos matériaux ? Notre laboratoire d&apos;essais mécaniques vous propose une gamme complète de tests pour évaluer la résistance, la dureté, la fatigue et bien d&apos;autres propriétés.
        </p>

        <h2 className="text-3xl font-semibold text-red-500 my-4">Les essais mécaniques : une exploration des propriétés des matériaux</h2>
        <p className="text-lg text-gray-300 mb-4">
          Les essais mécaniques sont cruciaux pour évaluer la résistance, la déformabilité et le comportement d&apos;un matériau lors de différentes sollicitations.
        </p>

        <h3 className="text-2xl font-semibold text-red-500 mb-2">Pourquoi réaliser des essais mécaniques ?</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li><strong>Sécurité :</strong> Garantir la fiabilité des structures et produits.</li>
          <li><strong>Conception :</strong> Optimiser la conception des pièces et structures.</li>
          <li><strong>Contrôle qualité :</strong> Assurer la conformité des matériaux.</li>
          <li><strong>Recherche et développement :</strong> Améliorer les performances des matériaux.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-red-500 mb-2">Les paramètres mesurés</h3>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li><strong>Limite élastique :</strong> Contraintes maximale sans déformation permanente.</li>
          <li><strong>Résistance à la traction :</strong> Contraintes maximale avant rupture.</li>
          <li><strong>Allongement à la rupture :</strong> Augmentation de longueur à la rupture.</li>
          <li><strong>Module d&apos;Young :</strong> Rigidité du matériau.</li>
          <li><strong>Dureté :</strong> Résistance à la pénétration.</li>
          <li><strong>Fatigue :</strong> Rupture sous charge répétée.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-center text-red-500 mb-10">Nos services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaTachometerAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/traction'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Traction</h3>
            </Link>
            <h4 className="text-lg font-semibold text-red-500 mb-2">Essais spécifiques</h4>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaShieldAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/durete'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Dureté</h3>
            </Link>
            <h4 className="text-lg font-semibold text-red-500 mb-2">Mesures spécifiques</h4>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaWeight className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/nav'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Fatigue</h3>
            </Link>
            <p className="text-gray-400">Analyse des performances sous chargement cyclique.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/resilience'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Résilience</h3>
            </Link>
            <p className="text-gray-400">Mesure de la ténacité à l&apos;impact.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/services'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Compression</h3>
            </Link>
            <p className="text-gray-400">Mesure de la résistance des matériaux.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/flexion'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Flexion</h3>
            </Link>
            <p className="text-gray-400">Analyse de la résistance à la flexion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboratoireDeMetrologie;
