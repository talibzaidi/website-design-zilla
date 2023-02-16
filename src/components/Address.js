import React from "react";
import building from '../images/building.jpg';

function Address(){
return(
<section className="contact2 mb70">
<div className="container">
<div className="row">
<div className="col-md-6">
<div className="">
<h6 style={{color:'black'}} className='mb15'>HEAD OFFICE</h6>
  <p>16th and 17th Floors, 515 South Flower Street</p>
  <p> Los Angeles, CA 90071 United States  </p>
</div> 
<div className="">
<h6 style={{color:'black'}} className='mb15'>REGIONAL OFFICE</h6>
  <p>358 Howe St, Vancouver</p>
  <p>BC V6C 3P5, Canada </p>
</div> 
   
</div>{/*col*/}
<div className="col-md-6">
      <div className="frame"><img src={building} alt='building' className="float-end" /></div>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Address;