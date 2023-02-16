import React from 'react'
import {useNavigate} from 'react-router-dom';

export const Learnmore = () => {

  const navigate = useNavigate();
  const navigatoaboutus = () => {
    // 👇️ navigate to /home
    navigate('/about');
  };
  return (
    <section className='learnmore'>
    <div className='container mb70'>
        <div className='row'>
          
            <div className='col-md-8'>
                <h2>Too early to take the first step?</h2>
            </div>
            <div className='col-md-4'>
              <div className='learnbutton'>
                <button className='btn3' onClick={navigatoaboutus}>Learn more about us</button>
                </div>
            </div>
            
        </div>
    </div>
    </section>
  )
}
export default Learnmore
