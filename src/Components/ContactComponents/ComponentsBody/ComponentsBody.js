import React from 'react'
import emailjs from 'emailjs-com';
import './ComponentsBody.scss'

export default function ComponentsBody() {

    function sendEmail(e) {
        // e.preventDefault();
    
        // emailjs.sendForm('gmail', 'template_e03z1m5', e.target, 'user_ClgaL0aV9mVJ1HcBHbqJW')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      }


    return (
        <div className="Contact-wrapper">
            <div className="Info">
                <span className="Info-span">
                    <h3>COMPANY NAME</h3>
                    <p>Nice Company Slogan</p>
                </span>
                <span>
                    <p>68 Jagiellonska Street,</p>
                    <p>34-300 Zywiec</p>
                </span>
                <span>
                    <p>phone: 913 432 246</p>
                    <p>mail: hello@minihouse.com</p>
                </span>
                
            </div>
        
        <div className="Contact" id="Contact">
            {/* <h2 className="Contact-title">Contact Us</h2> */}
            <form onSubmit={sendEmail} className="Contact-form">
                    <input type="text" placeholder="Name" name="name" className="Contact-form-name"/>
                    <input type="text" placeholder="Email Address" name="email" className="Contact-form-email" />
                    <input type="text" placeholder="Subject" name="subject" className="Contact-form-text"/>
                    <textarea placeholder="your message" cols="30" rows="8" name="message" className="Contact-form-textarea"></textarea>
                    <input type="submit" value="Send" className="Contact-form-button"></input>
            </form>
            {/* <h1 className="Contact-number">910-910-910</h1>
            <h2 className="Contact-email">example@gmail.com</h2> */}
        </div>
        </div>
    )
}