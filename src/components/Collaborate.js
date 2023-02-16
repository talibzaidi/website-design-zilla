import React from 'react'
import {useNavigate} from 'react-router-dom';

function Collaborate() {

  const navigate = useNavigate();
  const navigatocontact = () => {
    // 👇️ navigate to /home
    navigate('/contact');
  };

  return (
    <div className='responsive'>
    <div className=''>
        <div className='row'>
            <div className='colaborate aligncenter mb70' style={{padding:'80px'}}>
                <h2>Collaborate with us</h2>
                <p>Get in touch to discuss how we can help you access technology.</p>
                <button className='btn2' data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Email Us</button>
                <a href='tel:+17606884491'><button className='btn2' >Call Us Now</button></a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Collaborate