import React, { useState, useEffect } from "react";
import Logo from "../images/wdzlogo.png";
export const FormPopup = () => {
  const [formState, setFormState] = useState({});

  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "f26bdf2e-e9a0-4ff5-ae73-d1737e98521d ",
      To: "inquiry@websitedesignzilla.com",
      From: "inquiry@websitedesignzilla.com",
      Subject: "New query From Website Design Zilla",
      Body: formState.message,
    };
    if (window.Email) {
      window.Email.send(config).then(() => alert("email sent successfully"));
    }
  };
  return (
    <div
      className="modal fade"
      id="exampleModalToggle"
      aria-hidden="true"
      aria-labelledby="exampleModalToggleLabel"
      tabindex="-1"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {/* <img src={Logo} className="logo_landing" alt="logo"/> */}
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              Website Design Zilla
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={submitHandler}>
            <div className="pop_form">
              <p>
                Please Provide the following information so our agent will
                contatc you within 24 working hours
              </p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Your name"
                      required
                      name="name"
                      onChange={changeHandler}
                    />
                  </div>
                  {/*<input type="text" name="from_name" placeholder='Your name' />*/}
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput2"
                      name="email"
                      onChange={changeHandler}
                      required
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="floatingInput3"
                      name="message"
                      onChange={changeHandler}
                      required
                      placeholder="Tell us about your project"
                    />
                  </div>
                  <button type="submit" value="Send Email" className="btn6">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* <div className="modal-footer">

        
      </div>

      </div> */}
        </div>
      </div>
    </div>
  );
};
export default FormPopup;
