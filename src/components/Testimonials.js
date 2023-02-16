import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import commas from '../images/commas.jpg';
import testi1 from '../images/testimonial1.png'
import testi2 from '../images/testimonial2.png'
import testi3 from '../images/testimonial3.png'

function Testimonials() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
  return (
<section className="testimonials">
<div className="container">
<h3 className="Landing_h3">Testimonials</h3>
    <Slider {...settings}>
      <div>
      <div className="container">
<div className="row">
<div className="col-md-12">

<div className="aligncenter">

<div class='row'>
            <div class="col-md-6">
          <img src={testi1} alt='commas' style={{ display:'inline'}} className='mb70' />
          </div>
          <div class="col-md-6">
        <p className="large">I was a bit confused when I got to LDH, and the excellent team helped us along the way! We’re more than happy working with them..!</p>
          <h3 className='bold'>Erika Blackwell</h3>
          <p>Owner</p>
          </div>
          </div>

</div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
      </div>
      <div>
      <div className="container">
<div className="row">
<div className="col-md-12">
<div className="aligncenter">

<div class='row'>
            <div class="col-md-6">
          <img src={testi2} alt='commas' style={{ display:'inline'}} className='mb70' />
          </div>
          <div class="col-md-6">
        <p className="large">I was a bit confused when I got to LDH, and the excellent team helped us along the way! We’re more than happy working with them.
        </p>
          <h3 className='bold'>Jessica Williams</h3>
          <p>Owner</p>
          </div>
          </div>

</div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
      </div>
      <div>
      <div className="container">
<div className="row">
<div className="col-md-12">
<div className="aligncenter">
          <div class='row'>
            <div class="col-md-6">
          <img src={testi3} alt='commas' style={{ display:'inline'}} className='mb70' />
          </div>
          <div class="col-md-6" style={{verticalAlign:'middle'}} >
        <p className="large">Received my project on time and provided me proper assistance along the way. Loved working with them! .
        </p>
          <h3 className='bold'>Antionio Moreno</h3>
          <p>Brand owner</p>
          </div>
          </div>

</div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
      </div>
    </Slider>

</div>{/*con*/}
</section>
  )
}

export default Testimonials