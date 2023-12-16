// components/NameDisplay.js
"use client"
import  {useState}  from 'react'
import { sType } from '../types/type';

export const students:[sType]=[{
    name:"arun",
    gender:"male",
    physics:88,
    maths:87,
    english:78
},
{
    name:"rajesh",
    gender:"male",
    physics:96,
    maths:100,
    english:95
},
{
    name:"numan",
    gender:"male",
    physics:89,
    maths:90,
    english:70
},
{
    name:"raja",
    gender:"male",
    physics:30,
    maths:25,
    english:40
},
{
    name:'usha',
    gender:"female",
    physics:67,
    maths:45,
    english:78
}];
const NameDisplay = ({names} ) => {
  const [currentIndex, setCurrentIndex] =useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % names.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + names.length) % names.length);
  };

  return (
    <div>
      <p>Name: {names[currentIndex].name}</p>
      <p>Gender: {names[currentIndex].gender}</p>
      <p>Physics: {names[currentIndex].physics}</p>
      <p>Maths: {names[currentIndex].maths}</p>
      <p>English: {names[currentIndex].english}</p>
      <button className="hero_btn" onClick={handlePrevious}>Previous</button>
      <button className="hero_btn" onClick={handleNext}>Next</button>
    </div>
  );
};

export default NameDisplay;
