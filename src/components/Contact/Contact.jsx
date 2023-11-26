import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_cysg2mv', 'template_h16hwic', form.current, 'FfimH9f-XbJMWlk3X')
            .then(() => {
                alert("Message Sent Successfully. We will try to reply ASAP.")
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Something Error occured. Please check interent connection.");
            });
    };
    return (
        <div>
            <div id='contact' className="heading">
                <h1 className="head">CONTACT US</h1>
            </div>
            <div className="main_form">
                <form ref={form} className='form' onSubmit={sendEmail}>
                    <div className="first">
                        <div className="name">
                            <label className='labels' htmlFor="name">First name</label>
                            <input name='first' placeholder='John' type="text" id="name" required />
                        </div>
                        <div className="email">
                            <label className='labels' htmlFor="email">Last name</label>
                            <input name='last' placeholder='Smith' type="text" id="email" required />
                        </div>
                    </div>
                    <div className="second">
                        <div className="nation">
                            <label className='labels' htmlFor="nation">Contact Number</label>
                            <input name='contact' placeholder='+91 9876543210' type="text" id="nation" required />
                        </div>
                        <div className="phone">
                            <label className='labels' htmlFor="phone">Email</label>
                            <input name='email' placeholder='abc@gmail.com' type="email" id="phone" required />
                        </div>
                    </div>
                    <div className="msg">
                        <label className='labels' htmlFor="name">Message</label>
                        <textarea name='msg' id="msg" rows="5" cols="30" required ></textarea>
                    </div>
                    <div className="btn">
                        <button id="btn_send" className="send">Send Mail</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
