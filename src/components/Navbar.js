import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../images/logo.png';
import Gohaych2 from '../images/gohaych2.png';
import LogoGh from '../images/LOGOGH.png';

const Navbar = props => {
  return(
	<nav className="navbar navbar-expand-lg nav1 fixed-top">
  <div className="container">
  {/* <NavLink  className='cursorchange' to="home1" spy={true} smooth={false}>

  
<img src={Logo} className="logo_landing" alt="logo"/>
<div className='box'></div>
<div className='hoverhere'><img src={LogoGh}  alt="logo" /></div>
<div className='theshow'><img src={Gohaych2}  alt="logo" /></div>



</NavLink> */}
<NavLink to="home1"></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		<div className="col-md-3"></div>
		<div className="col-md-9">
		<nav className="float-end nav2">
      <NavLink to="/about">About Us</NavLink>
			<NavLink to="/work">Work</NavLink>
      <NavLink to="/capabilities">Capabilities</NavLink>
			<NavLink to="/contact">Contact</NavLink>
		</nav>
		</div>
    </div>
  </div>
</nav>
);
}
export default Navbar;