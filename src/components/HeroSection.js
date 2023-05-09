import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='videos/video-2.mp4' autoPlay loop muted />
        <h1>Hi I'm Jonnely</h1>
        <p>A Web Developer</p>
        <div classname="hero-btns">
        <Button className="btns" buttonStyle={'btn--outline'} buttonSize={'btn--large'}>
         SEE MY WORK
        </Button>
        <Button className="btns" buttonStyle={'btn--primary'} buttonSize={'btn--large'}>
         DOWNLOAD MY CV
        </Button>


      


        </div>
    

    </div>
  )
}

export default HeroSection