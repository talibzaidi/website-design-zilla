import React, { useEffect, useState } from 'react';
import Logo from '../images/wdzlogo.png';
import Gohaych2 from '../images/gohaych2.png';
import LogoGh from '../images/LOGOGH.png';
import { NavLink } from "react-router-dom";

const Navbar2 = props => {
const [isNavCollapsed, setIsNavCollapsed] = useState(true);
const [var1, setVar1] = useState();

const handleNavCollapse = () => {
  //console.log('win width', window.innerWidth);
  if(window.innerWidth < 991){
    setIsNavCollapsed(!isNavCollapsed);
  }
}

useEffect(() => {
  window.location.href.indexOf("blog") < -1 ? setVar1(false) : setVar1(true);
},[]);

return(
<nav className="navbar navbar-expand-lg nav1 fixed-top">
<div className="container">

<div className="col-md-3">
{/* <NavLink  className='cursorchange' to="/" spy={true} smooth={false}>

  
<img src={Logo} className="logo_landing" alt="logo"/>
<div className='box'></div>
<div className='hoverhere'><img src={Logo}  alt="logo" /></div>
<div className='theshow'><img src={Gohaych2}  alt="logo" /></div>



</NavLink> */}
<NavLink to="/"><img src={Logo} className="logo_landing" alt="logo"/></NavLink>
</div>
<div className="col-md-10" style={{display: var1 ? 'block' : 'none'}}>
  <button className="custom-toggler navbar-toggler float-end" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}><span className="navbar-toggler-icon"></span></button>
  <div className='clearfix'></div>
  <div className={`${isNavCollapsed ? 'collapse nav2' : 'nav2'} navbar-collapse`} id="navbarsExample09">
  <NavLink to="/" onClick={handleNavCollapse}>Home</NavLink>
  <NavLink to="/about" onClick={handleNavCollapse}>About Us</NavLink>
  <NavLink to="/capabilities" onClick={handleNavCollapse}>Services</NavLink>
    <NavLink to="/ourwork" onClick={handleNavCollapse}>Our Work</NavLink>
    {/* <NavLink to="/blog" onClick={handleNavCollapse}>Blog</NavLink> */}
    <NavLink to="/contact" onClick={handleNavCollapse}>Contact</NavLink>
    <div className='com-md-3'>
    <a href='tel:+17606884491' style={{backgroundSize:'0px'}}><button className='Landing_btn4 cta'>Call Us Now</button></a>
    </div>
    
  </div>
</div>

{/*<div className="col-md-9 col-xs-9" style={{display: var1 ? 'none' : 'block'}}>
  <NavLink to="/"><i className="float-end fa fa-times"></i></NavLink>
</div>*/}


</div>{/*con*/}



</nav>
);
}

export default Navbar2;