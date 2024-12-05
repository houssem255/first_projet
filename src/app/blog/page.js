"use client";
import React from 'react';
import Image from 'next/image';

const formationsData = [
  {
    id: 1,
    titre: 'Formation en Métrologie',
    description: (
      <>
        Adapté aux besoins de collaborateurs souhaitant acquérir les connaissances de base en métrologie dimensionnelle.
        <br style={{ margin: '20px 0', borderTop: '2px solid #ccc' }} />
        <strong>Formation théorique et pratique.</strong>
      </>
    ),
    image: '/IMG_20241205_121057.jpg',
  },
  {
    id: 2,
    titre: 'Formation en Matériaux',
    description: 'Adaptée au collaborateur souhaitant acquérir des connaissances de base dans la caractérisation du comportement mécanique des matériaux.',
    image: '/IMG-20241205-WA0000-imageonline.co-merged (1)-imageonline.co-merged.jpg',
  },
];

const Formations = () => {
  return (
    <div style={{
      padding: '20px',
      background: '#f9f9f9',
      backgroundImage: "url('/4872987.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <h1 className="text-4xl text-center font-extrabold text-black mb-6 drop-shadow-lg">Nos Formations</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {formationsData.map((formation) => (
          <div
            key={formation.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              margin: '10px 0',
              boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s',
              width: '80%',
              maxWidth: '600px',
            }}
            className="formation-card"
          >
            {/* Image with consistent size */}
            <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderRadius: '8px', position: 'relative' }}>
              <Image
                src={formation.image}
                alt={formation.titre}
                layout="fill" // This makes the image fill its parent container
                objectFit="cover" // Ensures the image covers the area without stretching
                style={{ borderRadius: '8px' }}
              />
            </div>
            <h2 className="text-2xl font-semibold text-black hover:text-black transition-colors">{formation.titre}</h2>
            <p>{formation.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .formation-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Formations;
