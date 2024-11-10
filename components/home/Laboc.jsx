import React from "react"; 
import Link from 'next/link'; 
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";

const services = [
  {
    step: "01",
    name: "Laboratoire d'Essais Mécaniques",
    imageUrl: "/20210322_092413.jpg",
    description: "Notre laboratoire d'essais mécaniques est équipé pour réaliser une variété d'essais sur les matériaux. Nous nous engageons à fournir des résultats précis et fiables pour aider nos clients à prendre des décisions éclairées sur leurs matériaux.",
    link: "/services/labo2",
  },
  {
    step: "02",
    name: "Laboratoire de Métrologie Dimensionnelle",
    imageUrl: "/labo1.jpg",
    description: "Le laboratoire de métrologie dimensionnelle est spécialisé dans la mesure précise des dimensions et des tolérances des pièces. Nous nous engageons à fournir des résultats précis et fiables pour aider nos clients à prendre des décisions éclairées sur leurs matériaux.",
    link: "/services/labo1",
  },
];

const FlipCardComponent = () => {
  return (
    <section 
      className="bg-gray-100 min-h-screen w-full" 
      style={{
        backgroundImage: "url('/5676719.jpg')", // Remplacez par votre propre image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto flex justify-center object-center px-4 sm:py-24 lg:max-w-7xl">
        <div className="flex justify-center object-center flex-col gap-12 sm:gap-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl lg:text-6xl text-center shadow-md p-4 rounded-lg bg-gradient-to-r from-gray-300 to-red-700">
            Nos Laboratoires
          </h2>

          <div className="mx-auto grid gap-12 space-y-10 md:space-y-0 sm:gap-16 lg:grid-cols-2">
            {services.map((service) => (
              <div key={service.name} className="group h-96 w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-lg transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div
                    className="absolute inset-0 h-full w-full rounded-xl bg-cover bg-center transition duration-300"
                    style={{ backgroundImage: `url(${service.imageUrl})`, backgroundSize: 'cover' }}
                  >
                    {/* Titre rond, sur une seule ligne, sans rupture */}
                    <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-semibold text-white bg-black bg-opacity-60 px-6 py-2 rounded-full shadow-xl max-w-[90%] whitespace-nowrap text-center">
                      {service.name}
                    </h2>
                  </div>

                  <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 px-8 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex min-h-full flex-col items-center justify-center">
                      <p className="text-lg text-center mb-4">{service.description}</p>
                      <button className="my-2 bg-gradient-to-r from-red-600 to-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white font-bold py-2 px-4 w-auto rounded-full inline-flex items-center shadow-md transition duration-300">
                        <Link href={service.link}>
                          <span>En savoir plus</span>
                        </Link>
                        <WrenchScrewdriverIcon className="h-6 w-6 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlipCardComponent;
