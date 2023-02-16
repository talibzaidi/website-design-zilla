import React, {useState,useEffect} from 'react'

export const Footer_form = () => {
    


   const [formState, setFormState] = useState({});

    const changeHandler = (event)=>{
        setFormState ({...formState, [event.target.name]: event.target.value});
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const config = {
            SecureToken: 'f26bdf2e-e9a0-4ff5-ae73-d1737e98521d ',
            To : 'inquiry@websitedesignzilla.com',
            From : 'inquiry@websitedesignzilla.com',
            Subject : "New query From Website Design Zilla",
            Body: formState.message,
            
        };
        if(window.Email){
            window.Email.send(config).then(() => alert("email sent successfully"));
        }
    };


   const [show, setShow] = useState('block');
    


    useEffect(()=>{
      if(window.location.href.indexOf("/contact") > -1) {
          setShow('none');
      } else {
          setShow('block');
      }
  })

  return (
    <div style={{display:show}}>
    <div className='black_bg'>
        <div className='container'>
            <div className='pop_form'>
            <h1>Want to know more?</h1>
            <p>If you have specific questions, please send them to us via contact form.</p>
             <form onSubmit={submitHandler}>
            <div className='row'>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" required name="name" onChange={changeHandler} />
                </div>
                {/*<input type="text" name="from_name" placeholder='Your name' />*/}
            </div>
            <div className='col-md-6'>
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput2" name="email" onChange={changeHandler} required placeholder='Your Email' />
                </div>
            </div>
            <div className='col-md-12'>
                <div className="form-floating">
                    <textarea className="form-control" id="floatingInput3" name="message" onChange={changeHandler} required placeholder='Tell us about your project' />
                </div>
                <button type="submit" value="Send Email" className='btn6'>Send</button>
            </div>
            </div>
        </form>
        </div>
        </div>
    </div>

    </div>
  )
}
export default Footer_form
