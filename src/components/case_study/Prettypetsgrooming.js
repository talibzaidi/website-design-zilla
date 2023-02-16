import React from 'react'
import pic1 from '../../images/PreetyPetsLaptop1.png'
import pic2 from '../../images/PreetyPetsLaptop2.png'
import pic3 from '../../images/PreetyPetLaptop3.png'
import pic4 from '../../images/PreetyPetLaptop4.png'
import pic5 from '../../images/PreetyPetsLaptop5.png'
import Testimonials from "../Testimonials.js";
import {useNavigate} from 'react-router-dom';
import Banner from '../../images/PreetyPetsBanner.png'
import Lastimage from '../../images/preetyPetsLast.png'
import Next from '../../images/MatchaBanner.png'


function Prettypetsgrooming(){
    const navigate = useNavigate();

    const navigateTonext = () => {
      navigate('/macha');
    };

  return (
    <div>
        <section>
            <div className='allcaseStudy'>
            <div className='row'>
                    <div className='col-md-4'>
                    <h1 className='headingfolio'>PREETY PET GROOMING</h1>
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
            <p>Numerous associations are advancing the need to take fundamental consideration of your pets. As a groundbreaking business pioneer, our client understands that the consideration of pets is especially significant. Regardless of how your social, business or corporate cycle is feverish, an individual should zero in on prepping and focusing on his pet.</p>
        </div>
        <div className='col-md-6 order-md-1'>
            <img src={pic1} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Problem</h2>
            <p>It is very difficult to find great parental figures in your area. Because of cutoff times, targets, work pressure, or the idea of specific livelihoods, representatives might feel hurried. Moreover, your carelessness will hurt your pet, paying little mind to how enormous or swarmed the work environment is.</p>
            <p>While certain individuals put forth cognizant attempts to work on the state of their pets, others might become restless and overpowered before the day's over. This exhaustion could hurt the well-being and cleanliness of your pet.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic2} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-4'>
            <h2 className='mb50'>The WEB Idea</h2>
            <p>A site that reflected the client's vision was wanted. The idea for the site was straightforward, yet it was extensive, all-around planned, and plausible. Regardless, we understood we expected to construct a top-notch site since our objective clients were educated experts who put an exceptional value on worth and significance.</p>
        </div>
        <div className='col-md-6 order-md-3'>
            <img src={pic3} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Client's Expectations</h2>
            <p>The site is expected to give a welcome client experience. It should be included, with an emphasis on empowering solid propensities and exhibiting care and love for pets by planning an appointment. </p>
        </div>
        <div className='col-md-6'>
            <img src={pic4} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-5'>
            <h2 className='mb50'>Arrangement by GoHaych.</h2>
            <p>The client was satisfied with what we conveyed: a full site for canine and feline preparing necessities that is easy to use and has helped them in essentially developing their organisation.</p>
        </div>
        <div className='col-md-6 order-6'>
            <img src={pic5} alt="" />
        </div>
       </div>

       <section className='mb80'>
        <h2 className='centeraligned'>The outcomes</h2>
        <p className='centeraligned' style={{textAlign: 'center'}}>With the assistance of our fabulous group, we've made a straightforward, easy-to-site that can help anyone and everybody. PRETTYPETSGROOMING is a site where you might plan an arrangement for your pet's fundamental requirements.</p>
       </section>

       
        </div>
        <section className='mb80'>
        <div className='col-md-12'>
            <img src={Lastimage} alt="lastimage" className='justimage' />
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
          <img src={Next} alt="" className="slider-background"/>
        </div>
        
        <div className="col-md-4 order-md-1">
        <p>MACHA</p>
         <h3 className="sliderhomeheading"><strong>MACHA</strong></h3>
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
export default Prettypetsgrooming;