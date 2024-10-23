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
      <Title>Qu&apos;est-ce qu&apos;un essai de fatigue ?</Title>
      <Section>
        <p>
          L&apos;essai de fatigue est un type d&apos;essai mécanique qui consiste à soumettre un matériau à des charges cycliques répétées, c&apos;est-à-dire à des sollicitations qui varient en amplitude et en direction au cours du temps. 
          L&apos;objectif est de déterminer la résistance du matériau à ce type de sollicitation, qui peut conduire à une rupture progressive, même si la contrainte maximale appliquée est inférieure à la limite élastique du matériau.
        </p>
      </Section>
      <Section>
        <Subtitle>Pourquoi réaliser un essai de fatigue ?</Subtitle>
        <List>
          <li>Prévenir les ruptures inattendues.</li>
          <li>Optimiser la conception.</li>
          <li>Évaluer l&apos;impact des traitements.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Comment se déroule un essai de fatigue ?</Subtitle>
        <List>
          <li>Préparation de l&apos;éprouvette.</li>
          <li>Mise en place dans la machine d&apos;essai.</li>
          <li>Application de la charge cyclique.</li>
          <li>Enregistrement des données.</li>
          <li>Représentation graphique.</li>
        </List>
        <Image src="/1.jpg" alt="Image d'un essai de résilience Charpy" />
      </Section>
      <Section>
        <Subtitle>Les facteurs influençant la fatigue</Subtitle>
        <List>
          <li>Amplitude de la contrainte.</li>
          <li>Rapport de charge.</li>
          <li>Fréquence de chargement.</li>
          <li>Température.</li>
          <li>Environnement.</li>
        </List>
      </Section>
      <Section>
        <Subtitle>Les applications de l&apos;essai de fatigue</Subtitle>
        <List>
          <li>Aéronautique.</li>
          <li>Automobile.</li>
          <li>Énergie.</li>
          <li>Construction.</li>
        </List>
      </Section>
      <Section>
        <p>
          L&apos;essai de fatigue est un outil indispensable pour assurer la fiabilité et la durabilité des structures et des composants.
          Il permet d&apos;évaluer la résistance d&apos;un matériau à des sollicitations répétées et de prévenir les ruptures inattendues.
        </p>
      </Section>
    </Container>
  );
};

export default ResiliencePage;
