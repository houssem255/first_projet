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
        Présentation du CTIME
        </h1>
      </div>
      {/* Introduction avec background image */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-10 bg-cover bg-center" style={{ backgroundImage: "url('/4872987.jpg')" }}>
        <p className="mb-4 text-gray-700">
        Le Centre Technique des Industries Mécaniques et transformatrices des
        Métaux &laquo; CTIME &raquo; a été créé par Décret exécutif n°10-215 du 16 septembre
        2010, dont le siège est fixé à Constantine.
        Le CTIME est un Établissement Public à Caractère Industriel et Commercial
        &laquo; EPIC &raquo; et relève du Ministère de l’Industrie et de la production
        pharmaceutique.
        </p>
        <p className="mb-4 text-gray-700">
        Le CTIME est un Établissement Public à Caractère Industriel et Commercial &laquo; EPIC &raquo; et relève du Ministère de l’Industrie et de la production pharmaceutique.
        </p>
        <p className="mb-4 text-gray-700">
        L&apos;investissement en moyens de contrôle va de quelques milliers de Dinars à plusieurs dizaines de millions pour des machines de haute précision. Choisir les moyens adaptés aux vérifications qui sont nécessaires pour pouvoir certifier la qualité du produit n&apos;est pas toujours une tâche facile. À cet effet, le CTIME avec seulement deux des quatre laboratoires prévus propose aux opérateurs une gamme assez large d&apos;essais et d&apos;expertise conformément aux normes internationales, leur présentant une meilleure vision de la qualité des produits avec des équipements modernes de dernière génération.
        </p>
        
        <h2 className="mb-4 my-2 text-xl font-semibold">
        À titre indicatif, le CTIME se distingue déjà par des services :
        </h2>
        <h2 className="mb-4 my-2 text-xl font-semibold">
        * Etalonnage dimensionnel
        </h2 >
        <h2 className="mb-4 my-2 text-xl font-semibold">
       * Controle de CNC
        </h2 >
        <h2 className="mb-4 my-2 text-xl font-semibold">
        * Mesure des pieces complexes
        </h2 >
        <h2 className="mb-4 my-2 text-xl font-semibold">
        * Digitalisation
        </h2 >
       
        <h1 className="mb-4 my-2 text-xl font-semibold">
         * Essais mécaniques
        </h1>
       
      </section>
    </div>
  );
}
