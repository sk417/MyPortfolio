import React, { useEffect } from 'react';
import {Typewriter} from 'react-simple-typewriter';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () =>{
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
    return (
        <>
        <section className='home' id='home'>
            <div className='max-width'>
                <div className='home-content' data-aos="fade-down">
                  <p><span className='hii'>Hii There! </span><span className='name'>I'm Sudheer kumar</span></p>
                  <p><span className='desg'>I'm a </span><span className='webc'><Typewriter
                    words= {['Competitive Programmer', 'MERN Stack Developer']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={700}

                    /></span></p>
                </div><br/>
                <div className='follow' data-aos="fade-up">
                    <p>Follow me</p>
                    <div className='follow-link'>
                       <a href='https://github.com/sk417' className='fa fa-github' target='blank'>&nbsp;</a>
                       <a href='https://www.linkedin.com/in/sudheer-kumar-977856218' className='fa fa-linkedin' target='blank'>&nbsp;</a>
                       <a href='https://twitter.com/Sudheer18529099?t=Y126R991pUCcRu6-IspcYw&s=08' className='fa fa-twitter' target='blank'>&nbsp;</a>
                       <a href='https://www.instagram.com/the_sudheer_kumar/' className='fa fa-instagram' target='blank'>&nbsp;</a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Home;