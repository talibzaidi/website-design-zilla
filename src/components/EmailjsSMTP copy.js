import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';

const Emailjs1 = () => {
const form = useRef();
const navigate = useNavigate();

const sendEmail = (e) => {
e.preventDefault();

//emailjs.sendForm('service_l2mruv3', 'template_yl6vd1p', form.current, 'Sq7rP19Ga0JNcYKLK')
emailjs.sendForm('service_jsdt2ch', 'template_zdz335r', form.current, 'JNcPCPj0p_CSdCYEa')
    .then((result) => {
        /*console.log(result.text);
        console.log('Message sent successfully.');*/
        e.target.reset();
        navigate('/contactthanks');
    }, (error) => {
        /*console.log(error.text);*/
        navigate('/contactoops');
});
};

    return (
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="to_name" className='hidden' value="Muhammad Ashraf Khan" />
            <div className='row'>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required name="from_name" />
                    <label for="floatingInput">Your name</label>
                </div>
                {/*<input type="text" name="from_name" placeholder='Your name' />*/}
            </div>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput2" name="from_email" required placeholder='Your Email' />
                    <label for="floatingInput">Your email</label>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingInput3" name="message" required placeholder='Tell us about your project' />
                    <label for="floatingInput">Message</label>
                </div>
                <button type="submit" value="Send" className='btn6'>Sends</button>
            </div>
            </div>
        </form>
    );
};
export default Emailjs1;