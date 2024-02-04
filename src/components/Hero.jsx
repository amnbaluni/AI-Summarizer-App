import React from 'react'
import {robo} from '../assets';
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
       <nav className="flex justify-between items-center w-full pt-3 mb-10">
        <img src = {robo} alt="logo" className='w-25 h-28' object-contain/>
        <button type='button' onClick={()=>window.open('https://github.com/amnbaluni')} className="black_btn">
        My Github
       </button>
       </nav> 

       <h1 className="head_text mt-12">
       TextScript <br/>
        <span className="orange_gradient">Open AI GPT-4</span>
       </h1>

       <h2 className='desc'>
          Simplify your reading with TextScript 
       </h2>
    </header>
  );
};

export default Hero;