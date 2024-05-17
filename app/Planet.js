"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import anime from 'animejs';

const Planet = () => {
  useEffect(() => {
    const animatePlanet = (element) => {
      element.style.cursor = 'pointer';
      const floatingAnimation = anime({
        targets: element,
        translateY: [-10, 10], // Simplify animation
        rotate: [-5, 5], // Simplify animation
        easing: 'easeInOutQuad',
        duration: 1500 + Math.random() * 1000,
        loop: true,
        direction: 'alternate',
      });
      
      element.addEventListener('mouseenter', () => {
        floatingAnimation.pause();
        anime({
          targets: element,
          scale: 1.2,
          rotate: [-15, 15], // Simplify animation
          duration: 500,
          elasticity: 400,
        });

        const textElement = element.querySelector('.planet-text');
        textElement.style.opacity = '1';
        anime({
          targets: textElement,
          rotate: '1turn',
          duration: 5000,
          loop: true,
        });
      });

      element.addEventListener('mouseleave', () => {
        floatingAnimation.play();
        anime({
          targets: element,
          scale: 1,
          rotate: 0,
          duration: 500,
          elasticity: 400,
        });

        const textElement = element.querySelector('.planet-text');
        textElement.style.opacity = '0';
        anime.remove(textElement);
      });
    };

    const planetElements = document.querySelectorAll('.small-planet');
    const top_center = document.querySelector('.top-center');
    top_center.style = 'top: 10%; transform: translate(-50%, -50%);';
    const bottom_center = document.querySelector('.bottom-center');
    bottom_center.style = 'bottom: -5%; transform: translate(-50%, -50%);';
    const left_center = document.querySelector('.left-center');
    left_center.style = 'left: 5%; transform: translate(-50%, -50%);';
    const right_center = document.querySelector('.right-center');
    right_center.style = 'right: -10%; transform: translate(-50%, -50%);';
    
    planetElements.forEach((planet) => {
      animatePlanet(planet);
      anime({
        targets: planet,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2000 + Math.random() * 1000,
        loop: false,
      });
    });

    const titleElement = document.querySelector('h1');
    titleElement.innerHTML = titleElement.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime({
      targets: '.letter',
      translateY: [-10, 10], // Simplify animation
      rotate: [-5, 5], // Simplify animation
      easing: 'easeInOutSine',
      duration: 2000 + Math.random() * 1000,
      loop: true,
      direction: 'alternate',
    });
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center font-bold mb-10">JASON BEUCHER</h1>
      <div className="relative w-120 h-120">
        <div className="absolute inset-1/4 flex items-center justify-center">
          <Image src="./planet.png" alt="Planet" width={300} height={300} className='big-planet' />
        </div>
        <div className="absolute top-0 left-1/2 transform small-planet top-center">
          <Image src="./github.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Github</p>
        </div>
        <div className="absolute bottom-20 left-20 transform small-planet">
          <Image src="./me.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Moi</p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform small-planet bottom-center">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
        <div className="absolute bottom-20 right-20 transform small-planet">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
        <div className="absolute left-0 top-1/2 transform small-planet left-center">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
        <div className="absolute left-20 top-20 transform small-planet">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
        <div className="absolute right-0 top-1/2 transform small-planet right-center">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
        <div className="absolute right-20 top-20 transform small-planet">
          <Image src="./small-planet.png" alt="Small Planet" width={100} height={100} />
          <p className="planet-text">Test</p>
        </div>
      </div>
    </div>
  );
};

export default Planet;
