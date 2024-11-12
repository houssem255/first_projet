'use client';
import Image from 'next/image';

export default function Clients() {
  const clients = [
    { id: 1, name: "Client A", logo: "/" },
    { id: 2, name: "Client B", logo: "/" },
    { id: 3, name: "Client C", logo: "/" },
    { id: 4, name: "Client D", logo: "/" },
    { id: 5, name: "Client E", logo: "/html.jpg" },
  ];

  return (
    <section className="flex flex-col items-center p-8 bg-gradient-to-b from-gray-50 to-gray-200">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-red-600 drop-shadow-lg">Nos Clients</h1>

      <div className="overflow-hidden w-full max-w-6xl bg-white rounded-56 shadow-xl">
        <div className="flex animate-marquee whitespace-nowrap">
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center p-8 transition-transform duration-300 hover:scale-110 hover:shadow-xl bg-gray-50 rounded-lg mx-4">
              <div className="relative">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}  // Augmenter la taille pour plus de rondeur
                  height={160} // Garder la hauteur égale à la largeur
                  className="h-40 w-40 object-cover rounded-full mb-2 transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-500 opacity-25 rounded-full"></span>
              </div>
              <p className="text-center text-gray-800 font-semibold text-lg mt-2">{client.name}</p>
            </div>
          ))}

          {/* Duplicate the clients for continuous scrolling */}
          {clients.map((client) => (
            <div key={client.id + '-duplicate'} className="flex flex-col items-center p-8 transition-transform duration-300 hover:scale-110 hover:shadow-xl bg-gray-50 rounded-lg mx-4">
              <div className="relative">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}    
                  height={160}    
                  className="h-40 w-40 object-cover rounded-full mb-2 transition-transform duration-300 hover:scale-110"
                />
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-500 opacity-25 rounded-full"></span>
              </div>
              <p className="text-center text-gray-800 font-semibold text-lg mt-2">{client.name}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 70s linear infinite; /* Smooth and extended animation */
        }
      `}</style>
    </section>
  );
}
