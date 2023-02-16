import React from 'react'
import work1 from '../images/work-1.jpg'
import work2 from '../images/work-2.jpg'
import work3 from '../images/work-3.jpg'
import work4 from '../images/work-4.jpg'
import work5 from '../images/work-5.jpg'
import work6 from '../images/work-6.jpg'
import work7 from '../images/work-7.jpg'
import work8 from '../images/work-8.jpg'
import work9 from '../images/work-9.jpg'

export const homepage_portfolio = () => {
  return (
    <section className='portfolio Landing_Section_Style' id="work">
    <div className='container'>
      <div className='row '>
        <h3 className="Landing_h3">Portfolio</h3>
        
        <div className='col-md-6'><div className='imageBox'><img src={work1} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work2} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work3} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work4} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work5} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work6} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work7} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work8} alt="" /></div></div>
        <div className='col-md-6'><div className='imageBox'><img src={work9} alt="" /></div></div>
      </div>
    </div>
  </section>
  )
}
export default homepage_portfolio
