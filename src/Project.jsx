import React, { useEffect } from "react";
import p1 from './p1.jpg';
import p2 from './p2.jpg';
import p3 from './p3.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";

const Project = () =>{
    useEffect(() =>{
        Aos.init({duration:2000});
      },[]);
        return (
            <>
                <section className="project">
                    <div className="max-width">
                    <h2 className="title" data-aos="fade-down">Projects</h2>
                        <div className="content">
                            <div className="card" data-aos="fade-down">
                            <h1>Weather App</h1>
                                <div className="image"><img src={p1} alt="logo"/></div>
                                <div className="text">
                                    <a href="https://weather-app-omega-nine.vercel.app/" target='blank'>Demo</a>
                                    <a href="https://github.com/sk417/WeatherApp" target='blank'>Github repo.</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-down">
                            <h1>Coding Learning App</h1>
                                <div className="image"><img src={p2} alt="logo"/></div>
                                <div className="text">
                                    <a href="https://it-resources-roan.vercel.app/" target='blank'>Demo</a>
                                    <a href="https://github.com/sk417/CodingResource" target='blank'>Github repo.</a>
                                </div>
                            </div>
                            <div className="card" data-aos="fade-down">
                            <h1>Chat App</h1>
                                 <div className="image"><img src={p3} alt="logo"/></div>
                                 <div className="text">
                                    <a href="https://xanthronschatapp.herokuapp.com/" target='blank'>Demo</a>
                                    <a href="https://github.com/sk417/chat-application" target='blank'>Github repo.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
}

export default Project;