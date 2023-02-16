import React from 'react'
import pic1 from '../../images/machapic1.jpg'
import pic2 from '../../images/matchapic2.jpg'
import pic3 from '../../images/matchapic3.jpg'
import pic4 from '../../images/matchapic4.jpg'
import pic5 from '../../images/matchapic5.jpg'
import Testimonials from "../Testimonials.js";
import {useNavigate} from 'react-router-dom';
import Banner from '../../images/MatchaBanner.png'
import Next from '../../images/b1.png';

function Macha(){
    const navigate = useNavigate();

    const navigateTonext = () => {
      navigate('/blackh2o');
    };

  return (
    <div>
        <section>
        <div className='allcaseStudy'>
            <div className='row'>
                    <div className='col-md-4'>
                    <h1 className='headingfolio'>PREMIUM ORGANINC MATCHA</h1>
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
            <p>The value of organic goods is being emphasized by several businesses. As global managers, our client understands that employee happiness is a key component of any company's success. Regardless of the industry or market in which a company operates, organic and high-quality products that improve an individual's health are critical, and they have an impact on the overall efficiency and effectiveness of activities.</p>
        </div>
        <div className='col-md-6 order-md-1'>
            <img src={pic1} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Problem</h2>
            <p>It's indeed challenging to find high-quality items near you, and in this day and age of work and hectic schedules, it is nearly impossible</p>
            <p>While some people can make conscious efforts to increase their consumption of the products, others may get stressed and overwhelmed by the end of the day. This weariness can have an immediate impact on their physical health and, as a result, their working efficiency.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic2} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-4'>
            <h2 className='mb50'>The Web idea</h2>
            <p>The goal was to design a website that represented the client's concept. The website concept was straightforward, yet it was extensive, well-designed, and beneficial. Nonetheless, we knew we needed a high-quality website because our target audience was comprised of knowledgeable people who appreciated value and relevance.</p>
        </div>
        <div className='col-md-6 order-md-3'>
            <img src={pic3} alt="" />
        </div>
       </div>

       <div className='row mb80'>
       <div className='col-md-6'>
            <h2 className='mb50'>The Client's Expectations</h2>
            <p>The website has to provide a pleasing consumer experience. It must be feature-rich, with an emphasis on promoting healthy lifestyles and the consumption of organic tea.</p>
        </div>
        <div className='col-md-6'>
            <img src={pic4} alt="" />
        </div>
       
       </div>

       <div className='row mb80'>
        <div className='col-md-6 order-md-5'>
            <h2 className='mb50'>Solution by GoHaych.</h2>
            <p>The customer was glad about our creation of a full website for organic tea that may be purchased first as they were acquiring it out of a nearby store.</p>
        </div>
        <div className='col-md-6 order-md-6'>
            <img src={pic5} alt="" />
        </div>
       </div>

       <section className='mb80'>
        <h2 className='centeraligned'>The outcomes</h2>
        <p className='centeraligned' style={{textAlign: 'center'}}>With the help of our outstanding staff, we created a simple, consumer platform that can assist anybody and everyone. Premium Organic Matcha is a website where you can get all of the organic tea that is just a click away.</p>
        <p>The tea's spirit is one that combines serenity, warmth, and elegance.
Branding, Website Design, Website Development, User Interface, User Experience</p>
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
    <div className="container">
    <div className="Slick-dots-edits">
      <div className="row">
        <div className="col-md-8 order-md-2">
          <img src={Next} alt="" className="slider-background"/>
        </div>
        
        <div className="col-md-4 order-md-1">
        <p>Black H2O</p>
         <h3 className="sliderhomeheading"><strong>Black H2O</strong></h3>
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
export default Macha;