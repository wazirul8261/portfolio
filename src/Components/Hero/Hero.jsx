import React from 'react'
import './Hero.css'
import profile_img from '../../assets/zm.png'
import {AnchorLink} from "react-anchor-navigation";

const Hero = () => {
  return (
    <div id='home' className="hero">
       <img src={profile_img} alt="" /> 
       <h1><span>I am Wazir, </span>frontend developer based in USA.</h1>
       <p>I am a frontend developer & digital marketer from Bangladesh with 10 yrs of experience in multiple companies like Amazon, Tesla & Apple. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <div className="hero-resume">My resume</div>

        </div>
    </div>
  )
}

export default Hero