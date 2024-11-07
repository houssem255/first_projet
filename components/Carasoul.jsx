'use client';

import { useState } from "react";
import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <Carousel className="rounded-xl">
      {/* Première image */}
      <div className="relative w-full h-[400px]">
        <img
          src="/1730887992495-imageonline.co-merged.jpg"
          alt="Inauguration du complexe FONDERIE EURO MOTEUR"
          loading="lazy"
          className="h-full w-full object-contain rounded-xl"
        />
        <div className="absolute bottom-0 left-10 right-10 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold">Inauguration du complexe FONDERIE EURO MOTEUR</h2>
          <div className={`transition-all ${showFullText ? 'max-h-[400px]' : 'max-h-[100px] overflow-hidden'}`}>
            <p>
              {showFullText ? (
                <>
                  En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique à l&apos;inauguration du complexe FONDERIE EURO MOTEUR au niveau de la zone industrielle de la commune de MAGRA - Wilaya de M&apos;SILA. 
                  Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins, d&apos;une capacité de 10 000 T/An et compte 200 salariés en majorité des jeunes. 
                  Le complexe est équipé de machines de production de dernière génération et d&apos;un personnel technique.
                </>
              ) : (
                <>
                  En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique, à l&apos;inauguration du complexe FONDERIE EURO MOTEUR. 
                  Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins...
                </>
              )}
            </p>
            <div className="mt-2">
              <button
                onClick={toggleText}
                className="text-white hover:text-gray-300"
              >
                {showFullText ? "Voir moins" : "Voir plus"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Deuxième image */}
      <div className="relative w-full h-[400px]">
        <img
          src="/ALGEST 2024.jpg"
          alt="Image 3"
          loading="lazy"
          className="h-full w-full object-contain rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold">programme PADICA</h2>
          <p>
            Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l&apos;Union Européenne accompagnée par la Directrice Nationale du Programme.
          </p>
        </div>
      </div>

      {/* Troisième image */}
      <div className="relative w-full h-[400px]">
        <img
          src="/437523900_416316127824869_7814901483781890104_n-imageonline.co-merged.jpg"
          alt="Participation du CTIME à ALGEST 2022"
          loading="lazy"
          className="h-full w-full object-contain rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold"> programme PADICA</h2>
          <p>
          Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l&apos;Union Européenne accompagnée par la Directrice Nationale du Programme.
           
          </p>
        </div>
      </div>

      {/* Quatrième image */}
      <div className="relative w-full h-[400px]">
        <img
          src="/IMG_3436-imageonline.co-merged.jpg"
          alt="Image 3"
          loading="lazy"
          className="h-full w-full object-contain rounded-xl"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center">
          <h2 className="text-lg font-bold">formation Introduction à la science des matériaux organisée </h2>
          <p>
          Première session de formation intitulée: Introduction à la science des matériaux organisée par le CTIME dans le cadre du programme PADICA au niveau de l&apos;INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023.
          </p>
        </div>
      </div>
    </Carousel>
  );
}
