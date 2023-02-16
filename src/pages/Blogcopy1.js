import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from 'react-router-dom';

export const Blogs = () => {
    const navigate = useNavigate();

    const navigateToarticle = () => {
      navigate('/article');
    };
    const navigateToarticle2 = () => {
        navigate('/article2');
      };
      const navigateToarticle3 = () => {
        navigate('/article3');
      };
      const navigateToarticle4 = () => {
        navigate('/article4');
      };
      const navigateToarticle5 = () => {
        navigate('/article5');
      };
      const navigateToarticle6 = () => {
        navigate('/article6');
      };
  return (
    <div>
        <section className='blog'>
            <div className='container'>
            <p className='large'>BLOG</p>
                <h1 style={{color:'black'}}>When we’re not busy designing, coding, and branding, sometimes we write our thoughts</h1>
                <div className='row mb70'>
                    <div className='col-md-8 no_pad'>
                        <div className='blogsstyle'>
                        <p className='mb30'>26 MAY 2020</p>
                        <h3 className='mb30'>Custom Construction Software Price, Advantages Implementation</h3>
                        <p>Various unpredictable procedures are utilized in the development business...</p>
                        <button className="btn1" onClick={navigateToarticle}>Read more</button>
                        </div>
                    </div>
                    <div className='col-md-4 no_pad'>
                    <div className='blogsstyle'>
                        <p className=''>26 MAY 2020</p>
                        <h3 className=''>Dedicated Team Model. Everything You Need to Know</h3>
                        <p>Programming improvement commitment model determination is a convoluted interaction...</p>
                        <button className="btn1" onClick={navigateToarticle2}>Read more</button>
                        </div>
                    </div>
                    <div className='col-md-4 no_pad'>
                    <div className='blogsstyle'>
                        <p className=''>26 MAY 2020</p>
                        <h3 className=''>E-commerce Website Redesign in 2022 Guide for Owners</h3>
                        <p>Unfortunately, these business nightmares become reality for too many companies...</p>
                        <button className="btn1" onClick={navigateToarticle3}>Read more</button>
                        </div>
                    </div>
                    <div className='col-md-4 no_pad'>
                    <div className='blogsstyle'>
                        <p className=''>26 MAY 2020</p>
                        <h3 className=''>Fixed Cost vs. Time and Materials. What is the Difference</h3>
                        <p>Which choice should the business pick: fixed costs versus time and materials?...</p>
                        <button className="btn1" onClick={navigateToarticle4}>Read more</button>
                        </div>
                    </div>
                    <div className='col-md-4 no_pad'>
                    <div className='blogsstyle'>
                        <p className=''>26 MAY 2020</p>
                        <h3 className=''>Why Quality Assurance is Important, and What are Its Benefits</h3>
                        <p>Testing a couple of lines of code is just a single part of value confirmation (QA)...</p>
                        <button className="btn1" onClick={navigateToarticle5}>Read more</button>
                        </div>
                    </div>
                    {/* <div className='col-md-4 no_pad'>
                    <div className='blogsstyle'>
                        <p className=''>26 MAY 2020</p>
                        <h3 className=''>How to Build a Minimum Viable Product</h3>
                        <p>Did you have at least some idea that the first iPhone couldn't send media to an alternate iPhone?...</p>
                        <button className="btn1" onClick={navigateToarticle6}>Read more</button>
                        </div>
                    </div>
                    <div className='col-md-8 no_pad'>
                        <div className='blogsstyle'>
                        <p className='mb30'>26 MAY 2020</p>
                        <h3 className='mb30'>WordPress Website Maintenance: Why, When & How To Do It + Cost</h3>
                        <p>Unfortunately, these business nightmares become reality for too many companies. Since 40% of websites are built using WordPress, this platform is a popular target for hackers.</p>
                        <button className="btn1" onClick={navigateToarticle}>Read more</button>
                        </div>
                    </div> */}
                    
                </div>
                
          

                

            </div>

        </section>

    </div>
  )
};
export default Blogs
