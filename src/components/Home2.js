import React from 'react';

function Home2(){
return(
<section className="home2">
<div className="container">
<div className="row">
<div className="col-md-12">
<h6 style={{color: 'black' , fontWeight:'400' , fontSize:'22px'}} className='mb15'>SERVICES</h6>
</div>{/*col*/}
<div className="col-md-4">
<h2 className="mb45">Design</h2>


<ul>
    <li>UI/UX Design</li>
    <li>Web and mobile apps Design</li>
    <li>Motion Design</li>
    <li>Graphic Design</li>
    <li>Visual content creation</li>
    <li>Advertising design</li>
</ul>
</div>{/*col*/}
<div className="col-md-4">
<h2 className="mb45">Development</h2>
<ul className='caplist'>
    <li>Websites with 3D</li>
    <li>Complex animations</li>
    <li>eCommerce solutions</li>
    <li>SaaS development</li>
    <li>Cross-platform & hybrid apps</li>
    <li>Mobile apps</li>
</ul>
</div>{/*col*/}
<div className="col-md-4">
<h2 className="mb45">Branding</h2>
<ul>
    <li>Brand Identity</li>
    <li>Brand Guidlines</li>
    <li>Logo Design</li>
    <li>Iconography</li>
    <li>Illustration</li>
    <li>Animation</li>
</ul>
</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</section>
);
}
export default Home2;