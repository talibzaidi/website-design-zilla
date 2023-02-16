import React from 'react'
import pic1 from '../images/Elevatingindustry perceptions.jpg'
import pic2 from '../images/Buildingfull-stacke-commerce.jpg'
import Testimonials from "../components/Testimonials.js";
import {useNavigate} from 'react-router-dom';

export const Portfolio1 = () => {

    const navigate = useNavigate();

    const navigateToportfolio = () => {
      // 👇️ navigate to /contacts
      navigate('/Portfolio');
    };

  return (
    <div>
        <section className='portfolioheader'>
            <div className='container '>
                <h1 style={{color:'black' , marginLeft: '-100px' }}>Black H2O</h1>
                <p style={{marginLeft: '-100px'}}>Mother earth’s superfood</p>

            </div>
        </section>

        <section>
        <div className='container'>
       <div className='row mb80'>
        <div className='col-md-6'>
            <img src={pic1} alt="" />
        </div>
        <div className='col-md-6'>
            <h2 className='mb50'>Elevating industry perceptions</h2>
            <p>The rise of mainstream cannabis use, despite research that supports it as a wellness product, has given way to many misconceptions. We wanted to give the dosist customer a holisitc design experience from first tap to product delivery.</p>
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>Building full-stack e-commerce</h2>
            <p>Due to national restrictions, many vendors are unwilling to provide back-end service for an e-commerce platform in the cannabis indistry. YML needed to architect a selling structure showcasing dosist’s full product suite, while allowing for e-commerce capabilities (like inventory management and merchant processing/checkout capability).</p>
        </div>
        <div className='col-md-6'>
            <img src={pic2} alt="" />
        </div>
       
       </div>

       <section className='mb80'>
        <h2 className='centeraligned'>A design system for brand evolution</h2>
        <p className='centeraligned' style={{textAlign: 'center'}}>To help Thrive Market create a digital experience that increased sign-ups and first-box shipments, our design was built of entirely configurable components. This allowed Thrive Market to not just launch a new website, but rapidly experiment, iterate and perfect it over time.</p>
       </section>

       
        </div>
        <section className='justimage mb80'>
        
       </section>
       <div className='container'>
       <div className='row'>
        <div className='col-md-8'>
            <h2>What we did</h2>
        </div>
       
            <div className='col-md-2'>
                <h3>Strategy</h3>
                <ul className='mb30' style={{display:'inline-grid'}}>
                <li>Brand and Product Strategy</li>
                <li>UX Strategy</li>
                <li>Research</li>
                <li>User Testing</li>
            </ul>
            </div>
            <div className='col-md-2'>
            <h3>Content</h3>
                <ul className='mb30' style={{display:'inline-grid'}}>
                <li>Information Architecture</li>
                </ul>
            </div>
            <div className='col-md-8'  >
           
            </div>
            <div className='col-md-2'>
            <h3>Design</h3>
                <ul className='mb30' style={{display:'inline-grid'}}>
                <li>Art Direction</li>
                <li>Product Design</li>
                <li>Accessibility</li>
                <li>Motion Design</li>
                </ul>
            </div> <div className='col-md-2' >
            <h3>Engineering</h3>
                <ul className='mb30' style={{display:'inline-grid'}}>
                <li>Proof of concept</li>
                </ul>
            </div>
       </div>

       <Testimonials/>
       </div>
    </section>
    <section>
        <div className='container mb70'>
            <h3>Up next</h3>
            <div className="slider-background ">
    <div className="Slick-dots-edits">
         <p>BLACK H2O</p>
         <h3 className="sliderhomeheading"><strong>Mother earth’s superfood</strong></h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigateToportfolio}>Case Study</button>
         </div>
      </div>
        </div>
    </section>
    </div>
   
  )
};
export default Portfolio1
