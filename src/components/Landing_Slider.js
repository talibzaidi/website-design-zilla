import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pic2 from '../images/preetyPetsLaptop.png'
import Pic3 from '../images/blackH2OLaptop.png'
import TrustPilot from '../images/trustpilot.png'

function Landing_Slider(){
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
return(
<section className="landing_slider">
<div className="container">

<Slider {...settings}>


<div>
<div className="row">
<div className="col-md-6">
  <img src={Pic2} alt='commas' />
</div>
<div className="col-md-6">
  <img src={TrustPilot} alt=''/>
  <p className='Landing_p'>When we do use Gohaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
  <b>Butin Karmon</b>
  <p className="Landing_p">CEO PrettyPets</p>
</div>{/*col*/}
</div>{/*row*/}
</div>

        <div>
          <div className="row">
          <div className="col-md-6">
            <img src={Pic3} alt='commas' />
          </div>
          <div className="col-md-6">
            <img src={TrustPilot} alt=''/>
            <p className='Landing_p'>When we do use Gohaych, it's perfect for us. It's nice knowing there's no stopping along the way and that resonated with our executive team</p>
            <b>Cicely Cerny</b>
            <p className="Landing_p">CEO BlackH2O</p>
          </div>{/*col*/}
          </div>{/*row*/}
        </div>

       

       
        
       
      </Slider>
  
  </div>{/*con*/}
  </section>
  );}
export default Landing_Slider;