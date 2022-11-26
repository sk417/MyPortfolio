import React, { useEffect, useState } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Skill = () =>{
    const [show,setState] = useState(false);
    const [show1,setState1] = useState(false);
    const [show2,setState2] = useState(false);
    const [show3,setState3] = useState(false);

    useEffect(() =>{
        Aos.init({duration:2000});
      },[]);

    return (
        <>
            <section className="skill" data-aos="fade-down">
                <h1 className="title"><i className="fa fa-certificate" aria-hidden="true"></i> My skills</h1>
                <div className="content" data-aos="fade-down">
                    <div className="pg">
                        <h2 className="heading" onClick={()=> setState(!show)}> Programming language &nbsp;<i className={show===true?`fa fa-chevron-up`:`fa fa-chevron-down`} aria-hidden="true"></i></h2>
                        {show && <div className="ans">
                           <p> C </p> <progress value="80" max="100"></progress>
                           <p> C++ </p> <progress value="80" max="100"></progress>
                           <p> Java </p> <progress value="50" max="100"></progress>
                           <p> Python </p> <progress value="40" max="100"></progress>
                        </div>}
                    </div>
                    <div className="front">
                        <h2 className="heading" onClick={()=> setState1(!show1)}> Frontend Developer&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className={show1===true?`fa fa-chevron-up`:`fa fa-chevron-down`} aria-hidden="true"></i></h2>
                        {show1 && <div className="ans">
                           <p> HTML </p> <progress value="75" max="100"></progress>
                           <p> CSS </p> <progress value="70" max="100"></progress>
                           <p> BootStrap </p> <progress value="70" max="100"></progress>
                           <p> React js </p> <progress value="65" max="100"></progress>
                           <p> JavaScript </p> <progress value="60" max="100"></progress>
                        </div>}
                    </div>
                    <div className="back">
                        <h2 className="heading" onClick={()=> setState2(!show2)}> Backend Developer&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className={show2===true?`fa fa-chevron-up`:`fa fa-chevron-down`} aria-hidden="true"></i></h2>
                        {show2 &&<div className="ans">
                           <p> Node Js </p> <progress value="60" max="100"></progress>
                           <p> Express js </p> <progress value="70" max="100"></progress>
                        </div>}
                    </div>
                    <div className="db">
                        <h2 className="heading" onClick={()=> setState3(!show3)}> Database&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className={show3===true?`fa fa-chevron-up`:`fa fa-chevron-down`} aria-hidden="true"></i></h2>
                        {show3 && <div className="ans">
                           <p> MySQL </p> <progress value="80" max="100"></progress>
                           <p> MongoDb </p> <progress value="70" max="100"></progress>
                        </div>}
                    </div>
                    
                </div>

            </section>
        </>
    );
}

export default Skill;