'use client';
import Image from 'next/image';

export default function Actualites() {
  const actualites = [
    {
      id: 1,
      title: "Inauguration du complexe FONDERIE EURO MOTEUR",
      description: "En date du 30 Octobre 2024, le CTIME a pris part en tant que partenaire technique, à l'inauguration du complexe FONDERIE EURO MOTEUR. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins...",
      date: "2024-10-30",
      image: "/1730887992515.jpg", 
    },
    {
      id: 2,
      title: "programme PADICA",
      description: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme.",
      date: "2024-05-10",
      image: "/437558874_416315707824911_6409835770231377567_n.jpg", 
    },
    {
      id: 3,
      title: "formation Introduction à la science des matériaux organisée",
      description: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le #CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023.",
      date: "2024-05-01",
      image: "/413790727_347185008071315_9105077155892308312_n.jpg", 
    },
  ];

  return (
    <section 
      className="flex flex-col items-center p-8 bg-gray-100"
      style={{
        backgroundImage: 'url("/4872987.jpg")', // Remplacez ce chemin par l'URL de votre image de fond
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center shadow-md p-4 rounded-lg bg-gradient-to-r from-gray-300 to-red-700">
      Actualités de l&apos;Institut 
          </h2>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full max-w-4xl">
        {actualites.map((actualite) => (
          <div key={actualite.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 md:w-1/3 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <Image
              src={actualite.image}
              alt={actualite.title}
              width={400} 
              height={200}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl  mb-2 text-red-600">{actualite.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{new Date(actualite.date).toLocaleDateString()}</p>
            <p className="text-gray-800">{actualite.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
