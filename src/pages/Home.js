import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import SliderHome from '../components/SliderHome';
import Section2 from '../components/Section2.js';
import Testimonials from "../components/Testimonials.js";
import Colab from "../components/Collaborate.js"
import Faq from '../components/Faq'
import Popup from '../components/FormPopup'
import Price from '../components/Prices'
import Cta from '../components/CalltoAction'
import work1 from '../images/work-1.jpg'
import work2 from '../images/work-2.jpg'
import work3 from '../images/work-3.jpg'
import work4 from '../images/work-4.jpg'
import work5 from '../images/work-5.jpg'
import work6 from '../images/work-6.jpg'
import work7 from '../images/work-7.jpg'
import work8 from '../images/work-8.jpg'
import work9 from '../images/work-9.jpg'
import BgVideo from '../videos/vid3.mp4'
import Popup2 from "../components/Popup2";



function Home(){
  const [isPopUpVisible,setIsPopupVisible]=  useState(false)

const navigate = useNavigate();

useEffect(() => {
 if(isPopUpVisible) { document.body.style.overflow = 'hidden';}else{
  document.body.style.overflow = 'unset';
 }
}, [isPopUpVisible]);

const HandleOnOrderNowClick = () => {setIsPopupVisible(true)}


function f1(){
var fadeTarget = document.getElementById("c1");
var fadeEffect = setInterval(function(){
    if (!fadeTarget.style.opacity){
        fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.3;
    } else {
        clearInterval(fadeEffect);
        fadeTarget.style.display = 'none';
    }
}, 200);
}

return(
<div>
  
<section className="home1">
<video src={BgVideo} autoPlay loop muted />
<div class="content">
<div className="container">
<div className="row">
<div className="col-md-12">
<div className="home1heading" >
<h1 className=" mb15" style={{color:'white'}}>Get Custom website Development</h1>
<p style={{color:'white', width:'70%' , marginLeft: '14%'}} className="mb40 large">We serve businesses, start-ups, and organizations to engender fresh initiatives. and create customer-friendly branding, websites, tools, and apps.</p>
<div className="Button_margin">
<button className="btn7 rounded " data-bs-toggle="modal" data-bs-target="#exampleModalToggle"><span className="text-green" >Sign Up Now</span></button>
<a href="javascript:$zopim.livechat.window.show();"><button className="btn7 rounded "><span className="text-green">Live Discuss</span></button></a>
</div>
</div>

<div className='home1socialicon'>
<ul>
    {/* <li>FOLLOW US</li>
    <li></li> */}
    <li><a href="https://twitter.com/ZillaWebsite" rel="noopener noreferrer" target="_blank"><i className="fa fa-twitter"></i></a></li>
    <li><a href="https://www.facebook.com/WebsiteDesignZilla/" rel="noopener noreferrer" target="_blank"><i className="fa fa-facebook"></i></a></li>
    <li><a href="https://www.linkedin.com/company/website-design-zilla" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a></li>
</ul>
</div>

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</div>{/*content*/}
</section>

{/* < Home2 /> */}

< Section2 />
<Cta/>
<SliderHome />
<section className='portfolio Landing_Section_Style' id="work">
    <div className='container'>
      <div className='row '>
        <h3 className="Landing_h3">Portfolio</h3> 
        <div className='col-md-6'><div className='imageBox'><img src={work1} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work2} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work3} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work4} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work5} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work6} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work7} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work8} alt="" /></div></div>
        <div className='col-md-12'><div className='imageBox'><img src={work9} alt="" /></div></div>
      </div>
    </div>
  </section>
  <Price HandleOnOrderNowClick={HandleOnOrderNowClick} />
<Testimonials/>
<Cta/>
{/* <Popup/> */}
<Faq/>
<Colab/>

<Popup2 visibility={isPopUpVisible} handleClose={()=>{
                        setIsPopupVisible(false)
                      }} />
{/* <Project /> */}
{/* <Upnext data={data} /> */}

  {/*cookie popup*/}
  <div className="cookie1" id="c1">
    <p>By browsing this site you consent with our <span onClick={() => navigate('/cookies')}> cookie policy.</span><button onClick={() => f1()}>ACCEPT</button></p>
  </div>
  {/*END-cookie popup*/}

</div>
);}
export default Home;