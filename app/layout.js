"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { useState, useEffect } from 'react';

const Star = () => {
  const [visible, setVisible] = useState(true);

  const top = Math.random() * 99 + '%';
  const left = Math.random() * 99 + '%';

  const starStyle = {
    position: 'absolute',
    top: top,
    left: left,
    width: '2px',
    height: '2px',
    backgroundColor: 'white',
    opacity: visible ? 1 : 0,
    transition: 'opacity 2s ease-in-out',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(v => !v);
    }, Math.random() * 2000 + 5000); // Change la visibilité toutes les 1 à 3 secondes

    return () => clearInterval(timer); // Nettoie l'intervalle quand le composant est démonté
  }, []);

  return <div style={starStyle}></div>;
};
const inter = Inter({ subsets: ["latin"] });
const numStars = 50; // Nombre d'étoiles à générer
const stars = Array.from({ length: numStars }, (_, i) => <Star key={i} />);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{stars}{children}</body>
    </html>
  );
}
