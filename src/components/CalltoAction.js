import React from 'react'

export const CalltoAction = () => {
  return (
    <div>
        <section>
        <div className='container'>
            <div className='cta_Box'>
                <div className='row'>
                    <div className='col-md-6'><h1>Turn your bold ideas into a reality.</h1><p>In this digitally competitive environment, allow your firm to inspire, aspire, and perspire! Please contact us as soon as possible!</p></div>
                    <div className='col-md-6'>
                        <div className='cta_btn'>
                    <button className='btn2' data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Sign Up Now</button>
                <a href='javascript:$zopim.livechat.window.show();'><button className='btn2' >Live Discuss</button></a>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </div>
  )
}
export default CalltoAction