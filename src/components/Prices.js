import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup2 from "./Popup2";

export const Prices = (props) => {
  const [isPopUpVisible, setIsPopupVisible] = useState(false);
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <section>
        <div className="container">
          <Slider {...settings}>
            {/* website design packages start */}
            <div>
              <h1>Website Design</h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Basic Website Package</h4>
                    <h2>$299.00</h2>
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
                        <li>3 Page Website</li>
                        <li>2 Stock Images</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Contact/Query Form</li>
                        <li>48 to 72 hours TAT</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <a
                      href="#"
                      className="price_btn"
                      value="send"
                      //  data-bs-toggle="modal"
                      //  data-bs-target="#exampleModalToggle"
                      onClick={(e) => {
                        e.preventDefault();
                        props.HandleOnOrderNowClick?.();
                      }}
                    >
                      Order Now
                    </a>

                    {/* <Popup2 visibility={isPopUpVisible} handleClose={()=>{
                        setIsPopupVisible(false)
                      }} /> */}
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30"> Startup Website Package</h4>
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
                        <li>5 Page Website</li>
                        <li>5 Stock Photos</li>
                        <li>3 Banner Design</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>FREE Google Friendly Sitemap</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>48 to 72 hours TAT</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>Mobile Responsive will be Additional $200*</li>
                        <li>CMS will be Additional $250*</li>
                      </ul>
                    </div>
                    <button
                      type=""
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Professional Website Package</h4>
                    <h2>$599.00</h2>
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
                        <li>10 Unique Pages Website</li>
                        <li>CMS / Admin Panel Support</li>
                        <li>8 Stock images</li>
                        <li>5 Banner Designs</li>
                        <li>Mobile Responsive</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>FREE Google Friendly Sitemap</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>48 to 72 hours TAT</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Elite Website Package</h4>
                    <h2>$999.00</h2>
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
                        <li>Upto 15 Unique Pages Website</li>
                        <li>Conceptual and Dynamic Website</li>
                        <li>Mobile Responsive</li>
                        <li>Online Reservation/Appointment Tool (Optional)</li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Custom Forms</li>
                        <li>Lead Capturing Forms (Optional)</li>
                        <li>Striking Hover Effects</li>
                        <li>Newsletter Subscription (Optional)</li>
                        <li>Newsfeed Integration</li>
                        <li>Social Media Integration</li>
                        <li>Search Engine Submission</li>
                        <li>5 Stock Photos</li>
                        <li>3 Unique Banner Design</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>48 to 72 hours TAT</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="price_box">
                    <h4 className="mb30">Business Website Package</h4>
                    <h2>$1599.00</h2>
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
                        <li>15 to 20 Pages Website</li>
                        <li>
                          Custom Made, Interactive, Dynamic &amp; High End
                          Design
                        </li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>
                          Online Appointment/Scheduling/Online Ordering
                          Integration (Optional)
                        </li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>
                          Live Feeds of Social Networks integration (Optional)
                        </li>
                        <li>Mobile Responsive</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Search Engine Submission</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>
                          Industry Specified Team of Expert Designers and
                          Developers
                        </li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4 className="mb30">Corporate Website Package</h4>
                    <h2>$1949.00</h2>
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
                        <li>15 to 20 Pages Website</li>
                        <li>15 Seconds 2D Explainer Video</li>
                        <li>Voice – Over &amp; Sound Effects</li>
                        <li>Professional Script Writing</li>
                        <li>Storyboard</li>
                        <li>SEO Meta Tags</li>
                        <li>
                          Custom Made, Interactive, Dynamic &amp; High End
                          Design
                        </li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>
                          Online Appointment/Scheduling/Online Ordering
                          Integration (Optional)
                        </li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>
                          Live Feeds of Social Networks integration (Optional)
                        </li>
                        <li>Mobile Responsive</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Search Engine Submission</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>
                          Industry Specified Team of Expert Designers and
                          Developers
                        </li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="price_box">
                    <h4 className="mb30">
                      Automated/Interactive Conferencing Portal Package
                    </h4>
                    <h2>$4999.00</h2>
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
                        <li>Upto 20 Stock Images</li>
                        <li>20 Unique Banner Designs</li>
                        <li>Unlimited Page Website</li>
                        <li>Custom Content Management System (CMS)</li>
                        <li>Unique Pages And UI Design</li>
                        <li>Complete Custom Development</li>
                        <li>Process Automation Tools</li>
                        <li>Newsfeed Integration</li>
                        <li>Social Media Plugins Integration</li>
                        <li>JQuery Slider</li>
                        <li>Search Engine Submission</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>
                          Social Media Page Designs (Facebook, Twitter,
                          Instagram)
                        </li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Complete Deployment 100%</li>
                        <li>Automated Course Creation</li>
                        <li>Video Conferencing</li>
                        <li>Skills/Certification Tracking</li>
                        <li>Mobile Learning</li>
                        <li>Asynchronous Learning</li>
                        <li>CRM Features</li>
                        <li>Gamification</li>
                        <li>Social Learning/Message Boards</li>
                        <li>Motivational Triggers</li>
                        <li>Forums And Webinars</li>
                        <li>E-commerce And Subscriptions</li>
                        <li>Social Learning/Message Boards</li>
                        <li>Online Course Booking</li>
                        <li>Excellent Reporting</li>
                        <li>Invoicing Integration</li>
                        <li>Financial Integrations</li>
                        <li>Student Information management</li>
                        <li>Automated communications</li>
                        <li>Learning Management System</li>
                        <li>Quick And Easy Course Scheduling</li>
                        <li>Reporting And Data Analysis</li>
                        <li>Assessment Management &amp; Live Feedback</li>
                        <li>Gradebooks</li>
                        <li>Quick User Integration</li>
                        <li>Easy Payment Methods</li>
                        <li>Online Communities &amp; Social Engagement</li>
                        <li>Curation of Resources And Adding Own Resources</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* website design packages start */}

            {/* E-commerce packages start */}
            <div>
              <h1>E-Commerce</h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30"> Startup E-Commerce Package</h4>
                    <h2>$599.00</h2>
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
                        <li>Upto 5 Unique Pages Website</li>
                        <li>Conceptual and Dynamic Website</li>
                        <li>Content Management System (CMS)</li>
                        <li>Mobile Responsive</li>
                        <li>Easy Product Search</li>
                        <li>Product Reviews</li>
                        <li>Up To 20 Products</li>
                        <li>Up To 7 Categories</li>
                        <li>Full Shopping Cart Integration</li>
                        <li>Payment Module Integration</li>
                        <li>Sales Inventory Management</li>
                        <li>Jquery Slider</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Beginners E-Commerce Package</h4>
                    <h2>$995.00</h2>
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
                        <li>Upto 15 Unique Pages Website</li>
                        <li>Conceptual and Dynamic Website</li>
                        <li>Content Management System (CMS)</li>
                        <li>Mobile Responsive</li>
                        <li>Easy Product Search</li>
                        <li>Product Reviews</li>
                        <li>Up To 100 Products</li>
                        <li>Up To 7 Categories</li>
                        <li>Full Shopping Cart Integration</li>
                        <li>Payment Module Integration</li>
                        <li>Mobile Responsive will be Additional $200*</li>
                        <li>Sales Inventory Management</li>
                        <li>Jquery Slider</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Elite E-Commerce Package </h4>
                    <h2>$1795.00</h2>
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
                        <li>Unlimited Unique Pages Website</li>
                        <li>Conceptual and Dynamic Website</li>
                        <li>Content Management System (CMS)</li>
                        <li>5 Banner Designs</li>
                        <li>Mobile Responsive</li>
                        <li>Easy Product Search</li>
                        <li>Product Reviews</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Categories</li>
                        <li>Complete Deployment</li>
                        <li>Full Shopping Cart Integration</li>
                        <li>Payment Module Integration</li>
                        <li>Sales Inventory Management</li>
                        <li>Jquery Slider</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>Instagram Page Design</li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4 className="mb30">Business E-Commerce Package</h4>
                    <h2>$3695.00</h2>
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
                        <li>UNLIMITED Logo Design Concepts</li>
                        <li>By 6 Award Winning Designers</li>
                        <li>Icon Design</li>
                        <li>UNLIMITED Revisions</li>
                        <li>Print Media</li>
                        <li>
                          Stationary Design (BusinessCard,Letterhead Envelope)
                        </li>
                        <li>Invoice Design, Email Signature</li>
                        <li>Bi-Fold Brochure (OR) 2 Sided Flyer Design</li>
                        <li>Product Catalog Design</li>
                        <li>Sign age Design (OR) Label Design</li>
                        <li>T-Shirt Design (OR) Car Wrap Design</li>
                        <li>Website</li>
                        <li>E-Commerce Store Design</li>
                        <li>Product Detail Page Design</li>
                        <li>Unique Banner Slider</li>
                        <li>Featured Products Showcase</li>
                        <li>Full Shopping Cart Integration</li>
                        <li>Unlimited Products</li>
                        <li>Unlimited Categories</li>
                        <li>Product Rating Reviews</li>
                        <li>Easy Product Search</li>
                        <li>Payment Gateway Integration</li>
                        <li>Multi-currency Support</li>
                        <li>Content Management System</li>
                        <li>Cutomer Log-in Area</li>
                        <li>Mobile Responsive</li>
                        <li>Social Media Plugins Integration</li>
                        <li>Tell a Friend Feature</li>
                        <li>Social Media Pages</li>
                        <li>
                          Facebook , Twitter, YouTube, Google+ Pinterest Page
                          Designs
                        </li>
                        <li>Value Added Services</li>
                        <li>Dedicated Account Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>Unlimited Revisions</li>
                        <li>All Final File Formats</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4 className="mb30">Corporate E-Commerce Package</h4>
                    <h2>$4994.00</h2>
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
                        <li>Complete Custom Design Development</li>
                        <li>
                          Unique, User Friendly, Interactive, Dynamic, High End
                          UI Design
                        </li>
                        <li>Unlimited Banner Designs</li>
                        <li>Interactive Sliding Banners</li>
                        <li>Special Hover Effects</li>
                        <li>Customized Contact us Form</li>
                        <li>
                          Multiple Filtration Option (Search by Age, Experience,
                          Talent, Industry etc)
                        </li>
                        <li>Profile Comparison (As per Category)</li>
                        <li>File Converter</li>
                        <li>Custom Video Functionality</li>
                        <li>Multiple File format Uploading</li>
                        <li>User Signup Area ( Talent )</li>
                        <li>User Signup Area ( Casting )</li>
                        <li>User Signup Area ( Agency )</li>
                        <li>Client/User Dashboard Area</li>
                        <li>Client/User Dashboard Area</li>
                        <li>Vendor / Agency Dashboard Area</li>
                        <li>Custom Coding and Development</li>
                        <li>Content Management System (Custom)</li>
                        <li>
                          Online Appointment/Scheduling integration (Optional)
                        </li>
                        <li>Online Payment Integration</li>
                        <li>Invoicing System</li>
                        <li>Automated Email Notifications</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms</li>
                        <li>Complete Database Creation</li>
                        <li>
                          3rd Party Links integration (Instagram, IMDB etc )
                        </li>
                        <li>Signup Automated Email Authentication</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar for Easy Search</li>
                        <li>
                          Live Feeds of Social Networks integration (Optional)
                        </li>
                        <li>Search Engine Submission</li>
                        <li>SEO friendly</li>
                        <li>Mobile Responsive</li>
                        <li>Master Admin Panel</li>
                        <li>
                          SSL Certification ( to make the website and it’s
                          informative secured )
                        </li>
                        <li>6 Months of Free Maintenance</li>
                        <li>
                          Award Winning Team of Expert Designers and Developers
                        </li>
                        <li>Complete Deployment</li>
                        <li>Complete W3C Validation</li>
                        <li>Dedicated Team of Designers and Developers</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4 className="mb30">
                      Automated/Interactive E-commerce Package
                    </h4>
                    <h2>$7995.00</h2>
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
                        <li>Unlimited Page Website</li>
                        <li>Custom Content Management System (CMS)</li>
                        <li>Unique Pages and UI Design</li>
                        <li>Complete Custom Development</li>
                        <li>Process Automation Tools</li>
                        <li>Newsfeed Integration</li>
                        <li>Social Media Plugins Integration</li>
                        <li>Upto 40 Stock images</li>
                        <li>10 Unique Banner Designs</li>
                        <li>JQuery Slider</li>
                        <li>Search Engine Submission</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>
                          Social Media Page Designs (Facebook, Twitter,
                          Instagram)
                        </li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>Money Back Guarantee</li>
                        <li>Automated Inventory/Shipping/Supplier Module:</li>
                        <li>
                          Manage thousands to millions of inventory with ease
                          and check stock levels in real-time. Receive low
                          inventory notifications and generate purchase orders
                          to replenish your stock.
                        </li>
                        <li>Suppliers Integration (API NEEDED)</li>
                        <li>Shipper Integration (API NEEDED)</li>
                        <li>Order management</li>
                        <li>LOT numbers and expire date tracking</li>
                        <li>
                          Transfer stock between warehouses (If Warehouse API
                          NEEDED)
                        </li>
                        <li>
                          Receive stock into a specific warehouse (If Warehouse
                          API NEEDED)
                        </li>
                        <li>
                          Fulfill orders from a particular warehouse (If
                          Warehouse API NEEDED)
                        </li>
                        <li>Stock Management</li>
                        <li>Actionable Insights</li>
                        <li>Real- Time Visibility</li>
                        <li>Inventory Opportunities</li>
                        <li>
                          Advanced Features: (API Needed For
                          Suppliers/Warehouse)
                        </li>
                        <li>
                          Speak to suppliers during trivial conversations.
                        </li>
                        <li>
                          Set and send actions to suppliers regarding governance
                          and compliance materials. Place purchasing requests.
                        </li>
                        <li>
                          Research and answer internal questions regarding
                          procurement functionalities or a supplier/supplier
                          set.
                        </li>
                        <li>
                          Receiving/filing/documentation of invoices and
                          payments/order requests
                        </li>
                        <li>
                          Machine Learning (ML) for Supply Chain Planning (SCP)
                        </li>
                        <li>Machine Learning for Warehouse Management</li>
                        <li>
                          Natural Language Processing (NLP) for Data Cleansing
                          and Building Data Robustness
                        </li>
                        <li>Automated Invoices Estimates</li>
                        <li>
                          Create beautiful, professional invoices estimates in
                          just a few seconds and then instantly email them as
                          PDF&#8217;s directly to your customers or prospects.
                        </li>
                        <li>Automated Split invoicing</li>
                        <li>Automated Combine invoices</li>
                        <li>Invoice templates</li>
                        <li>Automated Barcode Scanning</li>
                        <li>
                          Scan inventory into your orders, generate barcodes for
                          your documents, and search for inventory or documents
                          by scanning barcodes.
                        </li>
                        <li>Locations and Zones</li>
                        <li>
                          Have multiple warehouses, offices, or retail stores?
                          No problem. Easily track where all your inventory is
                          by organizing everything into locations and zones.
                          Organize inventory items using custom attributes such
                          as size, color, and location. View how many you have
                          globally or at each location.
                        </li>
                        <li>Customer Accounts</li>
                        <li>Performance and analytics</li>
                        <li>Customization of Personal Details</li>
                        <li>Process management</li>
                        <li>Sales Automation</li>
                        <li>Team Collaboration</li>
                        <li>Marketing Automation</li>
                        <li>Security</li>
                        <li>Integrations</li>
                        <li>Mobile Notifications</li>
                        <li>Sales Reports</li>
                        <li>Trend Analytics</li>
                        <li>Forecasting</li>
                        <li>Territory Management</li>
                        <li>Account Management</li>
                        <li>Event Integration</li>
                        <li>Advanced Data Security</li>
                        <li>Purchase Orders</li>
                        <li>
                          With integrated purchase orders, you can easily
                          replenish your inventory levels by ordering more stock
                          and even track when those new items will arrive.
                        </li>
                        <li>Partial orders fulfill</li>
                        <li>Backordering</li>
                        <li>Financial Reports</li>
                        <li>
                          Generate extremely detailed reports for your
                          inventory, sales and services. Filter your reports by
                          date-range and category to see what&#8217;s making you
                          the most money.
                        </li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
            {/* E-commerce packages Ends */}

            {/* Wordpress packages Starts */}
            <div>
              <h1>Wordpress</h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4> Startup WordPress Package</h4>
                    <h2>$215.00</h2>
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
                        <li>5 Stock Photos</li>
                        <li>5 Page Website</li>
                        <li>3 Banner Design</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>FREE Google Friendly Sitemap</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>Mobile Responsive will be Additional $99*</li>
                        <li>CMS will be Additional $149*</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Professional WordPress Package</h4>
                    <h2>$695.00</h2>
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
                        <li>10 Unique Pages Website</li>
                        <li>CMS / Admin Panel Support</li>
                        <li>Mobile Responsive</li>
                        <li>5 Stock images</li>
                        <li>3 Banner Designs</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>FREE Google Friendly Sitemap</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Elite WordPress Package</h4>
                    <h2>$995.00</h2>
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
                        <li>Upto 15 Unique Pages Website</li>
                        <li>Conceptual and Dynamic Website</li>
                        <li>Mobile Responsive</li>
                        <li>Online Reservation/Appointment Tool (Optional)</li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Custom Forms</li>
                        <li>Lead Capturing Forms (Optional)</li>
                        <li>Striking Hover Effects</li>
                        <li>Newsletter Subscription (Optional)</li>
                        <li>Newsfeed Integration</li>
                        <li>Social Media Integration</li>
                        <li>Search Engine Submission</li>
                        <li>8 Stock Photos</li>
                        <li>5 Unique Banner Design</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Silver WordPress Package</h4>
                    <h2>$1595.00</h2>
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
                        <li>15 to 20 Pages Website</li>
                        <li>
                          Custom Made, Interactive, Dynamic High End Design
                        </li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>
                          Online Appointment/Scheduling/Online Ordering
                          Integration (Optional)
                        </li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>
                          Live Feeds of Social Networks integration (Optional)
                        </li>
                        <li>Mobile Responsive</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Search Engine Submission</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>
                          Industry Specified Team of Expert Designers and
                          Developers
                        </li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>Facebook Page Design</li>
                        <li>Twitter Page Design</li>
                        <li>YouTube Page Design</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Business WordPress Package</h4>
                    <h2>$2495.00</h2>
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
                        <li>Unlimited Page Website</li>
                        <li>Unique Pages and UI Design</li>
                        <li>
                          Social Media Page Designs (Facebook, Twitter,
                          Instagram)
                        </li>
                        <li>
                          Custom Made, Interactive, Dynamic High End Design
                        </li>
                        <li>Custom WP (or) Custom PHP Development</li>
                        <li>1 jQuery Slider Banner</li>
                        <li>Up to 10 Custom Made Banner Designs</li>
                        <li>10 Stock Images</li>
                        <li>Unlimited Revisions</li>
                        <li>Special Hoover Effects</li>
                        <li>Content Management System (CMS)</li>
                        <li>
                          Online Appointment/Scheduling/Online Ordering
                          Integration (Optional)
                        </li>
                        <li>Online Payment Integration (Optional)</li>
                        <li>Multi Lingual (Optional)</li>
                        <li>Custom Dynamic Forms (Optional)</li>
                        <li>Signup Area (For Newsletters, Offers etc.)</li>
                        <li>Search Bar</li>
                        <li>
                          Live Feeds of Social Networks integration (Optional)
                        </li>
                        <li>Mobile Responsive</li>
                        <li>15 Seconds 2D Explainer Video</li>
                        <li>Voice Over Sound Effects</li>
                        <li>Professional Script Writing</li>
                        <li>Storyboard</li>
                        <li>SEO Meta Tags</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Search Engine Submission</li>
                        <li>Complete W3C Certified HTML</li>
                        <li>
                          Industry Specified Team of Expert Designers and
                          Developers
                        </li>
                        <li>Complete Deployment</li>
                        <li>Dedicated Accounts Manager</li>
                        <li>Phone / Chat Support</li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Automated/Interactive Conferencing Portal Package</h4>
                    <h2>$4995.00</h2>
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
                        <li>Unlimited Page Website</li>
                        <li>Custom Content Management System (CMS)</li>
                        <li>Unique Pages and UI Design</li>
                        <li>Complete Custom Development</li>
                        <li>Process Automation Tools</li>
                        <li>Newsfeed Integration</li>
                        <li>Social Media Plugins Integration</li>
                        <li>Upto 40 Stock images</li>
                        <li>10 Unique Banner Designs</li>
                        <li>JQuery Slider</li>
                        <li>Free Google Friendly Sitemap</li>
                        <li>Custom Email Addresses</li>
                        <li>
                          Social Media Page Designs (Facebook, Twitter,
                          Instagram)
                        </li>
                        <li>Complete W3C Certified HTML</li>
                        <li>Complete Deployment</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>Money Back Guarantee</li>
                        <li>Key features</li>
                        <li>Automated Course Creation</li>
                        <li>Video Conferencing</li>
                        <li>Skills/Certification Tracking</li>
                        <li>Mobile Learning</li>
                        <li>Asynchronous Learning</li>
                        <li>CRM Features</li>
                        <li>Gamification</li>
                        <li>Social Learning/Message Boards</li>
                        <li>Motivational Triggers</li>
                        <li>Forums And Webinars</li>
                        <li>E-commerce And Subscriptions</li>
                        <li>Online Course Booking</li>
                        <li>Excellent Reporting</li>
                        <li>Invoicing Integration</li>
                        <li>
                          Speak to suppliers during trivial conversations.
                        </li>
                        <li>Student Information management</li>
                        <li>Automated communications</li>
                        <li>Learning Management System</li>
                        <li>Quick And Easy Course Scheduling</li>
                        <li>Reporting And Data Analysis</li>
                        <li>Assessment Management Live Feedback</li>
                        <li>Gradebooks</li>
                        <li>Quick User Integration</li>
                        <li>Easy Payment Methods</li>
                        <li>Online Communities Social Engagement</li>
                        <li>Curation of Resources And Adding Own Resources</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
            {/* Wordpress packages Ends */}

            {/* Branding packages starts */}
            <div>
              <h1>Branding</h1>
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
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
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
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
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
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
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
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Branding packages Ends */}

            {/* Logo design packages Start */}
            <div>
              <h1>Logo</h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Basic Logo Packages</h4>
                    <h2>$44.00</h2>
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
                        <li>1 Custom Logo Design Concepts</li>
                        <li>1 Dedicated Designer</li>
                        <li>4 Revisions</li>
                        <li>48 to 72 hours TAT</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>100% Ownership Rights</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Start Up Logo Packages</h4>
                    <h2>$74.00</h2>
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
                        <li>4 Custom Logo Design Concepts</li>
                        <li>By 2 Designers</li>
                        <li>FREE Icon</li>
                        <li>FREE Business Card Design</li>
                        <li>UNLIMITED Revisions</li>
                        <li>48 to 72 hours TAT</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>100% Ownership Rights</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Professional Logo Packages</h4>
                    <h2>$124.00</h2>
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
                        <li>UNLIMITED Logo Design Concepts</li>
                        <li>By 3 Designers</li>
                        <li>UNLIMITED Revisions</li>
                        <li>FREE Stationary Design Set</li>
                        <li>FREE MS Word Letterhead</li>
                        <li>48 to 72 hours TAT</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>15% Discount on your next order</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Elite Logo Packages</h4>
                    <h2>$174.00</h2>
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
                        <li>UNLIMITED Logo Design Concepts</li>
                        <li>By 5 Design Artist</li>
                        <li>FREE Stationary Design Set</li>
                        <li>UNLIMITED Revisions</li>
                        <li>FREE MS Word Letterhead</li>
                        <li>Free Email Signature</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                        <li>48 to 72 hours TAT</li>
                        <li>15% Discount on your next order</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Business Logo Packages</h4>
                    <h2>$244.00</h2>
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
                        <li>UNLIMITED Logo Design Concepts</li>
                        <li>By 8 Design Artist</li>
                        <li>UNLIMITED Revisions</li>
                        <li>2 Stationary Design Sets</li>
                        <li>Double Sided Flyer Design</li>
                        <li>Bi-Fold Brochure</li>
                        <li>FREE MS Word Letterhead</li>
                        <li>Social Media Banners Design</li>
                        <li>Free Email Signature</li>
                        <li>FREE Fax Template</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Gold Logo Packages</h4>
                    <h2>$524.00</h2>
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
                        <li>UNLIMITED Logo Design Concepts</li>
                        <li>By 8 Design Artist</li>
                        <li>UNLIMITED Revisions</li>
                        <li>2 Stationary Design Sets</li>
                        <li>FREE MS Word Letterhead</li>
                        <li>Free Email Signature</li>
                        <li>3 Page Custom Website</li>
                        <li>Content Management System</li>
                        <li>2 Stock Photos</li>
                        <li>2 Banner Designs</li>
                        <li>jQuery Slider</li>
                        <li>
                          All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG,
                          PDF)
                        </li>
                        <li>100% Ownership Rights</li>
                        <li>100% Satisfaction Guarantee</li>
                        <li>100% Unique Design Guarantee</li>
                        <li>100% Money Back Guarantee *</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-2"></div>
              </div>
            </div>
            {/* Logo design packages Ends */}

            {/* Video Animation packages Start */}
            <div>
              <h1>Video Animation</h1>
              <div className="row">
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Teaser/Intro Video Packages</h4>
                    <h2>$145.00</h2>
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
                        <li>10 Seconds Video</li>
                        <li>Professional Script</li>
                        <li>Sample Theme</li>
                        <li>Storyboard</li>
                        <li>Custom Artwork</li>
                        <li>Animation</li>
                        <li>Professional Voice Over Sound Effects</li>
                        <li>1 week Delivery</li>
                        <li>Unlimited Revisions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Startup Video Packages</h4>
                    <h2>$195.00</h2>
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
                        <li>30s Duration HD 1080</li>
                        <li>Professional Script</li>
                        <li>Sample Themes</li>
                        <li>Storyboard</li>
                        <li>Custom Setting, Characters Graphics</li>
                        <li>Animation Effects Visualization</li>
                        <li>Voice Over Sound Effects (All accents) (M/F)</li>
                        <li>Unlimited Revisions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Classic Video Packages</h4>
                    <h2>$500.00</h2>
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
                        <li>60 Second Video HD 1080</li>
                        <li>Professional Script</li>
                        <li>Sample Theme</li>
                        <li>Storyboard</li>
                        <li>Animation</li>
                        <li>Voice Over Sound Effects</li>
                        <li>5 weeks Delivery</li>
                        <li>Unlimited Revisions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="price_box">
                    <h4>Premium Video Packages</h4>
                    <h2>$695.00</h2>
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
                        <li>90 Second Video HD 1080</li>
                        <li>Professional Script</li>
                        <li>Sample Theme</li>
                        <li>Storyboard</li>
                        <li>Animation</li>
                        <li>Voice Over Sound Effects</li>
                        <li>6 Weeks Delivery</li>
                        <li>Unlimited Revisions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                  <div className="price_box">
                    <h4>Deluxe Video Packages</h4>
                    <h2>$895.00</h2>
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
                        <li>120 Second Video HD 1080</li>
                        <li>Professional Script</li>
                        <li>Sample Theme</li>
                        <li>Storyboard</li>
                        <li>Animation</li>
                        <li>Voice Over Sound Effects</li>
                        <li>Unlimited Revisions</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-3"></div>
              </div>
            </div>
            {/* Video Animation packages End */}

            {/* Seo packages Start */}
            <div>
              <h1>SEO</h1>
              <div className="row">
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Startup SEO Packages</h4>
                    <h2>$350.00</h2>
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
                        <li>Website Audit</li>
                        <li>15 Selected Keywords Targeting</li>
                        <li>Keyword Research</li>
                        <li>Keyword Grouping</li>
                        <li>Keyword Mapping</li>
                        <li>On-Page Optimization</li>
                        <li>SEO Road Map</li>
                        <li>Blog Creation</li>
                        <li>
                          Webpage Copywriting (3 pages, 350 words per page)
                        </li>
                        <li>Title Tag Optimization (10 titles)</li>
                        <li>
                          Meta Description Optimization (10 meta description)
                        </li>
                        <li>Meta Keyword Optimization (10 meta keywords)</li>
                        <li>
                          Domain Redirect Optimization (10 domain redirects)
                        </li>
                        <li>xml Sitemap Optimization</li>
                        <li>Robots.txt Check</li>
                        <li>URL Rewrites (10 URL rewrites)</li>
                        <li>Broken Link Report</li>
                        <li>Initial Off-Page SEO</li>
                        <li>Social Bookmarking</li>
                        <li>Slide Share Marketing</li>
                        <li>Forums/FAQ’s</li>
                        <li>Link Building</li>
                        <li>Directory Submission</li>
                        <li>Local Business Listings</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Scaling SEO Packages</h4>
                    <h2>$750.00</h2>
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
                        <li>Business Analysis</li>
                        <li>Consumer Analysis</li>
                        <li>Competitor Analysis</li>
                        <li>35 Selected Keywords Targeting</li>
                        <li>15 Pages Keyword Targeted</li>
                        <li>Webpage Optimization</li>
                        <li>Meta Tags Creation</li>
                        <li>Keyword Optimization</li>
                        <li>Image Optimization</li>
                        <li>Inclusion of anchors</li>
                        <li>Tracking Analysis</li>
                        <li>Google Analytics Installation</li>
                        <li>Google Webmaster Installation</li>
                        <li>Call To Action Plan</li>
                        <li>Creation of Sitemaps</li>
                        <li>Reporting</li>
                        <li>Monthly Reporting</li>
                        <li>Email Support</li>
                        <li>Phone Support</li>
                        <li>Off Page Optimization</li>
                        <li>Social Bookmarking</li>
                        <li>Slide Share Marketing</li>
                        <li>Forums/FAQ’s</li>
                        <li>Link Building</li>
                        <li>Directory Submission</li>
                        <li>Local Business Listings</li>
                        <li>Local Business Listings</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="price_box">
                    <h4>Venture Plan Packages</h4>
                    <h2>$1199.00</h2>
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
                        <li>Business Analysis</li>
                        <li>Consumer Analysis</li>
                        <li>Competitor Analysis</li>
                        <li>60+ Selected Keywords Targeting</li>
                        <li>30 Pages Keyword Targeted</li>
                        <li>Webpage Optimization</li>
                        <li>Meta Tags Creation</li>
                        <li>Keyword Optimization</li>
                        <li>Image Optimization</li>
                        <li>Inclusion of anchors Tags</li>
                        <li>Inclusion of anchors Indexing Modifications</li>
                        <li>Tracking Analysis</li>
                        <li>Google Places Inclusions</li>
                        <li>Google Analytics Installation</li>
                        <li>Google Webmaster Installation</li>
                        <li>Call To Action Plan</li>
                        <li>Creation of Sitemaps</li>
                        <li>Reporting</li>
                        <li>Monthly Reporting</li>
                        <li>Recommendation</li>
                        <li>Email Support</li>
                        <li>Phone Support</li>
                        <li>Off Page Optimization</li>
                        <li>Social Bookmarking</li>
                        <li>Slide Share Marketing</li>
                        <li>Forums/FAQ’s</li>
                        <li>Link Building</li>
                        <li>Directory Submission</li>
                        <li>Local Business Listings</li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="price_btn"
                      value="send"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Seo packages Ends */}
          </Slider>
        </div>
      </section>
    </div>
  );
};
export default Prices;
