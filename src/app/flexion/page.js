// pages/resilience.js
"use client";

import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  background-color: #f5f5f5;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #0070f3;
  margin-bottom: 20px;
`;

const Section = styled.section`
  width: 66.67%; // Set width to 2/3 of the container
  max-width: 800px; // Keep max-width for larger screens
  margin: 20px 0;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  color: #0070f3;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
  margin: 20px 0;
`;

const ResiliencePage = () => {
  return (
    <Container>
      <Title>Qu&apos;est-ce qu&apos;un essai de flexion ?</Title>
      <Section>
        <p>
        L&apos;essai de flexion est une méthode d&apos;essai mécanique qui consiste à soumettre un matériau à une charge appliquée perpendiculairement à son axe longitudinal, provoquant ainsi une déformation en flexion. Cet essai permet d&apos;évaluer la résistance d&apos;un matériau à se plier ou à se rompre sous l&apos;effet de cette charge.
        </p>
      </Section>
      <Section>
        <Subtitle>Pourquoi réaliser un essai de flexion ?</Subtitle>
        <List>
        <li><strong>Déterminer la résistance à la flexion :</strong> C&apos;est une propriété mécanique importante, notamment pour les matériaux utilisés dans la construction, l&apos;automobile, l&apos;aéronautique et l&apos;électronique.</li>
          <li><strong>Évaluer la rigidité en flexion :</strong> Le module de flexion, calculé à partir de la courbe charge-déflexion, est une mesure de la rigidité du matériau.</li>
          <li><strong>Vérifier la conformité aux normes :</strong> De nombreuses normes spécifient les exigences en matière de résistance à la flexion pour différents matériaux et applications.</li>
          <li><strong>Optimiser la conception des structures :</strong> Les résultats des essais de flexion permettent de dimensionner les éléments structuraux soumis à des sollicitations en flexion.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Comment se déroule un essai de flexion ?</Subtitle>
       
        <Image src="/1.jpg" alt="Image d'un essai de résilience Charpy" />
      </Section>
      <Section>
        <Subtitle>Différents types d&apos;essais de flexion</Subtitle>
        <List>
        <li><strong>Flexion trois points :</strong> L&apos;échantillon est posé sur deux appuis et la charge est appliquée au milieu.</li>
          <li><strong>Flexion quatre points :</strong> L&apos;échantillon est posé sur deux appuis et la charge est appliquée en deux points situés entre les appuis.</li>
          <li><strong>Flexion circulaire :</strong> L&apos;échantillon est encastré sur tout son contour et soumis à une charge au centre.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Les applications de l&apos;essai de flexion </Subtitle>
        <List>
         
        <li><strong>L&apos;industrie automobile :</strong> Pour tester la résistance des pièces de carrosserie, des châssis, etc.</li>
          <li><strong>L’aéronautique :</strong> Pour caractériser les matériaux composites utilisés dans la construction des avions.</li>
          <li><strong>L&apos;industrie des matériaux :</strong> Pour contrôler la qualité des matériaux et développer de nouveaux produits.</li>
          <li><strong>Le bâtiment et les travaux publics :</strong> Pour évaluer la résistance des poutres, des dalles, etc.</li>
        </List>
      </Section>
      <Section>
        <p>
        Les essais de flexion sont essentiels pour assurer la sécurité et la performance des matériaux dans de nombreux secteurs industriels.
        </p>
      </Section>
    </Container>
  );
};

export default ResiliencePage;
