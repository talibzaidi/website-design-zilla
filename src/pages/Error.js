import React from 'react'
import GH from '../images/GH.jpg'
import {useNavigate} from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    const navigateTohome = () => {
        // 👇️ navigate to /home
        navigate('/');
      };
  return (
    <div>
        <section>
            <div className='container'>
                <h1 className='centeraligned mb30' style={{color:'black'}}>Oops! Something went wrong.</h1>
                <p className='centeraligned' style={{ marginBottom: '150px' }}>But don't worry we got you covered.</p>
                <img className='centeraligned mb100' style={{marginLeft:'auto' , marginRight: 'auto' , marginBottom: '200px'}} src={GH} alt='gh'/>
                <button className='btn3 centeraligned mb70' style={{marginLeft:'auto' , marginRight: 'auto'}} onClick={navigateTohome}>Just take me out of here</button>
            </div>
        </section>
    </div>
  )
};
export default Error;
