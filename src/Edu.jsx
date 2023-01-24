import React, { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Edu = () =>{
  useEffect(() =>{
    Aos.init({duration:2000});
  },[]);
    return (
        <>
          <section className="education" data-aos="fade-down">
            <div className="max-width">
              <h1 className="title"><i className="fa fa-graduation-cap"></i> Education</h1>
                <div className="content">
                <div className="row1" data-aos="fade-right">
                  <div className="text box">
                    <h1>BTech (Computer Engineering)</h1>
                    <h2>C V Raman Global Unuversity</h2>
                    <p> <i className="fa fa-map-marker" aria-hidden="true"></i> Bhubaneshwar (Odisha)</p>
                    <p>Till now 8.99 CGPA (2020-present)</p>
                  </div>
                  </div>
                  <div className="row2" data-aos="fade-left">
                  <div className="box text">
                    <h1>Intermediate (Science(PCM))</h1>
                    <h2>L N D College</h2>
                    <p> <i className="fa fa-map-marker" aria-hidden="true"></i> Motihari (Bihar)</p>
                    <p>83.4% (2017-2019)</p>
                  </div>
                  </div>
                  <div className="row1" data-aos="fade-right">
                  <div className="box text">
                    <h1>Matriculation</h1>
                    <h2>R C L Uchch Vidya Mandir</h2>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Mathura (Bihar)</p>
                    <p>72.8% (2016-2017)</p>
                  </div>
                  </div>
                </div>
              </div>
          </section>
         
        </>
    );
}

export default Edu;