
"use client"

import React, { useEffect, useState } from 'react';


export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ou un autre indicateur de chargement
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Embed Sketchfab 3D Model</h1>

      {/* Sketchfab Embed */}
      <div
        className="sketchfab-embed-wrapper"
        style={{
          position: 'relative',
          width: '100%',
          height: '500px',
          margin: '0 auto',
        }}
      >
        <iframe
          title="Robotec_PC025 05"
          frameBorder="0"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          webShare
          src="https://sketchfab.com/models/9750c408f34e456eab02ecfb03b09ab0/embed"
          style={{ width: '100%', height: '100%' }}
        ></iframe>
      </div>

      {/* Credits */}
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a
          href="https://sketchfab.com/3d-models/robotec-pc025-05-9750c408f34e456eab02ecfb03b09ab0?utm_medium=embed&utm_campaign=share-popup&utm_content=9750c408f34e456eab02ecfb03b09ab0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Robotec_PC025 05
        </a>{' '}
        by{' '}
        <a
          href="https://sketchfab.com/spine3d?utm_medium=embed&utm_campaign=share-popup&utm_content=9750c408f34e456eab02ecfb03b09ab0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          spine3d
        </a>{' '}
        on{' '}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9750c408f34e456eab02ecfb03b09ab0"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}
        >
          Sketchfab
        </a>
      </p>
    </div>
  );
}


