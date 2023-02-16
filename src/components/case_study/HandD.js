import React from 'react'
import pic1 from '../../images/HandDLaptop1.png'
import pic2 from '../../images/HandLaptop2.png'
import pic3 from '../../images/HandDLaptop3.png'
import pic4 from '../../images/HandLaptop4.png'
import pic5 from '../../images/HandLaptop5.png'
import Testimonials from "../Testimonials.js";
import {useNavigate} from 'react-router-dom';
import Banner from '../../images/HandDBanner.png'
import Lastimage from '../../images/HandDLast.png'
import Next from '../../images/PreetyPetsBanner.png'


function HandD(){
    const navigate = useNavigate();

    const navigateTonext = () => {
      navigate('/prettypetsgrooming');
    };

  return (
    <div>
        <section>
            <div className='allcaseStudy'>
            <div className='row'>
                    <div className='col-md-4'>
                    <h1 className='headingfolio'>H&D</h1>
                    <p className='large'>Recruitment Consultancy</p>
                    </div>
                    <div className='col-md-8'>
                     <img src={Banner} alt='' className='portfolioheader'/>
                    </div>
                </div>
            </div>
        </section>

        <section>
        <div className='container'>
       <div className='row mb80'>
        <div className='col-md-6 order-md-2'>
            <h2 className='mb50'>Project Goal</h2>
            <p>An ever-increasing number of organisations are stressing the significance of recruitment. Our client, as a cutting-edge pioneer, believes that hiring the perfect candidate is a basic fundamental of any organization's prosperity. No matter what the business or market wherein an organisation works, providing the most essential and best candidate for their vacant position in the valuable task.
</p>
        </div>
        <div className='col-md-6 order-md-1'>
            <img src={pic1} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Problem</h2>
            <p>Recruiters in the current time frame of working are most of the time in the process of hiring. Many firms have faced multiple problems while hiring righteous candidates for their vacant positions, especially those who are assigned to do the most basic daily chores on permanent or contract bases.</p>
            <p>While some of the firms do have a strong database of the candidates to be hired but many don't, due to which hiring the right candidate becomes a difficult task to do all alone.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic2} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-4'>
            <h2 className='mb50'>The WEB Idea</h2>
            <p>The client desired a website that represented his vision. The website’s idea was essential, however thorough, very much planned, and possible. In any case, we realised we needed to make an excellent website since our objective clients were clever experts who esteemed worth and significance regardless of anything else.</p>
        </div>
        <div className='col-md-6 order-md-3'>
            <img src={pic5} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Client's Expectations</h2>
            <p>For corporate recruiters who are frequently in process of hiring staff, the website was expected to resolve the issue. From this, the firms would just hire candidates for their vacant position by just dropping a query for recruitment and the rest would be the recruitment agency’s duty and will simplify the job of recruiters.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic3} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-5'>
            <h2 className='mb50'>Solution by GoHaych.</h2>
            <p>TThe finished product met the client's expectations. We created a comprehensive website for the recruitment agency to reduce barriers and the distance between employers and applicants.</p>
        </div>
        <div className='col-md-6 order-md-6'>
            <img src={pic4} alt="" />
        </div>
       </div>

       <section className='mb80'>
        <h2 className='centeraligned'>The outcomes</h2>
        <p className='centeraligned' style={{textAlign: 'center'}}>We've planned a straightforward, client-driven application with the backing of our fantastic staff that can help anyone and everybody .H&D is the most recent, must-pinned website for recruiters.</p>
       </section>

       
        </div>
        <section className='mb80'>
        <div className='col-md-12'>
            <img src={Lastimage} alt="" className='justimage'/>
        </div>
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
    <div className="container">
    <div className="Slick-dots-edits">
      <div className="row">
        <div className="col-md-8 order-md-2">
          { <img src={Next} alt="" className="slider-background"/> }
        </div>
        
        <div className="col-md-4 order-md-1">
        <p>PREETY PETS GROOMING</p>
         <h3 className="sliderhomeheading"><strong>PREETY PETS GROOMING</strong></h3>
         <p>Branding, Website Design, User Interface, User Experience</p>
         <button className="btn1" onClick={navigateTonext}>Case Study</button>
        </div>
         
         </div>
         </div>
         </div>
    </section>
    </div>
   
  )
};
export default HandD;