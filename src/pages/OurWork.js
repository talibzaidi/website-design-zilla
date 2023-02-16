import React from 'react'
import Colab from "../components/Collaborate.js"
import Learnmore from '../components/Learnmore.js'
import web1 from "../images/websitedevelopment_ppf.jpg"
import web2 from "../images/ecommerce_ppf.jpg"
import web3 from "../images/branding_ppf.jpeg"
import web4 from "../images/webapplication_ppf.png"
import web5 from "../images/videoanimation_ppf.jpg"
import web6 from "../images/digitalmarketing_ppf 1.png"
import {useNavigate} from 'react-router-dom';
    

export const OurWork = () => {

  const navigate = useNavigate();

const navigatewebdevelopment = () => {
    // 👇️ navigate to /home
    navigate('/webdev');
  };

  const navigateecommerce = () => {
    // 👇️ navigate to /contacts
    navigate('/ecomm');
  };
  const navigatebranding = () => {
    // 👇️ navigate to /contacts
    navigate('/brand');
  };
  const navigatewebapp = () => {
    // 👇️ navigate to /contacts
    navigate('/webapp');
  };
  const navigatevideoanim = () => {
    // 👇️ navigate to /contacts
    navigate('/videoanim');
  };
  const navigatedigitmark = () => {
    // 👇️ navigate to /contacts
    navigate('/digit');
  };

  

  return (
    <div>
        <section className='ourwork'>
        <div className='container'>
        <div className='mb70'>
            <div className='row'>
              <div className='mb70'></div>
            <p className='large'>OUR WORK WE <i className="fa fa-heart-o"></i></p>
                <h1 style={{color:'black' , width:'65%'}} className='mb70'>We’re rapidly growing. Our secret? We think differently.</h1>
                <div className='col-md-6'>
                 <img src={web1} alt='Development' className='mb30 casestudy'/>
                 <p>WEBSITE DEVELOPMENT</p>
         <h3 className='ourworkproject'>WEBSITE DEVELOPMENT</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigatewebdevelopment}>Explore more</button>
                </div>
                <div className='col-md-6'>
                 <img src={web2} alt='Development' className='mb30 casestudy'  />
                 <p>E-COMMERCE  SOLUTION</p>
         <h3 className='ourworkproject'>E-COMMERCE  SOLUTION</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigateecommerce}>Explore more</button>
                </div>
                </div>
                </div>
                <div className='mb70'>
                <div className='row'>
                <div className='col-md-6'>
                 <img src={web3} alt='Development' className='mb30 casestudy'/>
                 <p>BRANDING</p>
         <h3 className='ourworkproject'>BRANDING</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigatebranding}>Explore more</button>
                </div>
                <div className='col-md-6'>
                 <img src={web4} alt='Development' className='mb30 casestudy'  />
                 <p>WEB APPLICATION</p>
         <h3 className='ourworkproject'>WEB APPLICATION</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigatewebapp}>Explore more</button>
                </div>
            </div>
            </div>

            <div className='mb70'>
                <div className='row'>
                <div className='col-md-6'>
                 <img src={web5} alt='Development' className='mb30 casestudy'/>
                 <p>VIDEO ANIMATIONS</p>
         <h3 className='ourworkproject'>VIDEO ANIMATIONS</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigatevideoanim}>Explore more</button>
                </div>
                <div className='col-md-6'>
                 <img src={web6} alt='Development' className='mb30 casestudy'  />
                 <p>DIGITAL MARKETING</p>
         <h3 className='ourworkproject'>DIGITAL MARKETING</h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigatedigitmark}>Explore more</button>
                </div>
            </div>
            </div>

          
            
        </div>

        <Colab/>
        </section>
    </div>
  )
};
 export default OurWork;
