import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useNavigate} from 'react-router-dom';

const Emailjs1 = () => {
//     const [data, setData] = useState('');
// const form = useRef();
// const navigate = useNavigate();

// const handleChange = (e) => {
//     e.preventDefault();
//     setData({ ...data, [e.target.name]: e.target.value});
// }

// const sendEmail = (e) => {
// e.preventDefault();

// emailjs.sendForm('service_jsdt2ch', 'template_zdz335r', form.current, 'JNcPCPj0p_CSdCYEa')
//     .then((result) => {
//         console.log(result.text);
//         console.log('Message sent successfully.');
//         e.target.reset();
//         navigate('/contactthanks');
//     }, (error) => {
//         console.log(error.text);
//         navigate('/contactoops');
// });
// };

const [formState, setFormState] = useState({});



const changeHandler = (event)=>{
    setFormState ({...formState, [event.target.name]: event.target.value});
};
const submitHandler = (event) => {
    event.preventDefault();
    const config = {
        SecureToken: 'f26bdf2e-e9a0-4ff5-ae73-d1737e98521d ',
        To : 'inquiry@websitedesignzilla.com',
        From : 'inquiry@websitedesignzilla.com',
        Subject : "New query From Website Design Zilla",
        Body: formState.message,
        
    };
    if(window.Email){
        window.Email.send(config).then(() => alert("email sent successfully"));
    }
};

    return (
        <form onSubmit={submitHandler}>
            <div className='row'>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required name="name" onChange={changeHandler} />
                    <label for="floatingInput">Your name</label>
                </div>
                {/*<input type="text" name="from_name" placeholder='Your name' />*/}
            </div>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput2" name="email" onChange={changeHandler} required placeholder='Your Email' />
                    <label for="floatingInput">Your email</label>
                </div>
            </div>
            <div className='col-md-12'>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingInput3" name="message" onChange={changeHandler} required placeholder='Tell us about your project' />
                    <label for="floatingInput">Message</label>
                </div>
                <button type="submit" value="Send Email" className='btn6'>Send</button>
            </div>
            </div>
        </form>
    );
};
export default Emailjs1;