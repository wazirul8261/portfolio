import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/ad.png'


const About = () => {
  return (
  <div id='about' className="about">
    <div className="about-title">
        <h1> About me </h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-sections">
        <div className="about-left">
        <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I will build an Amazing React website design based on the latest trends in the market, tools, and technology. I am a professional web developer with over 10 years of experience in website building.</p>
                <p>I am a Digital Marketer and SEO professional. I am expert in youtube promotion, FB add promotion, article writing, web research, data collection, video editing and link building.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Java Script</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Digital Marketing</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
    </div>
    <div className="about-achievements">
    <div className="about-achievement">
        <h1>10+</h1>
        <p>YEARS OF EXPERIENCE</p>
    </div>
    <hr/>
    <div className="about-achievement">
        <h1>90+</h1>
        <p>PROJECT COMPLETED</p>
    </div>
    <hr/>
    <div className="about-achievement">
        <h1>15+</h1>
        <p>HAPPY CLIENTS</p>
    </div>
    </div>
  </div>
  )
}

export default About
