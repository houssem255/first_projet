"use client";

import { useEffect,useState } from 'react';
import Image from 'next/image';
import Head from 'next/head'
export default function Actualites() {
  const [articles,setArticles] = useState([
    {
      title: "Inauguration du complexe FONDERIE EURO MOTEUR",
      date: "Actualités / Par admin",
      img: "./1730887992495-imageonline.co-merged.jpg",
      description: "En date du 30 Octobre 2024 le CTIME a pris part en tant que partenaire technique à l'inauguration du complexe FONDERIE EURO MOTEUR au niveau de la zone industrielle de la commune de MAGRA - Wilaya de M'SILA. Le complexe est spécialisé dans la production de pièces pour divers véhicules industriels et engins, d'une capacité de 10 000 T/An et compte 200 salariés en majorité des jeunes. Le complexe est équipé de machines de production de dernière génération et d'un personnel technique."
    },
    {
      title: "salon international de la sous-traitance industrielle",
      date: "Actualités / Par admin",
      img: "./ALGEST 2024.jpg",
      description: ""
    },
    {
      title: "programme PADICA",
      date: "Actualités / Par admin",
      img: "./437523900_416316127824869_7814901483781890104_n-imageonline.co-merged.jpg",
      description: "Dans le cadre du programme PADICA, une visite de travail a été effectuée au niveau du CTIME par les représentants de Délégation de l'Union Européenne accompagnée par la Directrice Nationale du Programme."
    },
    {
      title: "formation Introduction à la science des matériaux organisée",
      date: "Actualités / Par admin",
      img: "./IMG_3436-imageonline.co-merged.jpg",
      description: "Première session de formation intitulée: Introduction à la science des matériaux organisée par le CTIME dans le cadre du programme PADICA au niveau de l'INPED Boumerdas qui se déroulera du 24 au 26 Décembre 2023."
    },
    
    {
      title: "Participation à ALGEST 2023",
      date: "Actualités / Par admin",
      img: "./mo7b.jpg",
      description: "Le CTIME participera à la 8ème édition du salon international de la sous-traitance ALGEST 2023 qui se tiendra du 14 au 17 Novembre 2023 au niveau de la SAFEX (Pins Maritime) – ALGER."
    },
    {
      title: "Étude de cas sur l'étalonnage avancé",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "./150.jpg",
      description: "En 2023, le CTIME a réalisé un projet d’étalonnage avancé des instruments de mesure pour un client majeur dans le secteur de l’énergie, garantissant des résultats précis et fiables."
    },
    {
      title: "Formation en métrologie",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "./151.jpg",
      description: "Une série de formations sur les techniques modernes de métrologie a été organisée pour les professionnels du secteur. Le CTIME remercie tous les participants pour leur engagement."
    },
    {
      title: "Journées techniques 2023",
      date: "Actualités / Par admin",
      img: "./152.jpg",
      description: "Le CTIME a récemment participé aux journées techniques sur le développement des compétences locales organisées à Oran, mettant en avant les innovations dans le secteur industriel."
    },
    {
      title: "Journée d’étude sur l’IA dans l’industrie",
      date: "Actualités / Par admin",
      img: "./153.jpg",
      description: "Le 15 septembre 2023, le CTIME a participé à une journée d’étude sur l’utilisation de l’intelligence artificielle dans les processus industriels, organisée par le Ministère de l'Industrie."
    },
    {
      title: "Services de mesure et d'inspection",
      date: "Services : Métrologie dimensionnelle / Par admin",
      img: "/154.png",
      description: "Le CTIME continue d’offrir des services de mesure et d’inspection, avec des rapports détaillés pour toutes les tailles de pièces, que ce soit en laboratoire ou sur site."
    },
    {
      title: "Rencontre sur les innovations technologiques",
      date: "Actualités / Par admin",
      img: "/155.jpg",
      description: "Le 01 août 2023, le CTIME a participé à une rencontre sur les innovations technologiques organisée par l’Université de Constantine 3, favorisant les échanges entre chercheurs et industriels."
    }
  ])
  useEffect(() => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article, index) => {
      article.style.opacity = 0;
      article.style.transform = 'translateY(20px)';
      setTimeout(() => {
        article.style.opacity = 1;
        article.style.transform = 'translateY(0)';
        article.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      }, index * 200);
    });
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-5 bg-gradient-to-br from-black  to-white">
      <Head>
        <title>Actualités - CTIME</title>
        <meta name="description" content="Actualités et événements du CTIME." />
      </Head>

      <main className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
        <h1 className="text-4xl text-center font-extrabold text-black  mb-6 drop-shadow-lg">Actualités</h1>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <article className="article border-b border-gray-300 pb-4 hover:shadow-2xl transition-shadow duration-300 rounded-lg p-4 bg-gray-50 hover:bg-gray-100" key={index}>
              <h2 className="text-2xl font-semibold text-black  hover:text-black  transition-colors">{article.title}</h2>
              <p className="text-gray-500 text-sm">{article.date}</p>
              <img
                src={article.img} 
                alt={article.title} 
                width={600} 
                height={400} 
                className="w-full rounded-lg mb-2 transition-transform duration-300 hover:scale-105" 
              />
              <p className="text-gray-700">{article.description}</p>
            </article>
          ))}
        </div>

        <footer className="text-center mt-10 text-gray-600">
          <p className="text-lg font-semibold">CTIME - Centre Technique Industriel des Industries Mécaniques & Transformatrices des Métaux</p>
        </footer>
      </main>
    </div>
  );
}
