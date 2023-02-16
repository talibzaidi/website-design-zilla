import React from "react";
import EmailjsSMTP from "../components/EmailjsSMTP";

import Address from '../components/Address';

function Contact(){
return (
  <div>
  <section className="contact1">
    <div className="container">
      <div className="mb70"></div>
    <div className="row">
    <div className="col-md-8">

    <h6>CONTACT</h6>
    <h2>HELLO! How can we assist you?</h2>
    
    <EmailjsSMTP />

    </div>{/*col*/}
    <div className="col-md-3 offset-md-1">
    


    </div>{/*col*/}
    </div>{/*row*/}
    </div>{/*con*/}
  </section>

    <Address />

  </div>
);
}

export default Contact;