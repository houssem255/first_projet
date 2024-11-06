'use client';

import { useState } from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { BOL, Earth } from "../../svg";

export default function First() {
  const [count, setCount] = useState(0);

  return (
    <section 
      className="flex flex-col items-center w-1/2 p-4 mx-auto bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-2xl transition-transform duration-300" 
      style={{
        backgroundImage: "url('/4872987.jpg')", // Update the image path if needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-2xl font-extrabold text-center mb-2 text-black drop-shadow-lg">
        <Typewriter 
          words={['Qui sommes-nous ?', 'Hello in ctime']} 
          loop={0} 
          cursorStyle='|' 
          cursorBlinking={true}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>

      <p className="text-black text-sm mb-2 leading-relaxed text-left px-2">
        Le CTIME est une entreprise spécialisée dans la métrologie de haute précision et essais mécaniques, intervenant en Algérie.
        <br />
        Forts de notre expertise et d&apos;une technologie de pointe, nous utilisons des outils avancés tels que :
      </p>

      <ul className="text-black text-sm mb-2 leading-relaxed text-left px-2 list-disc list-inside">
        <li>Machine à Mesurer Tridimensionnelle de haute précision</li>
        <li>Bras de mesure 7 axes avec scanner</li>
        <li>Laser tracker</li>
        <li>Interféromètre laser</li>
        <li>Bancs d&apos;étalonnage d&apos;ESM</li>
      </ul>

      <p className="text-black text-sm mb-2 leading-relaxed text-left px-2">
        Notre engagement envers la qualité, la réactivité et l&apos;innovation nous permet de fournir des services fiables et performants, adaptés aux besoins spécifiques de chaque client. Avec CTIME, bénéficiez d&apos;une expertise reconnue pour :
      </p>

      <ul className="text-black text-sm mb-2 leading-relaxed text-left px-2 list-disc list-inside">
        <li>Des mesures exigeantes</li>
        <li>Des essais mécaniques de précision</li>
      </ul>

      <div className="flex flex-wrap justify-center mt-2 gap-4">
        <div className="flex items-center gap-2 p-2 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <Earth size={40} color={'red'} />
          <div>
            <h2 className="font-semibold text-sm text-black">Support 24/7</h2>
            <p className="text-gray-600 text-xs">Nous sommes là pour vous.</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <BOL size={40} color={'red'} />
          <div>
            <h2 className="font-semibold text-sm text-black">Agence Récompensée</h2>
            <p className="text-gray-600 text-xs">Votre satisfaction est notre priorité.</p>
          </div>
        </div>
      </div>

      <button className="mt-2 px-4 py-1 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-500 transition duration-200 transform hover:scale-105">
        <Link href="/ctime">
          En savoir plus
        </Link>
      </button>
    </section>
  );
}
