'use client'; // Ajoutez cette ligne pour activer le rendu côté client

import React from 'react';

const videos = [
  {
    url: 'https://www.youtube.com/watch?v=-ly6oeqmXDM',
    title: 'Métrologie tridimensionnelle',
  },
  {
    url: 'https://www.youtube.com/watch?v=0UrnvE-BnfM',
    title: 'Gear Inspection',
  },
  {
    url: 'https://www.youtube.com/watch?v=IP6hk1KPwJM',
    title: 'Prestation de Mesure Tridimensionnelle',
  },
  {
    url: 'https://www.youtube.com/watch?v=b5_63DNASto&t=25s',
    title: 'Brinell Hardness ',
  },
  {
    url: 'https://www.youtube.com/watch?v=Lk5j-WUoRlM',
    title: 'Essai de traction',
  },
  {
    url: 'https://www.youtube.com/watch?v=XHgVE0GUd1k',
    title: 'Three-dimensional Measuring Machine',
  },
  {
    url: 'https://www.youtube.com/watch?v=AiDNxNjTUUU&t=65s',
    title: 'Laboratoires',
  },
];

const Videos = () => {
  return (
    <div className="flex flex-col items-center p-10 min-h-screen"
      style={{
        backgroundImage: "url('/4872987.jpg')", // Remplacez par le chemin de votre image
        backgroundSize: "cover", // Fait en sorte que l'image couvre toute la surface
        backgroundPosition: "center", // Centre l'image
        backgroundRepeat: "no-repeat", // Empêche la répétition de l'image
      }}>
      <h1 style={{
        color: '#000000',
        marginBottom: '40px',
        fontSize: '2.5rem',
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
      }}> Vidéos de ctime dz</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
      }}>
        {videos.map((video, index) => {
          const videoId = video.url.split('v=')[1].split('&')[0];
          return (
            <div key={index} style={{
              margin: '15px',
              padding: '20px',
              borderRadius: '15px',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#ffffff',
              width: '300px',
              transition: 'transform 0.3s, box-shadow 0.3s',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
              }}
            >
              <h3 style={{
                color: '#000000',
                fontSize: '1.5rem',
                margin: '10px 0',
                fontWeight: 'bold',
              }}>{video.title}</h3>
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={video.title}
                frameBorder="0"
                allowFullScreen
                style={{
                  borderRadius: '10px',
                  border: 'none',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                }}
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Videos;
