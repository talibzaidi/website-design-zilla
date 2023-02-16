import React from 'react'
import Popup from '../FormPopup'
import Cta from '../CalltoAction'
import work1 from '../../images/work-1.jpg'
import work2 from '../../images/work-2.jpg'
import work3 from '../../images/work-3.jpg'
import work4 from '../../images/work-4.jpg'
import work5 from '../../images/work-5.jpg'
import work6 from '../../images/work-6.jpg'
import work7 from '../../images/work-7.jpg'
import work8 from '../../images/work-8.jpg'
import work9 from '../../images/work-9.jpg'

export const branding = () => {
  return (
    <div>
      <Popup/>
      <section className='mb70'>
        <div className='container'>
          <div className='mb70'></div>
              <h1>Branding</h1>
              <p>We are the best in branding because we understand that a strong brand is the foundation of a successful business. Our team of branding experts works with our clients to develop a unique brand identity that sets them apart from the competition. We take a holistic approach to branding, considering every aspect of the business from the logo to the messaging to the customer experience. We specialize in creating memorable and engaging brand identities that resonate with customers and build loyalty. With a focus on creativity and strategic thinking, we are committed to delivering exceptional branding solutions that help our clients achieve their business goals.</p>
              <div className='mb70'></div>
              <h3>Packages</h3>
              <div>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Startup Collateral Packages</h4>
                    <h2>$99.00</h2>
                    <p>Package Includes</p>
                    <hr
                      style={{
                        width: "20%",
                        color: "black",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></hr>
                    <div className="price_content_box">
                      <ul>
                        <li>2 Stationery Design Set</li>
                        <li>FREE Fax Template</li>
                        <li>Print Ready Formats</li>
                        <li>UNLIMITED Revisions</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button type="submit" className='price_btn' value="send" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Order Now</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Collateral Classic Packages</h4>
                    <h2>$199.00</h2>
                    <p>Package Includes</p>
                    <hr
                      style={{
                        width: "20%",
                        color: "black",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></hr>
                    <div className="price_content_box">
                      <ul>
                        <li>2 Stationery Design Set</li>
                        <li>UNLIMITED Revisions</li>
                        <li>Flyer Design</li>
                        <li>Brochure Design (Bi-fold/Tri-fold)</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button type="submit" className='price_btn' value="send" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Order Now</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Premium Collateral Package</h4>
                    <h2>$399.00</h2>
                    <p>Package Includes</p>
                    <hr
                      style={{
                        width: "20%",
                        color: "black",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></hr>
                    <div className="price_content_box">
                      <ul>
                        <li>2 Stationery Design Set</li>
                        <li>Packaging Design</li>
                        <li>UNLIMITED Revisions</li>
                        <li>T-Shirt Design</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button type="submit" className='price_btn' value="send" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Order Now</button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Unlimited Collateral Package</h4>
                    <h2>$499.00</h2>
                    <p>Package Includes</p>
                    <hr
                      style={{
                        width: "20%",
                        color: "black",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    ></hr>
                    <div className="price_content_box">
                      <ul>
                        <li>2 Stationery Design Set</li>
                        <li>Menu Card Design</li>
                        <li>T-Shirt Design</li>
                        <li>1 Banner Design</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button type="submit" className='price_btn' value="send" data-bs-toggle="modal" data-bs-target="#exampleModalToggle" >Order Now</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

  <div className='mb70'><Cta/></div>
      </div>
  )
}
export default branding