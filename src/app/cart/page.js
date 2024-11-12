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
        <p className="mb-4  text-gray-700">
        Le Centre Technique des Industries Mécaniques et transformatrices des
Métaux « CTIME » a été créé par Décret exécutif n°10-215 du 16 septembre
2010, dont le siège est fixé à Constantine.
Le CTIME est un Etablissement Public à Caractère Industriel et Commercial
« EPIC » et relève du Ministère de l’Industrie et de la production
pharmaceutique.
        </p>
        <p className="mb-4  text-gray-700">
        Le CTIME est un Etablissement Public à Caractère Industriel et Commercial « EPIC » et relève du Ministère de l’Industrie et de la production pharmaceutique.

        </p>
        <p className="mb-4  text-gray-700">
        L'investissement en moyens de contrôle va de quelques milliers de Dinars à plusieurs dizaines de millions pour des machines de haute précision. Choisir les moyens adaptés aux vérifications qui sont nécessaires pour pouvoir certifier la qualité du produit n’est pas toujours une tâche facile. A cet effet le CTIME avec seulement deux des quatre laboratoires prévus propose aux opérateurs une gamme assez large d’essais et d’expertise conformément aux normes internationales, leurs présentant une meilleure vision de la qualité des produits avec des équipement modernes de dernière génération.
        </p>
        <p className="mb-4  text-gray-700">
        Au jour d’aujourd’hui le CTIME a été très bien accueilli par des opérateurs des filières mécaniques et transformation des métaux en particulier ceux du secteur de l’énergie et les PME.
        </p>
        <h2 className="mb-4 my-8 text-xl font-semibold">
        A titre indicatif le CTIME se distingue déjà par des services :
        </h2>
        <h2 className="mb-4 my-8 text-xl font-semibold">
        ETALONNAGE :
        </h2 >
        <p className="mb-4  text-gray-700">
        C’est la comparaison des valeurs d’un instrument de mesure à celles d’un étalon, en associant les incertitudes. Cette comparaison permet d’estimer le biais de l’instrument.  Les valeurs obtenues par un étalonnage sont consignées dans un certificat d’étalonnage.
A noter que cette opération est indispensable pour les entreprises concernées par les certifications et le CTIME est réellement équipé pour ces prestations dans le domaine dimensionnel.


        </p>
        <h1 className="mb-4 my-8 text-xl font-semibold">
        ESSAIS MECANIQUES :
        </h1>
        <p className="mb-4  text-gray-700">Ensemble d’essais pour la caractérisation des matériaux métalliques à forte et faible résistance, le CTIME est en mesure de réaliser un essai de traction à haute température allant jusqu’à 1200°C.</p>
        
        
        
        
        
        
        

        
      </section>
    </div>
  );
}
