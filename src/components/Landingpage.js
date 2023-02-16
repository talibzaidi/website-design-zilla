import React, {useState, useRef} from 'react';
import pic2 from '../images/pic2.png'
import rating from '../images/rating 1.png'
 import GH from '../images/H.png'
import headphone from '../images/icon_headphones.png'
import pickle from '../images/pickleLandscape.png'
import handd from '../images/HandD.png'
import yellowTrim from '../images/yellowTrim.png'
import matcha from '../images/matcha.png'
import PreetyPets from '../images/PreetyPets.png'
import SlateWorks from '../images/SlateWorks.png'
import icon2 from '../images/icon2.png'
import money from '../images/money.png'
import person from '../images/person.png'
import emailjs from '@emailjs/browser';
import Logo from '../images/Logo.png';
 import Gohaych2 from '../images/gohaych2.png';
 import LogoGh from '../images/LOGOGH.png';
 import paperplane from '../images/papper plane.png'
import {Link} from 'react-scroll';
import Landing_Slider from './Landing_Slider';
import '../talib.css';
import BgVideo from '../videos/coverr-student-studying-in-a-coffee-shop-7986-1080p.mp4'

function Landingpage(){
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

const handleNavCollapse = () => {
  //console.log('win width', window.innerWidth);
  if(window.innerWidth < 991){
    setIsNavCollapsed(!isNavCollapsed);
  }
}
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_4j825am', 'template_9015jqh', form.current, 'EWvvlfvjeeqmgyuXU')
    .then((result) => {
        console.log(result.text);
        console.log('Message sent successfully.');
      
    }, (error) => {
        console.log(error.text);
      
});
};
  return(
    <div>
       <div>
      <section className='header_section Landing_Section_Style'>
      <nav className="navbar navbar-expand-lg nav1 fixed-top">
<div className="container">

<div className="col-6">
<Link  className='cursorchange' to="home1" spy={true} smooth={false}>

  
  <img src={Logo} className="logo_landing" alt="logo"/>
  <div className='box'></div>
  <div className='hoverhere'><img src={LogoGh}  alt="logo" /></div>
  <div className='theshow'><img src={Gohaych2}  alt="logo" /></div>
  


</Link>
</div>
<div className="col-6">
  <button className="custom-toggler navbar-toggler float-end" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09"  aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}><span className="navbar-toggler-icon"></span></button>
  <div className='clearfix'></div>
  <div className={`nav2 ${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09">
<Link activeClass="active" to="about" spy={true} smooth={false}>About Us</Link>
 <Link  to="work" spy={true} smooth={false}>Work</Link>
  <Link  to="packages" spy={true} smooth={false}>Packages</Link>
 <Link  to="contact" spy={true} smooth={false}>Contact</Link>
  </div>
</div>
</div>{/*con*/}
</nav>  
</section>
      <section className='landing1 ' id="home1">
        
        <video src={BgVideo} autoPlay loop muted />
        <div className="content">
        <div className='container'>
         
          <div className='row'>
              <div className='col-md-6'>
                <h1 className='landing_h1'>From £399, we offer exclusive web experiences</h1>
                <p className='landing_large_p' style={{color:'#FFF'}}>The best value for seasoned web designers and developers. Create a custom website on a budget.</p>
                <ul>
                <li style={{color:'#FFF'}}><i class="fa fa-check icons"> </i> 05 Page Website</li>
                <li style={{color:'#FFF'}}><i class="fa fa-check icons"> </i> Personalised Website Design Layout</li>
                <li style={{color:'#FFF'}}><i class="fa fa-check icons"> </i> Adaptive and Cross-platform</li>
                <li style={{color:'#FFF'}}><i class="fa fa-check icons"> </i> One-time payment: no ongoing fees</li>
                </ul>
                <img src={rating} alt=''/>
              </div>
              <div className='col-md-6'>
              <div className='contactform_section'>
                <p className='landing_large_p'>Submit Enquiry & Grab</p>
                <h2 className="Landing_h2">50% Discount</h2>


                <form ref={form} onSubmit={sendEmail}>
                <div className='form_div'>
            <div className='row'>
            <div className='col-md-12'>
                <div className="form-floating">
                    <input type="text" id="floatingInput"  className="" name="from_name" required />
                    <label htmlFor="floatingInput">Your name</label>
                    <div class="after"></div>
                    
                </div>
            </div>
        
           
         
            <div className='col-md-12'>
                <div className="form-floating">
                    <input type="text" id="floatingInput2"  className="" name="from_name" required />
                    <label htmlFor="floatingInput">Your email</label>
                    <div class="after"></div>
                    
                </div>
            </div>
            <div className='amazing'>
              <div className='row'>
            <div className='col-md-4'>
                <div className="form-floating">
                    <select className="" name="from_code" style={{fontSize:'22px', fontWeight:'400'}}>
                    
                    <option data-countrycode="GB" value="44">UK (+44)</option>
                              <option data-countrycode="US" value="1" >USA (+1)</option>
                              <optgroup className='landing_large_p' label="Other countries">
                                 <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                                 <option data-countrycode="AD" value="376">Andorra (+376)</option>
                                 <option data-countrycode="AO" value="244">Angola (+244)</option>
                                 <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
                                 <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                 <option data-countrycode="AR" value="54">Argentina (+54)</option>
                                 <option data-countrycode="AM" value="374">Armenia (+374)</option>
                                 <option data-countrycode="AW" value="297">Aruba (+297)</option>
                                 <option data-countrycode="AU" value="61">Australia (+61)</option>
                                 <option data-countrycode="AT" value="43">Austria (+43)</option>
                                 <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
                                 <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
                                 <option data-countrycode="BH" value="973">Bahrain (+973)</option>
                                 <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
                                 <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
                                 <option data-countrycode="BY" value="375">Belarus (+375)</option>
                                 <option data-countrycode="BE" value="32">Belgium (+32)</option>
                                 <option data-countrycode="BZ" value="501">Belize (+501)</option>
                                 <option data-countrycode="BJ" value="229">Benin (+229)</option>
                                 <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
                                 <option data-countrycode="BT" value="975">Bhutan (+975)</option>
                                 <option data-countrycode="BO" value="591">Bolivia (+591)</option>
                                 <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                 <option data-countrycode="BW" value="267">Botswana (+267)</option>
                                 <option data-countrycode="BR" value="55">Brazil (+55)</option>
                                 <option data-countrycode="BN" value="673">Brunei (+673)</option>
                                 <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
                                 <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
                                 <option data-countrycode="BI" value="257">Burundi (+257)</option>
                                 <option data-countrycode="KH" value="855">Cambodia (+855)</option>
                                 <option data-countrycode="CM" value="237">Cameroon (+237)</option>
                                 <option data-countrycode="CA" value="1">Canada (+1)</option>
                                 <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
                                 <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
                                 <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
                                 <option data-countrycode="CL" value="56">Chile (+56)</option>
                                 <option data-countrycode="CN" value="86">China (+86)</option>
                                 <option data-countrycode="CO" value="57">Colombia (+57)</option>
                                 <option data-countrycode="KM" value="269">Comoros (+269)</option>
                                 <option data-countrycode="CG" value="242">Congo (+242)</option>
                                 <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
                                 <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
                                 <option data-countrycode="HR" value="385">Croatia (+385)</option>
                                 <option data-countrycode="CU" value="53">Cuba (+53)</option>
                                 <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
                                 <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
                                 <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
                                 <option data-countrycode="DK" value="45">Denmark (+45)</option>
                                 <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
                                 <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
                                 <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
                                 <option data-countrycode="EC" value="593">Ecuador (+593)</option>
                                 <option data-countrycode="EG" value="20">Egypt (+20)</option>
                                 <option data-countrycode="SV" value="503">El Salvador (+503)</option>
                                 <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
                                 <option data-countrycode="ER" value="291">Eritrea (+291)</option>
                                 <option data-countrycode="EE" value="372">Estonia (+372)</option>
                                 <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
                                 <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
                                 <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
                                 <option data-countrycode="FJ" value="679">Fiji (+679)</option>
                                 <option data-countrycode="FI" value="358">Finland (+358)</option>
                                 <option data-countrycode="FR" value="33">France (+33)</option>
                                 <option data-countrycode="GF" value="594">French Guiana (+594)</option>
                                 <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
                                 <option data-countrycode="GA" value="241">Gabon (+241)</option>
                                 <option data-countrycode="GM" value="220">Gambia (+220)</option>
                                 <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
                                 <option data-countrycode="DE" value="49">Germany (+49)</option>
                                 <option data-countrycode="GH" value="233">Ghana (+233)</option>
                                 <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
                                 <option data-countrycode="GR" value="30">Greece (+30)</option>
                                 <option data-countrycode="GL" value="299">Greenland (+299)</option>
                                 <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
                                 <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
                                 <option data-countrycode="GU" value="671">Guam (+671)</option>
                                 <option data-countrycode="GT" value="502">Guatemala (+502)</option>
                                 <option data-countrycode="GN" value="224">Guinea (+224)</option>
                                 <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
                                 <option data-countrycode="GY" value="592">Guyana (+592)</option>
                                 <option data-countrycode="HT" value="509">Haiti (+509)</option>
                                 <option data-countrycode="HN" value="504">Honduras (+504)</option>
                                 <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
                                 <option data-countrycode="HU" value="36">Hungary (+36)</option>
                                 <option data-countrycode="IS" value="354">Iceland (+354)</option>
                                 <option data-countrycode="IN" value="91">India (+91)</option>
                                 <option data-countrycode="ID" value="62">Indonesia (+62)</option>
                                 <option data-countrycode="IR" value="98">Iran (+98)</option>
                                 <option data-countrycode="IQ" value="964">Iraq (+964)</option>
                                 <option data-countrycode="IE" value="353">Ireland (+353)</option>
                                 <option data-countrycode="IL" value="972">Israel (+972)</option>
                                 <option data-countrycode="IT" value="39">Italy (+39)</option>
                                 <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
                                 <option data-countrycode="JP" value="81">Japan (+81)</option>
                                 <option data-countrycode="JO" value="962">Jordan (+962)</option>
                                 <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
                                 <option data-countrycode="KE" value="254">Kenya (+254)</option>
                                 <option data-countrycode="KI" value="686">Kiribati (+686)</option>
                                 <option data-countrycode="KP" value="850">Korea North (+850)</option>
                                 <option data-countrycode="KR" value="82">Korea South (+82)</option>
                                 <option data-countrycode="KW" value="965">Kuwait (+965)</option>
                                 <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
                                 <option data-countrycode="LA" value="856">Laos (+856)</option>
                                 <option data-countrycode="LV" value="371">Latvia (+371)</option>
                                 <option data-countrycode="LB" value="961">Lebanon (+961)</option>
                                 <option data-countrycode="LS" value="266">Lesotho (+266)</option>
                                 <option data-countrycode="LR" value="231">Liberia (+231)</option>
                                 <option data-countrycode="LY" value="218">Libya (+218)</option>
                                 <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
                                 <option data-countrycode="LT" value="370">Lithuania (+370)</option>
                                 <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
                                 <option data-countrycode="MO" value="853">Macao (+853)</option>
                                 <option data-countrycode="MK" value="389">Macedonia (+389)</option>
                                 <option data-countrycode="MG" value="261">Madagascar (+261)</option>
                                 <option data-countrycode="MW" value="265">Malawi (+265)</option>
                                 <option data-countrycode="MY" value="60">Malaysia (+60)</option>
                                 <option data-countrycode="MV" value="960">Maldives (+960)</option>
                                 <option data-countrycode="ML" value="223">Mali (+223)</option>
                                 <option data-countrycode="MT" value="356">Malta (+356)</option>
                                 <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
                                 <option data-countrycode="MQ" value="596">Martinique (+596)</option>
                                 <option data-countrycode="MR" value="222">Mauritania (+222)</option>
                                 <option data-countrycode="YT" value="269">Mayotte (+269)</option>
                                 <option data-countrycode="MX" value="52">Mexico (+52)</option>
                                 <option data-countrycode="FM" value="691">Micronesia (+691)</option>
                                 <option data-countrycode="MD" value="373">Moldova (+373)</option>
                                 <option data-countrycode="MC" value="377">Monaco (+377)</option>
                                 <option data-countrycode="MN" value="976">Mongolia (+976)</option>
                                 <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
                                 <option data-countrycode="MA" value="212">Morocco (+212)</option>
                                 <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
                                 <option data-countrycode="MN" value="95">Myanmar (+95)</option>
                                 <option data-countrycode="NA" value="264">Namibia (+264)</option>
                                 <option data-countrycode="NR" value="674">Nauru (+674)</option>
                                 <option data-countrycode="NP" value="977">Nepal (+977)</option>
                                 <option data-countrycode="NL" value="31">Netherlands (+31)</option>
                                 <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
                                 <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
                                 <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
                                 <option data-countrycode="NE" value="227">Niger (+227)</option>
                                 <option data-countrycode="NG" value="234">Nigeria (+234)</option>
                                 <option data-countrycode="NU" value="683">Niue (+683)</option>
                                 <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
                                 <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
                                 <option data-countrycode="NO" value="47">Norway (+47)</option>
                                 <option data-countrycode="OM" value="968">Oman (+968)</option>
                                 <option data-countrycode="PW" value="680">Palau (+680)</option>
                                 <option data-countrycode="PA" value="507">Panama (+507)</option>
                                 <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
                                 <option data-countrycode="PY" value="595">Paraguay (+595)</option>
                                 <option data-countrycode="PE" value="51">Peru (+51)</option>
                                 <option data-countrycode="PH" value="63">Philippines (+63)</option>
                                 <option data-countrycode="PL" value="48">Poland (+48)</option>
                                 <option data-countrycode="PT" value="351">Portugal (+351)</option>
                                 <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
                                 <option data-countrycode="QA" value="974">Qatar (+974)</option>
                                 <option data-countrycode="RE" value="262">Reunion (+262)</option>
                                 <option data-countrycode="RO" value="40">Romania (+40)</option>
                                 <option data-countrycode="RU" value="7">Russia (+7)</option>
                                 <option data-countrycode="RW" value="250">Rwanda (+250)</option>
                                 <option data-countrycode="SM" value="378">San Marino (+378)</option>
                                 <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                 <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
                                 <option data-countrycode="SN" value="221">Senegal (+221)</option>
                                 <option data-countrycode="CS" value="381">Serbia (+381)</option>
                                 <option data-countrycode="SC" value="248">Seychelles (+248)</option>
                                 <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
                                 <option data-countrycode="SG" value="65">Singapore (+65)</option>
                                 <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
                                 <option data-countrycode="SI" value="386">Slovenia (+386)</option>
                                 <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
                                 <option data-countrycode="SO" value="252">Somalia (+252)</option>
                                 <option data-countrycode="ZA" value="27">South Africa (+27)</option>
                                 <option data-countrycode="ES" value="34">Spain (+34)</option>
                                 <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
                                 <option data-countrycode="SH" value="290">St. Helena (+290)</option>
                                 <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
                                 <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
                                 <option data-countrycode="SD" value="249">Sudan (+249)</option>
                                 <option data-countrycode="SR" value="597">Suriname (+597)</option>
                                 <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
                                 <option data-countrycode="SE" value="46">Sweden (+46)</option>
                                 <option data-countrycode="CH" value="41">Switzerland (+41)</option>
                                 <option data-countrycode="SI" value="963">Syria (+963)</option>
                                 <option data-countrycode="TW" value="886">Taiwan (+886)</option>
                                 <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
                                 <option data-countrycode="TH" value="66">Thailand (+66)</option>
                                 <option data-countrycode="TG" value="228">Togo (+228)</option>
                                 <option data-countrycode="TO" value="676">Tonga (+676)</option>
                                 <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                 <option data-countrycode="TN" value="216">Tunisia (+216)</option>
                                 <option data-countrycode="TR" value="90">Turkey (+90)</option>
                                 <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
                                 <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
                                 <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                 <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
                                 <option data-countrycode="UG" value="256">Uganda (+256)</option>
                                 <option data-countrycode="UA" value="380">Ukraine (+380)</option>
                                 <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
                                 <option data-countrycode="UY" value="598">Uruguay (+598)</option>
                                 <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
                                 <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
                                 <option data-countrycode="VA" value="379">Vatican City (+379)</option>
                                 <option data-countrycode="VE" value="58">Venezuela (+58)</option>
                                 <option data-countrycode="VN" value="84">Vietnam (+84)</option>
                                 <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
                                 <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
                                 <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                 <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
                                 <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
                                 <option data-countrycode="ZM" value="260">Zambia (+260)</option>
                                 <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
                              </optgroup>
                    </select>
                    <div class="after"></div>
                   
                </div>
              
            </div>
            <div className='col-md-8'>
                <div className="form-floating">
                    {/* <input className="form-control" id="floatingInput3" name="from_number" placeholder='Tell us about your project'   /> */}

                    <input type="text" id="floatingInput3"  className="" name="from_name" required />
                    <label htmlFor="floatingInput">Phone number</label>
                    <div class="after"></div>

                    
                </div>
               
            </div>
            </div>
            </div>
            </div>
            </div>






            
            
            <button type="submit" className='landing_btn6' value="send" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Submit Your Request</button>
            <p className="Landing_p">Have a custom project? <a href="#contact" className='effect1_landingpage'>Talk to us</a></p>
        </form>
        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      {/* <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalToggleLabel">DotOxygen</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div> */}
      <div class="modal-body">
      <div className='row'>
        <div className='col-md-6 pop_up_class_image'>
          <img src={paperplane} alt='' />
        </div>
        <div className='col-md-6 pop_class_content'>
          <h3 className=''>Thank you</h3>
          <p className='landing_p'>Your 50% discount is on its way; you'll hear from us shortly.</p>
          <button class="landing_btn6" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">OK</button>
        </div>
      </div>
      </div>
      {/* <div class="modal-footer">

        
      </div>

      </div> */}
    </div>
  </div>
</div>
        </div>
             
              </div>
          </div>
          </div>
        </div>
      </section>
      <section id="about" className='about Landing_Section_Style'>
      <div className='container' >
        <div className='row'>
          <div className='col-md-6'>
            <div ></div>
            <h3 className="Landing_h3">Website Design Development</h3>
            <p className="Landing_p">We have been building pristine websites and providing web solutions that are head and shoulders above the competition since the day we were founded. We are a leading provider of web design services, and as such, we work with a team of exceptionally talented web designers who are well-focused and have experience with a range of web development platforms, including React and Custom WordPress.</p>
          </div>
          <div className='col-md-6'>
            <div className='aboutimage'> <img src={pic2} alt='' /></div>
            
           
          </div>
        </div>
      </div>
      </section>
      <section className='portfolio Landing_Section_Style' id="work">
        <div className='container'>
          <div className='row '>
            <h3 className="Landing_h3">Portfolio</h3>
            
            <div className='col-md-6'><div className='imageBox'><img src={pickle} alt="" /></div></div>
            <div className='col-md-6'><div className='imageBox'><img src={handd} alt="" /></div></div>
            <div className='col-md-6'><div className='imageBox'><img src={yellowTrim} alt="" /></div></div>
            <div className='col-md-6'><div className='imageBox'><img src={matcha} alt="" /></div></div>
            <div className='col-md-6'><div className='imageBox'><img src={PreetyPets} alt="" /></div></div>
            <div className='col-md-6'><div className='imageBox'><img src={SlateWorks} alt="" /></div></div>
          </div>
        </div>
      </section>

    

      <section id="packages">
        <div className='container'>
          <h3 className="Landing_h3">Website Development Packages</h3>
          <p className='landing_large_p'>With Regard To Businesses Worldwide</p>
          <p className="Landing_p">Thanks to our family of WordPress website designers and builders, eCommerce website designers, and pretty much any other website designers, we can compete with some of the top website design and development companies online. Do you need something special, like a custom WordPress website design? You've found it. To handle your project, we have a sizable team of WordPress website designers. Our WordPress website designers also manage website maintenance after the project is complete. Our web design and development teams have very different perspectives when it comes to producing the best web interfaces. To discuss your website design or development project, get in touch with us immediately.</p>
        </div>
      </section>

      <section className='pricing Landing_Section_Style' id="pricing">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='pricebox'>
                <h6 className="landing_h6">Basic website package</h6>
                <h2 className="Landing_h2">£399 <sub className='subtext'>£799</sub></h2>
                <ul>
                <li>10 Page Website</li>
                <li>Website Design with Custom Layout</li>
                <li>Favicon Design</li>
                <li>Request/Contact Form</li>
                <li>Single Banner Design</li>
                <li>Compatible across browsers</li>
                <li>Mobile Friendly Responsive</li>
                <li>W3C-certified HTML in its entirety</li>
                <li>48-Hour Website Initial Concepts</li>
                <li>Deployment and Design in its entirety</li>
                <li>100% Satisfaction Guarantee</li>
                <li>A full refund is assured.</li>
                <li>One Time Payment No Monthly or Hidden Charges</li>
                </ul>
               <a href="#contact"><button className='landing_btn2'>Start Project</button></a>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='pricebox'>
                <h6 className="landing_h6">Startup Website Package</h6>
                <h2 className="Landing_h2">£649 <sub className='subtext'>£1,299</sub></h2>
                <div className='scroller'>
                <ul>
                        <li>10-20  Page Website</li>
                        <li>Website Design with Custom Layout</li>
                        <li>Logo Design</li>
                        <li>Favicon Design</li>
                        <li>FREE Domain & Hosting</li>
                        <li>Request/Contact Form</li>
                        <li>Single Banner Design</li>
                        <li>Compatible across browsers</li>
                        <li>Mobile Friendly Responsive</li>
                        <li>W3C-certified HTML in its entirety</li>
                        <li>48-Hour Website Initial Concepts</li>
                        <li>Deployment and Design in its entirety</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>A full refund is assured.</li>
                        <li>One Time Payment No Monthly or Hidden Charges</li>
                </ul>
                </div>
                <a href="#contact"><button className='landing_btn2'>Start Project</button></a>
                
              </div>
            </div>
            <div className='col-md-6'>
              <div className='pricebox'>
                <h6 className="landing_h6">Professional Website Package</h6>
                <h2 className="Landing_h2">£1,049 <sub className='subtext'>£2,099</sub></h2>
                <div className='scroller'>
                <ul>
                    <li>Unlimited Page Website</li>
                    <li>Website Design with Custom Layout</li>
                    <li>Custom, interactive & Dynamic Web Design</li>
                    <li>Logo Design</li>
                    <li>Favicon Design</li>
                    <li>FREE Domain & Hosting</li>
                    <li>Request/Contact Form</li>
                   <li> Interactive Slider Banner</li>
                    <li>Compatible across browsers</li>
                    <li>Mobile Friendly Responsive</li>
                    <li>W3C-certified HTML in its entirety</li>
                    <li>48-Hour Website Initial Concepts</li>
                   <li> Dedicated Project Manager</li>
                    <li>Deployment and Design in its entirety</li>
                    <li>100% Satisfaction Guarantee</li>
                   <li> A full refund is assured.</li>
                    <li>One Time Payment No Monthly or Hidden Charges</li>
                </ul>
                </div>
               <a href="#contact"><button className='landing_btn2'>Start Project</button></a>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='pricebox'>
                <h6 className="landing_h6">Corporate Website Package</h6>
                <h2 className="Landing_h2">£2,049 <sub className='subtext'>£4,099</sub></h2>
                <div className='scroller'>
                <ul>
                    <li>Unlimited Page Website</li>
                    <li>Website Design with Custom Layout</li>
                    <li>Custom, interactive & Dynamic Web Design</li>
                    <li>Logo Design</li>
                    <li>Favicon Design</li>
                    <li>FREE Domain & Hosting</li>
                   <li> Request/Contact Form</li>
                    <li>Interactive Slider Banner</li>
                    <li>Multilingual</li>
                    <li>Signup Area (For Newslwtters, Offers etc.)</li>
                    <li>Google Friendly Sitemap</li>
                    <li>Google Search Console Submission</li>
                    <li>FREE Website Mentainance (6 months)</li>
                   <li> Compatible across browsers</li>
                   <li> Mobile Friendly Responsive</li>
                   <li> W3C-certified HTML in its entirety</li>
                    <li>Online Payment Integration</li>
                   <li> 48-Hour Website Initial Concepts</li>
                    <li>Dedicated Project Manager</li>
                    <li>Deployment and Design in its entirety</li>
                   <li> 100% Satisfaction Guarantee</li>
                    <li>A full refund is assured.</li>
                    <li>One Time Payment No Monthly or Hidden Charges</li>
               
                </ul>
                </div>
               <a href="#contact"><button className='landing_btn2'>Start Project</button></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='nopadding Landing_Section_Style'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h3 className="Landing_h3">Providing Cutting-edge Technology With a Modern Design Approach</h3>
              <p  className="Landing_p">Dedicated to offering services in the fields of custom website design, brand development, mobile application development, digital marketing, e-commerce, and SEO services, <b>GoHaych</b> is a reputable design and development company in the UK.</p><p className='Landing_p' > Our talented team, which has collective experience in all creative facets of contemporary style, views each project as an opportunity to produce a design of value and lasting quality. To generate impressive exposure for the company's products or services, an initial concept is used in the process. Our years of experience in offering professional website design services and other digital solutions have given us the confidence to confidently offer solutions that are of the highest calibre and at a competitive price.</p>
              <p className="landing_large_p">Strengthening Brand Performance</p>
              <p className='Landing_p'>We are committed to providing expert website designs that complement the culture, guiding principles, and distinctiveness of your brand. We use a strategic methodology to create distinctive brand identities. working with the best contractors and architects in the industry. We create stunning designs that can stand on their own.</p>
           
            </div>
            <div className='col-md-6'>
              <div className='hehe'>
             <img src={GH} alt="" className='goright' />
             </div>
             <p className="landing_large_p">The Best Value for New Businesses and Organisations</p>
              <p className='Landing_p'>This logo and website design package offers exceptional value for companies looking to establish an online presence and widen their customer base using cutting-edge digital solutions. Utilise our powerful combo package, which is adapted to your needs.
                </p>
             
            </div>
          </div>
        </div>
      </section>
      <section className='tan Landing_Section_Style'>
        <div className='container'>
          <div className='row'>

            <div className='col-md-12'>
              <div className='allcenter'>
              <h3 className="Landing_h3">Helping Brands Out perform With Custom Website Design</h3>
              <p  className="Landing_p">We are committed towards providing professional website designs tailored to your brand’s culture, core values & distinction. We take a strategic approach to creating unique brand identities. Working with the best designers & builders in the industry. We create immaculate designs that speak for themselves.</p>
              <div className='row'>
                <div className='col-md-3'><img src={headphone} alt=''/> <p className='landing_large_p'>Constant Client Coordination</p></div>
                <div className='col-md-3'><img src={icon2} alt=''/> <p className='landing_large_p'>Supreme Customer Satisfaction</p></div>
                <div className='col-md-3'><img src={money} alt=''/> <p className='landing_large_p'>Secure Money Back Guarantee</p></div>
                <div className='col-md-3'><img src={person} alt=''/> <p className='landing_large_p'>Industry Proven Professionals</p></div>
              
              </div>
              

              </div>

            </div>
          </div>
        </div>
      </section>

         
<Landing_Slider />


      <section className='section9 DarkBg'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <h2 className="Landing_h2" style={{color:'white'}}>Have a project in mind?</h2>
              <p  className="Landing_p" style={{color:'white'}}>Bring it on!</p>
            </div>
            <div className='col-md-4'>
            <button type="submit" className='Landing_btn4' >Submit Your Request</button>
            </div>
          </div>
        </div>
      </section>
      <section className='Landing_Section_Style'>
      <div className='container' id="contact">
        <div className='landing_footer'>
            <div className='footer1area'>
        <div className='allcenter'>
            <h3 className="Landing_h3">Get Digital Consulting Services</h3>
            <p  className="Landing_p">We can set up a meeting for you and us to talk about an upcoming project in a number of ways. Call us or fill out the form if you're interested in doing so, and we'll put you in touch with the right person.</p>
        </div>
        <form ref={form} onSubmit={sendEmail} >
            <div className='row'>
                <div className='col-md-4'>
                     <div className="form-floating">
                    

                    <input type="text" id="floatingInput"  className="" name="from_name" required />
                    <label htmlFor="floatingInput">Your name</label>
                    <div class="after"></div>
                </div>
                </div>
                <div className='col-md-4'>
                <div className="form-floating">
                    <input type="text" id="floatingInput"  className="" name="from_email" required />
                    <label htmlFor="floatingInput">Your email</label>
                    <div class="after"></div>
                </div>
                </div>
                <div className='col-md-4'>
                    <div className='amazing'>
                    <div className='row'>
                        <div className='col-md-4'>
                        <div className="form-floating">
                        <select className="" name="from_code" style={{fontSize:'22px', fontWeight:'400'}}>
                    
                    <option data-countrycode="GB" value="44">UK (+44)</option>
                              <option data-countrycode="US" value="1" >USA (+1)</option>
                              <optgroup className='landing_large_p' label="Other countries">
                                 <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                                 <option data-countrycode="AD" value="376">Andorra (+376)</option>
                                 <option data-countrycode="AO" value="244">Angola (+244)</option>
                                 <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
                                 <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                                 <option data-countrycode="AR" value="54">Argentina (+54)</option>
                                 <option data-countrycode="AM" value="374">Armenia (+374)</option>
                                 <option data-countrycode="AW" value="297">Aruba (+297)</option>
                                 <option data-countrycode="AU" value="61">Australia (+61)</option>
                                 <option data-countrycode="AT" value="43">Austria (+43)</option>
                                 <option data-countrycode="AZ" value="994">Azerbaijan (+994)</option>
                                 <option data-countrycode="BS" value="1242">Bahamas (+1242)</option>
                                 <option data-countrycode="BH" value="973">Bahrain (+973)</option>
                                 <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
                                 <option data-countrycode="BB" value="1246">Barbados (+1246)</option>
                                 <option data-countrycode="BY" value="375">Belarus (+375)</option>
                                 <option data-countrycode="BE" value="32">Belgium (+32)</option>
                                 <option data-countrycode="BZ" value="501">Belize (+501)</option>
                                 <option data-countrycode="BJ" value="229">Benin (+229)</option>
                                 <option data-countrycode="BM" value="1441">Bermuda (+1441)</option>
                                 <option data-countrycode="BT" value="975">Bhutan (+975)</option>
                                 <option data-countrycode="BO" value="591">Bolivia (+591)</option>
                                 <option data-countrycode="BA" value="387">Bosnia Herzegovina (+387)</option>
                                 <option data-countrycode="BW" value="267">Botswana (+267)</option>
                                 <option data-countrycode="BR" value="55">Brazil (+55)</option>
                                 <option data-countrycode="BN" value="673">Brunei (+673)</option>
                                 <option data-countrycode="BG" value="359">Bulgaria (+359)</option>
                                 <option data-countrycode="BF" value="226">Burkina Faso (+226)</option>
                                 <option data-countrycode="BI" value="257">Burundi (+257)</option>
                                 <option data-countrycode="KH" value="855">Cambodia (+855)</option>
                                 <option data-countrycode="CM" value="237">Cameroon (+237)</option>
                                 <option data-countrycode="CA" value="1">Canada (+1)</option>
                                 <option data-countrycode="CV" value="238">Cape Verde Islands (+238)</option>
                                 <option data-countrycode="KY" value="1345">Cayman Islands (+1345)</option>
                                 <option data-countrycode="CF" value="236">Central African Republic (+236)</option>
                                 <option data-countrycode="CL" value="56">Chile (+56)</option>
                                 <option data-countrycode="CN" value="86">China (+86)</option>
                                 <option data-countrycode="CO" value="57">Colombia (+57)</option>
                                 <option data-countrycode="KM" value="269">Comoros (+269)</option>
                                 <option data-countrycode="CG" value="242">Congo (+242)</option>
                                 <option data-countrycode="CK" value="682">Cook Islands (+682)</option>
                                 <option data-countrycode="CR" value="506">Costa Rica (+506)</option>
                                 <option data-countrycode="HR" value="385">Croatia (+385)</option>
                                 <option data-countrycode="CU" value="53">Cuba (+53)</option>
                                 <option data-countrycode="CY" value="90392">Cyprus North (+90392)</option>
                                 <option data-countrycode="CY" value="357">Cyprus South (+357)</option>
                                 <option data-countrycode="CZ" value="42">Czech Republic (+42)</option>
                                 <option data-countrycode="DK" value="45">Denmark (+45)</option>
                                 <option data-countrycode="DJ" value="253">Djibouti (+253)</option>
                                 <option data-countrycode="DM" value="1809">Dominica (+1809)</option>
                                 <option data-countrycode="DO" value="1809">Dominican Republic (+1809)</option>
                                 <option data-countrycode="EC" value="593">Ecuador (+593)</option>
                                 <option data-countrycode="EG" value="20">Egypt (+20)</option>
                                 <option data-countrycode="SV" value="503">El Salvador (+503)</option>
                                 <option data-countrycode="GQ" value="240">Equatorial Guinea (+240)</option>
                                 <option data-countrycode="ER" value="291">Eritrea (+291)</option>
                                 <option data-countrycode="EE" value="372">Estonia (+372)</option>
                                 <option data-countrycode="ET" value="251">Ethiopia (+251)</option>
                                 <option data-countrycode="FK" value="500">Falkland Islands (+500)</option>
                                 <option data-countrycode="FO" value="298">Faroe Islands (+298)</option>
                                 <option data-countrycode="FJ" value="679">Fiji (+679)</option>
                                 <option data-countrycode="FI" value="358">Finland (+358)</option>
                                 <option data-countrycode="FR" value="33">France (+33)</option>
                                 <option data-countrycode="GF" value="594">French Guiana (+594)</option>
                                 <option data-countrycode="PF" value="689">French Polynesia (+689)</option>
                                 <option data-countrycode="GA" value="241">Gabon (+241)</option>
                                 <option data-countrycode="GM" value="220">Gambia (+220)</option>
                                 <option data-countrycode="GE" value="7880">Georgia (+7880)</option>
                                 <option data-countrycode="DE" value="49">Germany (+49)</option>
                                 <option data-countrycode="GH" value="233">Ghana (+233)</option>
                                 <option data-countrycode="GI" value="350">Gibraltar (+350)</option>
                                 <option data-countrycode="GR" value="30">Greece (+30)</option>
                                 <option data-countrycode="GL" value="299">Greenland (+299)</option>
                                 <option data-countrycode="GD" value="1473">Grenada (+1473)</option>
                                 <option data-countrycode="GP" value="590">Guadeloupe (+590)</option>
                                 <option data-countrycode="GU" value="671">Guam (+671)</option>
                                 <option data-countrycode="GT" value="502">Guatemala (+502)</option>
                                 <option data-countrycode="GN" value="224">Guinea (+224)</option>
                                 <option data-countrycode="GW" value="245">Guinea - Bissau (+245)</option>
                                 <option data-countrycode="GY" value="592">Guyana (+592)</option>
                                 <option data-countrycode="HT" value="509">Haiti (+509)</option>
                                 <option data-countrycode="HN" value="504">Honduras (+504)</option>
                                 <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
                                 <option data-countrycode="HU" value="36">Hungary (+36)</option>
                                 <option data-countrycode="IS" value="354">Iceland (+354)</option>
                                 <option data-countrycode="IN" value="91">India (+91)</option>
                                 <option data-countrycode="ID" value="62">Indonesia (+62)</option>
                                 <option data-countrycode="IR" value="98">Iran (+98)</option>
                                 <option data-countrycode="IQ" value="964">Iraq (+964)</option>
                                 <option data-countrycode="IE" value="353">Ireland (+353)</option>
                                 <option data-countrycode="IL" value="972">Israel (+972)</option>
                                 <option data-countrycode="IT" value="39">Italy (+39)</option>
                                 <option data-countrycode="JM" value="1876">Jamaica (+1876)</option>
                                 <option data-countrycode="JP" value="81">Japan (+81)</option>
                                 <option data-countrycode="JO" value="962">Jordan (+962)</option>
                                 <option data-countrycode="KZ" value="7">Kazakhstan (+7)</option>
                                 <option data-countrycode="KE" value="254">Kenya (+254)</option>
                                 <option data-countrycode="KI" value="686">Kiribati (+686)</option>
                                 <option data-countrycode="KP" value="850">Korea North (+850)</option>
                                 <option data-countrycode="KR" value="82">Korea South (+82)</option>
                                 <option data-countrycode="KW" value="965">Kuwait (+965)</option>
                                 <option data-countrycode="KG" value="996">Kyrgyzstan (+996)</option>
                                 <option data-countrycode="LA" value="856">Laos (+856)</option>
                                 <option data-countrycode="LV" value="371">Latvia (+371)</option>
                                 <option data-countrycode="LB" value="961">Lebanon (+961)</option>
                                 <option data-countrycode="LS" value="266">Lesotho (+266)</option>
                                 <option data-countrycode="LR" value="231">Liberia (+231)</option>
                                 <option data-countrycode="LY" value="218">Libya (+218)</option>
                                 <option data-countrycode="LI" value="417">Liechtenstein (+417)</option>
                                 <option data-countrycode="LT" value="370">Lithuania (+370)</option>
                                 <option data-countrycode="LU" value="352">Luxembourg (+352)</option>
                                 <option data-countrycode="MO" value="853">Macao (+853)</option>
                                 <option data-countrycode="MK" value="389">Macedonia (+389)</option>
                                 <option data-countrycode="MG" value="261">Madagascar (+261)</option>
                                 <option data-countrycode="MW" value="265">Malawi (+265)</option>
                                 <option data-countrycode="MY" value="60">Malaysia (+60)</option>
                                 <option data-countrycode="MV" value="960">Maldives (+960)</option>
                                 <option data-countrycode="ML" value="223">Mali (+223)</option>
                                 <option data-countrycode="MT" value="356">Malta (+356)</option>
                                 <option data-countrycode="MH" value="692">Marshall Islands (+692)</option>
                                 <option data-countrycode="MQ" value="596">Martinique (+596)</option>
                                 <option data-countrycode="MR" value="222">Mauritania (+222)</option>
                                 <option data-countrycode="YT" value="269">Mayotte (+269)</option>
                                 <option data-countrycode="MX" value="52">Mexico (+52)</option>
                                 <option data-countrycode="FM" value="691">Micronesia (+691)</option>
                                 <option data-countrycode="MD" value="373">Moldova (+373)</option>
                                 <option data-countrycode="MC" value="377">Monaco (+377)</option>
                                 <option data-countrycode="MN" value="976">Mongolia (+976)</option>
                                 <option data-countrycode="MS" value="1664">Montserrat (+1664)</option>
                                 <option data-countrycode="MA" value="212">Morocco (+212)</option>
                                 <option data-countrycode="MZ" value="258">Mozambique (+258)</option>
                                 <option data-countrycode="MN" value="95">Myanmar (+95)</option>
                                 <option data-countrycode="NA" value="264">Namibia (+264)</option>
                                 <option data-countrycode="NR" value="674">Nauru (+674)</option>
                                 <option data-countrycode="NP" value="977">Nepal (+977)</option>
                                 <option data-countrycode="NL" value="31">Netherlands (+31)</option>
                                 <option data-countrycode="NC" value="687">New Caledonia (+687)</option>
                                 <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
                                 <option data-countrycode="NI" value="505">Nicaragua (+505)</option>
                                 <option data-countrycode="NE" value="227">Niger (+227)</option>
                                 <option data-countrycode="NG" value="234">Nigeria (+234)</option>
                                 <option data-countrycode="NU" value="683">Niue (+683)</option>
                                 <option data-countrycode="NF" value="672">Norfolk Islands (+672)</option>
                                 <option data-countrycode="NP" value="670">Northern Marianas (+670)</option>
                                 <option data-countrycode="NO" value="47">Norway (+47)</option>
                                 <option data-countrycode="OM" value="968">Oman (+968)</option>
                                 <option data-countrycode="PW" value="680">Palau (+680)</option>
                                 <option data-countrycode="PA" value="507">Panama (+507)</option>
                                 <option data-countrycode="PG" value="675">Papua New Guinea (+675)</option>
                                 <option data-countrycode="PY" value="595">Paraguay (+595)</option>
                                 <option data-countrycode="PE" value="51">Peru (+51)</option>
                                 <option data-countrycode="PH" value="63">Philippines (+63)</option>
                                 <option data-countrycode="PL" value="48">Poland (+48)</option>
                                 <option data-countrycode="PT" value="351">Portugal (+351)</option>
                                 <option data-countrycode="PR" value="1787">Puerto Rico (+1787)</option>
                                 <option data-countrycode="QA" value="974">Qatar (+974)</option>
                                 <option data-countrycode="RE" value="262">Reunion (+262)</option>
                                 <option data-countrycode="RO" value="40">Romania (+40)</option>
                                 <option data-countrycode="RU" value="7">Russia (+7)</option>
                                 <option data-countrycode="RW" value="250">Rwanda (+250)</option>
                                 <option data-countrycode="SM" value="378">San Marino (+378)</option>
                                 <option data-countrycode="ST" value="239">Sao Tome &amp; Principe (+239)</option>
                                 <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
                                 <option data-countrycode="SN" value="221">Senegal (+221)</option>
                                 <option data-countrycode="CS" value="381">Serbia (+381)</option>
                                 <option data-countrycode="SC" value="248">Seychelles (+248)</option>
                                 <option data-countrycode="SL" value="232">Sierra Leone (+232)</option>
                                 <option data-countrycode="SG" value="65">Singapore (+65)</option>
                                 <option data-countrycode="SK" value="421">Slovak Republic (+421)</option>
                                 <option data-countrycode="SI" value="386">Slovenia (+386)</option>
                                 <option data-countrycode="SB" value="677">Solomon Islands (+677)</option>
                                 <option data-countrycode="SO" value="252">Somalia (+252)</option>
                                 <option data-countrycode="ZA" value="27">South Africa (+27)</option>
                                 <option data-countrycode="ES" value="34">Spain (+34)</option>
                                 <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
                                 <option data-countrycode="SH" value="290">St. Helena (+290)</option>
                                 <option data-countrycode="KN" value="1869">St. Kitts (+1869)</option>
                                 <option data-countrycode="SC" value="1758">St. Lucia (+1758)</option>
                                 <option data-countrycode="SD" value="249">Sudan (+249)</option>
                                 <option data-countrycode="SR" value="597">Suriname (+597)</option>
                                 <option data-countrycode="SZ" value="268">Swaziland (+268)</option>
                                 <option data-countrycode="SE" value="46">Sweden (+46)</option>
                                 <option data-countrycode="CH" value="41">Switzerland (+41)</option>
                                 <option data-countrycode="SI" value="963">Syria (+963)</option>
                                 <option data-countrycode="TW" value="886">Taiwan (+886)</option>
                                 <option data-countrycode="TJ" value="7">Tajikstan (+7)</option>
                                 <option data-countrycode="TH" value="66">Thailand (+66)</option>
                                 <option data-countrycode="TG" value="228">Togo (+228)</option>
                                 <option data-countrycode="TO" value="676">Tonga (+676)</option>
                                 <option data-countrycode="TT" value="1868">Trinidad &amp; Tobago (+1868)</option>
                                 <option data-countrycode="TN" value="216">Tunisia (+216)</option>
                                 <option data-countrycode="TR" value="90">Turkey (+90)</option>
                                 <option data-countrycode="TM" value="7">Turkmenistan (+7)</option>
                                 <option data-countrycode="TM" value="993">Turkmenistan (+993)</option>
                                 <option data-countrycode="TC" value="1649">Turks &amp; Caicos Islands (+1649)</option>
                                 <option data-countrycode="TV" value="688">Tuvalu (+688)</option>
                                 <option data-countrycode="UG" value="256">Uganda (+256)</option>
                                 <option data-countrycode="UA" value="380">Ukraine (+380)</option>
                                 <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
                                 <option data-countrycode="UY" value="598">Uruguay (+598)</option>
                                 <option data-countrycode="UZ" value="7">Uzbekistan (+7)</option>
                                 <option data-countrycode="VU" value="678">Vanuatu (+678)</option>
                                 <option data-countrycode="VA" value="379">Vatican City (+379)</option>
                                 <option data-countrycode="VE" value="58">Venezuela (+58)</option>
                                 <option data-countrycode="VN" value="84">Vietnam (+84)</option>
                                 <option data-countrycode="VG" value="84">Virgin Islands - British (+1284)</option>
                                 <option data-countrycode="VI" value="84">Virgin Islands - US (+1340)</option>
                                 <option data-countrycode="WF" value="681">Wallis &amp; Futuna (+681)</option>
                                 <option data-countrycode="YE" value="969">Yemen (North)(+969)</option>
                                 <option data-countrycode="YE" value="967">Yemen (South)(+967)</option>
                                 <option data-countrycode="ZM" value="260">Zambia (+260)</option>
                                 <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
                              </optgroup>
                    </select>
                    <div class="after"></div>
                   
                </div>
                        </div>
                        <div className='col-md-8'>
                        <div className="form-floating">

                    <input type="text" id="floatingInput"  className="" name="number" required />
                    <label htmlFor="floatingInput">Your number</label>
                    <div class="after"></div>
                </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-12'>
                <div className="form-floating">

                    <input type="text" id="floatingInput"  className="" name="message" required />
                    <label htmlFor="floatingInput">Your message</label>
                    <div class="after"></div>
                </div>
                </div>
            </div>
            <button type="submit" className='landing_btn6'  data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Send Your Message</button>
        </form>
        
        </div>
        <section className='Landing_Section_Style'>
        <div className='row'>
            <div className='col-md-6 '>
              <p className="Landing_p">© 2022 Gohaych - All reights reserved.</p></div>
            <div className='col-md-6'>
              <div className='Details'>
                <ul>
                <li>18 Neals Corner, 2 Bath Road, Hounslow, United Kingdom, TW3 3HJ</li>
                <li>+44 20 7234 3456</li>
                <li><a href="mailto:enquiries@dotoxygen.com" className='effect1_landingpage'>enquiries@gohaych.com</a></li>
                </ul>
                </div>
                </div>
        </div>
        </section>
        </div>
        </div>
      </section>

      
    </div>
    </div>
  )
}
export default Landingpage;