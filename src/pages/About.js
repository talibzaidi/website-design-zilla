import React from "react";
import {useNavigate} from 'react-router-dom';
import Home2 from "../components/Home2.js";
import Mobile7 from '../images/mobile7.png'
import software from '../images/Enterprisesoftware1.jpg'
import Mobile9 from '../images/mobile9.jpg'
import Mobile10 from '../images/mobile10.jpg'
import aboutuspic1 from '../images/aboutuspic1.png'
import Colab from '../components/Collaborate'
import Learnmore from '../components/Learnmore'
import man from '../images/man-move.png'
import weare from '../images/weare.png'


function About(){
const navigate = useNavigate();
const data = [
  {
    text: 'Our Work',
    link: '/work'
  }
]
return(
<div>
    <section className="aboutus">
      <div className="container">
        <div className="mb70"></div>
        <div className="mb70">
        <p  className="large">ABOUT US</p>
        <h1 style={{color:'black'}} className='mb30'>Top Ranked Website Agency.</h1>
        <div className="mb70">
        <div className="row">
          <div className="col-md-6">
            <h2>Web Leads Into Conversions? Build Website</h2>
            <p className="mb70 large">
            We build website and create unlimited pathways for the brand to capture leads and enjoy unexpected conversions. websitedesignzilla believes in delivering expectations that are doable for our experts. We promise nothing but perfection when it comes to website development. websitedesignzilla has a firm approach for every web design that is further tailored to the business niche of the brand. The proficient strategies for every UI/UX of our website design company open plentiful leads ready to be converted.
            </p>
            <ul >
              <li>UI/UX Design</li>
              <li>Web and mobile apps Design</li>
              <li>Motion Design</li>
              <li>Graphic Design</li>
              <li>Visual content creation</li>
              <li>Advertising design</li>
            </ul>
            
            <div className="mb70"></div>
          </div>
          <div className="col-md-6">
            <div className="centeraligned">
              <img src={aboutuspic1} alt='Mobile7' className='mb30 aboutussec1' style={{width:'583' , height:'565'}}/>
            </div>
          </div>
        </div>
        </div>

        <div className="mb70">
        <div className="row">
          <div className="col-md-6">
            <div className="centeraligned">
              <img src={man} alt='Mobile7' className='mb30 aboutussec1' style={{width:'583' , height:'565'}}/>
            </div>
          </div>
          <div className="col-md-6">
            <h2>You Dream It, We Build It</h2>
            <p className="mb70 large">
            website design zilla takes pride in its award-winning team of designers, developers, strategists, and consultants who are skilled enough to turn your creative ideas into impactful realities.
            </p>
          </div>
        </div>
        </div>
        <div className="">
        <div className="row">
          <div className="col-md-6">
            <h2>Websites that tell the narrative of your company</h2>
            <p className=" large">
            We collaborate with marketing departments of huge corporations and startups to create award-winning websites.
            </p>
          </div>
          <div className="col-md-6">
            <div className="centeraligned">
              <img src={weare} alt='Mobile7' className=' aboutussec1' style={{width:'583' , height:'565'}}/>
            </div>
          </div>
        </div>
        </div>

        </div>
      </div>
    </section>
    {/* <div className="mb70"><Home2/></div> */}
    <div className="mb70"><Colab/></div>    

    

</div>
);}
export default About;