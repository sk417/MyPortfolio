import React, { useEffect, useState } from "react";
import {send} from "emailjs-com";
import Aos from 'aos';
import "aos/dist/aos.css";

const Contact = ()=>{

    const [toSend, setToSend] = useState({
        from_name: '',
        message : '',
        reply_to : ''
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMP_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        ).then((response) => {
            window.alert('Message has been sent successfully');
            setToSend({
                from_name: '',
                message : '',
                reply_to : ''
            });
        })
        .catch((err) =>{
            window.alert('message has not sent');
        })
    }
        const handleChange = (e) => {
            setToSend({...toSend, [e.target.name]:e.target.value});
        }


   useEffect(() =>{
        Aos.init({duration:2000});
      },[]);
    return (
        <>
            <section className="contact" data-aos="fade-down">
                <div className="max-width">
                    <h2 className="title">Get in touch</h2>
                    <div className="contact-content">
                      <div className="column left">
                          <div className="text">
                            Contact me
                          </div>
                          <div className="icons" data-aos="fade-down">
                            <div className="row">
                                <i className="fa fa-envelope"></i>
                                <div className="info">
                                    <div className="subtitle">sudheerkumarmki@gmail.com</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-phone"></i>
                                <div className="info">
                                    <div className="subtitle">+91 8541046916</div>
                                </div>
                            </div>
                            <div className="row">
                                <i className="fa fa-map-marker"></i>
                                <div className="info">
                                    <div className="subtitle">Bettiah (Bihar)</div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="column right" data-aos="fade-down">
                        <div className="text">Message me</div>
                        <form onSubmit={onSubmit}>
                           <div className="field">
                              <div className="field name" data-aos="fade-down">
                                  <input type="text" name="from_name" value={toSend.from_name} onChange={handleChange}
                                 placeholder="Your Name" required/>
                               </div>
                            <div className="field email" data-aos="fade-down">
                                <input type="email" name="reply_to" value={toSend.reply_to} onChange={handleChange}
                                 placeholder="Your Email" required/>
                            </div>
                            <div className=" field textarea" data-aos="fade-down">
                                <textarea cols="30" rows="10" name="message" value={toSend.message} onChange={handleChange}
                                 placeholder="Write here..." required></textarea>
                            </div>
                            <div className="button">
                                <button type="submit">Send</button>
                            </div>
                           </div> 
                        </form>
                      </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;