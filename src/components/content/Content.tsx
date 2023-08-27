import { useState } from 'react';
import './Content.css';

import Home from './Home';
import Tellu from './Tellu';

import { useMyContext } from '../../my-context';


const Content: React.FC = () => {

  console.log('Content')
  const context = useMyContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const slide2: HTMLElement | null = document.getElementById('HomeTwo');
    if (!slide2) return;
    slide2.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start'
    });
  };

  return (
    <div className='main-body'>
      <div className='scroll-container'>
        <Home />
        <Tellu />
      </div>
    </div>
  )
};

export default Content;