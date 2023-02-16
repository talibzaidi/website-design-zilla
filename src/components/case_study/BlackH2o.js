import React from 'react'
import pic1 from '../../images/Elevatingindustry perceptions.jpg'
import pic2 from '../../images/Buildingfull-stacke-commerce.jpg'
import pic3 from '../../images/b4.png'
import pic4 from '../../images/b6.png'
import pic5 from '../../images/b3.png'
import Testimonials from "../Testimonials.js";
import {useNavigate} from 'react-router-dom';
import b1 from '../../images/b1.png';
import handd from '../../images/HandDBanner.png'
import b7 from '../../images/b7.png'
function BlackH2o(){
const navigate = useNavigate();

const navigateTonext = () => {
    // 👇️ navigate to /contacts
    navigate('/handd');
};

return(
<div>
    <section className=''>
            <div className=''>
                <div className='row'>
                    <div className='col-md-6 '>
                    <h1 className='headingfolio'>Black H2O</h1>
                    </div>
                    <div className='col-md-6'>
                     <img src={b1} alt='' className='portfolioheader'/>
                    </div>
                </div>
            </div>{/*con*/}
            </section>

            <section>
    
        <div className='container'>
       <div className='row mb80'>
        <div className='col-md-6 order-md-2'>
            <h2 className='mb50'>Project Goal</h2>
            <p>Many firms are featuring the significance of natural items. Our client, as a cutting-edge pioneer, perceives that representative prosperity is a basic part of any organization's prosperity. No matter what the business or market where an organisation works, natural and quality items that upgrade a single's wellbeing are extremely fundamental and affect the general productivity and viability of tasks.</p>
        </div>
        <div className='col-md-6 order-md-1'>
            <img src={pic1} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Problem</h2>
            <p>It is hard to track down quality items effectively close to you, and in this period of work and tough plans, it's practically impossible. Employees might feel rushed because of cutoff times, targets, work pressure, or the idea of specific occupations. Moreover, paying little mind to how wide or pressed the workplace is, might truly tyre representatives and decrease an individual's wellbeing.</p>
            <p>While certain people can make conscious endeavours to work on their admission of the items, others might get focused and overpowered before the day's over. This weariness can impact their physical prosperity and, thus, their work efficiency.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic2} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-4'>
            <h2 className='mb50'>The WEB Idea</h2>
            <p>The client had mentioned a site that mirrored her vision. The site idea was essential yet complete, all-around planned, and attainable. Regardless, we realised we needed to make a great site since our objective clients were smart experts who esteemed worth and pertinence regardless of anything else.</p>
        </div>
        <div className='col-md-6 order-md-3'>
            <img src={pic3} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Client's Expectations</h2>
            <p>For corporate representatives who previously had rushed occupations, the site was expected to highlight a client experience that was inviting. It must be included rich, with an emphasis on empowering healthy ways of behaving and the utilization of the natural item.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic4} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-5'>
            <h2 className='mb50'>Solution by GoHaych.</h2>
            <p>The client was satisfied with what we made. We made a total site for the natural items that can be bought as though they were buying them from a local store.</p>
        </div>
        <div className='col-md-6 order-md-6'>
            <img src={pic5} alt="" />
        </div>
       </div>

       <section className='mb80'>
        <h2 className='centeraligned'>The outcomes</h2>
        <p className='centeraligned' style={{textAlign: 'center'}}>We've planned a basic, client-driven site with the backing of our extraordinary staff that can help anyone and everybody. BlackH20 is a site from which you can purchase every one of the natural items that are only a tick away.</p>
       </section>

       
        </div>
        <section className=' mb80'>
            <div className='col-md-12'>
                <img src={b7} alt="" className='justimage'/>
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
          <img src={handd} alt="" className="slider-background"/>
        </div>
        
        <div className="col-md-4 order-md-1">
        <p>H&D</p>
         <h3 className="sliderhomeheading"><strong>H&D</strong></h3>
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
export default BlackH2o;