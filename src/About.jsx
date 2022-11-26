import React, { useEffect } from "react";
import {Typewriter} from 'react-simple-typewriter';
import Aos from 'aos';
import "aos/dist/aos.css";
import profile from "./profile.jpg";

const About = ()=>{
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
    return (
        <>
           <section className="about" id="about" data-aos="fade-down">
            <div className="max-width">
            <h1 className="title">About me</h1>
                <div className="about-content">
                    <div className="column left" data-aos="fade-right">
                        <img src={profile} alt="pic"/>
                    </div>
                    <div className="column right" data-aos="fade-left">
                        <div className="text">I'm a <span><Typewriter
                    words= {['MERN Stack Developer', 'Competitive Programmer']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={700}

                    /></span></div>
                        <p>I am pursuing Bachelor of Technology with specialized in<span> Computer Engineering. </span>
                        Recently, I learned some modern Technology that attract me more towards the technology field. I always 
                        excited to learn new things and meeting with new people.</p>
                        <a href="https://drive.google.com/file/d/1J60N4z3NjKCpLaOzKF4rT0JWpbPJA-8T/view?usp=drivesdk" target='blank'><i className="fa fa-arrow-down" aria-hidden="true"></i>&nbsp;Resume</a>
                    </div>
                </div>
            </div>

           </section>
        </>
    );
}

export default About;