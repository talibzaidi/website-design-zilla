import React from 'react'
import Wordpress from '../images/wordpres_icon.png'
import Webapp from '../images/web-design.png'
import Video from '../images/animation.png'
import Ecommerce from '../images/e-payment.png'
import Digital from '../images/bullhorn.png'
import Logo from '../images/logo-design.png'
import Social from '../images/seo.png'
import Shopify from '../images/shopify_black.png'
function Section2() {

  return (
    <section className="Section2">
        <div className="container">
        <div className="row">
        <div className="col-md-12">
            <h2 className='mb30' >"ESSENTIAL SERVICES"</h2>
            <p className='mb70 w70'>Our set of impeccable services serves as an essential part of any business which is transforming its operations to the online realm. Our mastery isn’t limited to full-fledged website development but to every aspect required from head to toe for a flexible and optimum website presence to run the business without failures.</p>
            <div className='container aligncenter'>
                <div className='col-md-12'>
                        <div className='row'>

                        <div className='col-md-3'>
                            <img src={Wordpress} alt='Development' className='mb30 size_style'/>
                            <h3 className='section2texts'>Wordpress Development</h3>
                            </div>
                                <div className='col-md-3'>
                                <img src={Webapp} alt='design' className='mb30 size_style'/>
                                <h3 className='section2texts'>Web Apps</h3>
                                </div>
                        
                           
                            <div className='col-md-3'>
                            <img src={Video} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>Video Animation</h3>
                            </div>

                            <div className='col-md-3'>
                            <img src={Ecommerce} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>E-commerce</h3>
                            </div>
                            </div>
                            <div className='mb70'></div>
                            <div className='row'>
                            <div className='col-md-3'>
                            <img src={Digital} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>Digital Marketing</h3>
                            </div>
                            

                            <div className='col-md-3'>
                            <img src={Logo} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>Logo design</h3>
                            </div>

                            <div className='col-md-3'>
                            <img src={Social} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>Social Media Marketing</h3>
                            </div>

                            <div className='col-md-3'>
                            <img src={Shopify} alt='Branding' className='mb30 size_style'/>
                            <h3 className='section2texts'>Shopify</h3>
                            </div>
                            </div>
                        </div>
                 
                    </div>
                </div>
        </div>
        </div>
    </section>
  )
}

export default Section2;