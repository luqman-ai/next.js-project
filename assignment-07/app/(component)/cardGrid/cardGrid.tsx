// components/CardGrid.js

import React from 'react';
import Image from 'next/image';
import { cardType } from '../types/types';
import { Montserrat } from "next/font/google";
const mons = Montserrat({ weight: "500", subsets: ["latin"] });

const CardGrid = () => {
  const cards:cardType = [
    {
      id: 1,
      title: 'Card 1',
      content: 'This is the content for Card 1',
      image: '/images/card1.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'This is the content for Card 2',
      image: '/images/card2.jpg',
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'This is the content for Card 3',
      image: '/images/card3.jpg',
    },
    {
        id: 4,
        title: 'Card 4',
        content: 'This is the content for Card 4',
        image: '/images/card4.jpg',
      },
      {
        id: 5,
        title: 'Card 5',
        content: 'This is the content for Card 5',
        image: '/images/card5.jpg',
      },
  ];

  return (

    <div className="grid lg:grid-cols-3 gap-x-15 gap-y-4 m-8 md:grid-cols-2">
      {cards.map((card) => (
        <div className="col-span-1 rounded-lg  border-black text-3xl font-sans text-center h-[350px] grid grid-cols-1 hover:bg-red-600 hover:scale-105">
        <div key={card.id} className="bg-gray-100 p-4 rounded shadow">
          <div className="mb-2">
            <Image src={card.image} alt={card.title} width={300} height={200} objectFit="cover" className="rounded" />
          </div>
         {/* <h2 className="bg-gray-400 col-span-1 rounded-lg border-2 border-black text-1xl font-sans text-center h-[35px] grid grid-cols-4 hover:bg-red-600 hover:scale-105">{card.title}</h2>
          <p className="bg-orange-400 col-span-1 rounded-lg border-2 border-black  font-sans text-center h-[120px] grid grid-cols-4 hover:bg-red-600 hover:scale-105">{card.content}</p>
      */}</div>
      </div>
        
      ))}
    </div>
    
  );
};

export default CardGrid;
