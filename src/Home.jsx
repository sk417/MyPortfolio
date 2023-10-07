import React, { useEffect } from 'react';
import {Typewriter} from 'react-simple-typewriter';
import Aos from 'aos';
import "aos/dist/aos.css";
import codechef from "./codechef.png";
import leetcode from "./leetcode.png";
import hackerrank from "./hackerrank.png";
// import codeforces from "./codeforces.png";
import gfg from "./geeksforgeeks.png";

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
                <div className='code' data-aos="fade-up">
                    <p>Coding Profile</p>
                    <div className='coding-profile'>
                       <a href='https://www.codechef.com/users/sudheerk417' target='blank'><img src={codechef} alt="Loading..."className='cp'/></a>
                       <a href='https://leetcode.com/SK417/' target='blank'><img src={leetcode} alt="Loading..." className='cp'/></a>
                       <a href='https://www.hackerrank.com/Sudheerkumarmki?hr_r=1' target='blank'><img src={hackerrank} alt="Loading..." className='cp'/></a>
                       {/* <a href='https://www.instagram.com/_sudheer.ak47/' target='blank'><img src={codeforces} alt="Loading..."/></a> */}
                       <a href='https://auth.geeksforgeeks.org/user/sudheerkumarmki/' target='blank'><img src={gfg} alt="Loading..." className='cp'/></a>
                    </div>
                </div>
                <div className='follow' data-aos="fade-up">
                    <p>Follow me</p>
                    <div className='follow-link'>
                       <a href='https://github.com/sk417' className='fa fa-github' target='blank'>&nbsp;</a>
                       <a href='https://www.linkedin.com/in/sudheer-kumar-977856218' className='fa fa-linkedin' target='blank'>&nbsp;</a>
                       <a href='https://twitter.com/Sudheer18529099?t=Y126R991pUCcRu6-IspcYw&s=08' className='fa fa-twitter' target='blank'>&nbsp;</a>
                       <a href='https://www.instagram.com/_sudheer.ak47/' className='fa fa-instagram' target='blank'>&nbsp;</a>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default Home;