import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Footerform from '../components/Footer_form'

function Footer1(){
  const [show, setShow] = useState('block');
    const navigate = useNavigate();


    useEffect(()=>{
      if(window.location.href.indexOf("/landingpage") > -1) {
          setShow('none');
      } else {
          setShow('block');
      }
  })


const navigateToprivacy = () => {
    // 👇️ navigate to /contacts
    navigate('/privacypolicy');
  };

return(
  <div>
  <Footerform/>
<footer style={{display:show}}>
<div className="container">
<div className="row">
<div className="col-md-6 careers">

    <ul>
        
        <li><span onClick={navigateToprivacy}>PrivacyPolicy</span></li>
        <li><span onClick={navigateToprivacy}>Site map</span></li>
        
    </ul>
    <p className="mb30" style={{width: '70%'}}>WDZ - My design agency offers a wide range of design services that are tailored to meet the unique needs of each project.</p>
    <p>Aquired by: <span><h6>Krazy Design Labs L.L.C</h6></span></p>

</div>{/*col*/}
<div className="col-md-6 footeraligned">
  <div className="contact1 mb40" style={{marginTop: '0px'}}>
        <a href="mailto:inquiry@websitedesignzilla.com" rel="noopener noreferrer" target="_blank">inquiry@websitedesignzilla.com</a>
        <br></br>
        {/* <a href="tel:+44 20 7234 3456" rel="noopener noreferrer" target="_blank" >+44 20 7234 3456</a> */}
        </div>
        
        <div className="row">
          <div className="col-md-6">
            <ul className="sm1">
              <li><a href="https://www.facebook.com/WebsiteDesignZilla/">Like us on Facebook</a></li>
              <br/>
              <li><a href="https://twitter.com/ZillaWebsite">Follow us on Twitter</a></li>
            </ul>
          
            </div>
          <div className="col-md-6">
          <ul className="sm2">
              <li><a href="https://www.linkedin.com/company/website-design-zilla">Follow us on Linkedin</a></li>
              <br/>
              <li><a href="https://www.instagram.com/website_design_zilla_official">Follow us on Instagram</a></li>
            </ul>
         </div>
        </div>
        
       
       

</div>{/*col*/}
</div>{/*row*/}
</div>{/*con*/}
</footer>
</div>
);}
export default Footer1;