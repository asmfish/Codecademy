import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';
import bg from './images/ocean.jpg'; 

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = <img className="background" alt="ocean" src={bg} />;
const images = [];
const showBackground = true;

const displayFact = (e) =>{
 const selectedAnimal = animals[e.target.alt];
 const fact = selectedAnimal.facts[Math.floor(Math.random() * selectedAnimal.facts.length)];
 document.getElementById('fact').innerHTML = fact;
}

for (const animal in animals){
  images.push(
    (
      <img 
        key={animal} 
        className='animal' 
        alt={animal} 
        src={animals[animal].image} aria-label={animal} role='button'
        onClick={displayFact}
        />
    )
  );
}

const animalFacts = (
  <div>
    <h1>{ title === '' ? 'Click an animal for a fun fact' : title }</h1>
    {showBackground && background}
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);

