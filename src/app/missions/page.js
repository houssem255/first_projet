import React from "react";

export default function PresentationCTIME() {
  return (
    <div className="container mx-auto p-6">
      {/* Section bannière avec animation */}
      <div className="relative mb-10">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img 
            width={400} height={300}
            src="/Eprouvette-imageonline.co-merged.png" 
            alt="Bannière CTIME"
            className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h1 className="absolute bottom-6 left-6 text-4xl text-white font-bold drop-shadow-lg">
        MISSIONS
        </h1>
      </div>
      {/* Introduction avec background image */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-10 bg-cover bg-center" style={{ backgroundImage: "url('/4872987.jpg')" }}>
        <p className="mb-4  text-gray-700">
        Le Centre Technique Industriel des Industries Mécaniques et transformatrices des
            Métaux à Constantine sera un centre qui s´adaptera aux besoins de l’industrie et un
            pôle industriel pour appuyer le développement des PME/PMI.
            Ses missions sont détaillées dans le décret de création du CTIME et se résument
            comme suit :
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Appuyer les politiques initiées par les pouvoirs publics</li>
            <li>Assistance technique aux entreprises</li>
            <li>Mise en place de bases de données</li>
            <li>Rapprochement entre l’industrie et les milieux de R&amp;D</li>
            <li>Formations spécifiques aux entreprises</li>
            <li>Etudes et conseils</li>
          </ul>
        
        <h2 className="mb-4 my-8 text-xl font-semibold">OBJECTIFS</h2>
        <p className="mb-4  text-gray-700">
        Être la référence nationale en matière d’essais, d'inspection, de vérification et de certification.
        </p>
        
        
        
        
        
        
        
        

        
      </section>
    </div>
  );
}
