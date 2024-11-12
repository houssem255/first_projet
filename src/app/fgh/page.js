// components/Testimonials.js
'use client';

import React from 'react';

const Map = () => {
  return (
    <div style={{ width: '100%', height: '450px', position: 'relative' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3215.887071427181!2d6.509229274926323!3d36.290789896250764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f17b410be45d25%3A0x13811453f5f719bf!2sCTIME!5e0!3m2!1sen!2sdz!4v1731311611023!5m2!1sen!2sdz"
        width="100%" // S'adapte à la largeur du conteneur
        height="100%" // S'adapte à la hauteur du conteneur
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

export default Map;

