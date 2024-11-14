'use client';
import Image from 'next/image';
import Link from 'next/link'; // Importation de Link pour la navigation interne

// Données des actualités (idéalement, ce serait dans un fichier de données ou une API)
const actualites = [
  {
    id: 1,
    title: "Inauguration du complexe FONDERIE EURO MOTEUR",
    description: "En date du 30 Octobre 2024, le CTIME a pris part en tant que partenaire technique, à l'inauguration du complexe FONDERIE EURO MOTEUR. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins...",
    date: "2024-10-30",
    image: "/1730887992515.jpg",
    detailsLink: "/Actualites" // Lien de détails pour cette actualité
  },
  {
    id: 2,
    title: "programme PADICA",
    description: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme.",
    date: "2024-04-21",
    image: "/437558874_416315707824911_6409835770231377567_n.jpg",
    detailsLink: "/Actualites" // Lien de détails pour cette actualité
  },
  {
    id: 3,
    title: "formation Introduction à la science des matériaux organisée",
    description: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le #CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023.",
    date: "2024-12-24",
    image: "/413790727_347185008071315_9105077155892308312_n.jpg",
    detailsLink: "/Actualites" // Lien de détails pour cette actualité
  },
];

function ActualiteCard({ actualite }) {
  const { title, description, date, image, detailsLink } = actualite;

  return (
    <div
      key={actualite.id}
      className="bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 md:w-1/3 flex flex-col h-[500px] transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
    >
      <div className="h-40 relative mb-4">
        <Image
          src={image}
          alt={`Image associée à l'actualité : ${title}`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-2xl mb-2 text-red-600 truncate">{title}</h2>
          <p className="text-gray-600 text-sm mb-2">{new Date(date).toLocaleDateString()}</p>
          <p className="text-gray-800 text-sm line-clamp-4">{description}</p>
        </div>

        <Link href={detailsLink}>
          <button
            className="mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-300"
          >
            Plus de détails
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function Actualites() {
  return (
    <section
      className="flex flex-col items-center p-8 bg-gray-100"
      style={{
        backgroundImage: 'url("/4872987.jpg")', // Remplacer par l'URL de votre image de fond
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center shadow-md p-4 rounded-lg bg-gradient-to-r from-gray-300 to-red-700">
        Actualités de l&apos;Institut
      </h2>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full max-w-4xl">
        {actualites.map((actualite) => (
          <ActualiteCard key={actualite.id} actualite={actualite} />
        ))}
      </div>
    </section>
  );
}
