import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from 'react-router-dom';
import pf1 from '../images/wordpress-logo.jpg'
import pf2 from '../images/platform-logo-img-02.jpg'
import pf3 from '../images/platform-logo-img-03.jpg'
import pf4 from '../images/platform-logo-img-04.jpg'
import pf5 from '../images/platform-logo-img-05.jpg'
import pf6 from '../images/platform-logo-img-06.jpg'
import pf7 from '../images/platform-logo-img-07.jpg'
import pf8 from '../images/platform-logo-img-09.png'
import pf9 from '../images/platform-logo-img-10.jpg'

function SliderHome(){
// let settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 8,
//   slidesToScroll: 8,
//   autoplay: true,
//   loop:true
// };

const navigate = useNavigate();

const navigateportfolio = () => {
    // 👇️ navigate to /home
    navigate('/portfolio');
  };


return(
  
<section className="slider_home">
  
<div className="">
  <div className="slider1-001">
<div className="row">
</div>
</div>
    {/* <Slider {...settings}> */}
   

    <section className="">
	<div className="container" id="logoMarqueeSection">
		<div className="default-content-container flex items-center">
			<div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block">
				<div className="marquee" style={{animationDuration:"60s"}}>
					<a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
          <a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
          <a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
				</div>
        <div className="marquee" style={{animationDuration:"60s"}}>
					<a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
          <a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
          <a target="_blank"><img src={pf1} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf2} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}}  /></a>
					<a target="_blank"><img src={pf3} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf4} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf5} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf6} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf7} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf8} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
					<a target="_blank"><img src={pf9} alt="" title="" className="marqueelogo" style={{width: "auto", maxWidth: "none"}} /></a>
				</div>
			</div>
		</div>
	</div>
</section>


    {/* </Slider> */}

</div>{/*con*/}
</section>
);}
export default SliderHome;




