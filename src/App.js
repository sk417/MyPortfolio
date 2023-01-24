import React, {useState} from 'react';
import Home from './Home';
import About from './About';
import Edu from './Edu';
import Skill from './Skill';
import Project from './Project';
import Contact from './Contact';

const App = () =>{
    const [state,setState] = useState('');
    const [toggle,setToggle] = useState(false);
    const changevalueonscroll = () =>{
      const scrollvalue = document.documentElement.scrollTop;
      if(scrollvalue>20){
        setState('sticky');
      }
      else{
        setState('');
      }
    }

    const func=()=>{
      setToggle(!toggle);
    }

    window.addEventListener('scroll',changevalueonscroll);
    return (
      <>
        <nav className= {`navbar ${state}`}>
          <div className='max-width'>
            <div className='logo'><a href="/">Portfo<span>lio.</span></a></div>
            <ul className={toggle?`menu active`:`menu`}>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#edu'>Education</a></li>
              <li><a href='#skill'>Skill</a></li>
              <li><a href='#proj'>Project</a></li>
              <li><a href='#contact'>Contact me</a></li>
            </ul>
            <div className='menu-btn'>
              <i className={toggle?`fa fa-times`:`fa fa-bars`} onClick={func}></i>
            </div>
          </div>
        </nav>
        {/* <Home/> */}
        <section id='#home'>
        <Home/>
        </section>
        <section id='about'>
        <About/>
        </section>
        <section id='edu'>
        <Edu/>
        </section>
        <section id='skill'>
        <Skill/>
        </section>
        <section id='proj'>
        <Project/>
        </section>
        <section id='contact'>
        <Contact/>
        </section>
      </>
    );

}

export default App;
