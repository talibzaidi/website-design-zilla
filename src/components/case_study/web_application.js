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

export const web_application = () => {
  return (
    <div>
      <Popup/>
      <section className='mb70'>
        <div className='container'>
          <div className='mb70'></div>
              <h1>Web Application</h1>
              <p>We are the best in web application development because we have a team of skilled and experienced developers who use the latest technologies to create high-performance web applications. We specialize in custom web application development, ensuring that every project is tailored to meet the unique needs of our clients. Our developers work closely with our clients to understand their business objectives, and then use their expertise to create innovative and user-friendly web applications that solve complex problems. We are committed to delivering solutions that are secure, scalable, and reliable, and we pride ourselves on our attention to detail and commitment to quality. With our expertise, we are confident that we can deliver web applications that exceed our clients' expectations.</p>
              <div className='mb70'></div>
              <h3>Packages</h3>
              
        </div>
      </section>

      
  <div className='mb70'><Cta/></div>
      </div>
  )
}
export default web_application
