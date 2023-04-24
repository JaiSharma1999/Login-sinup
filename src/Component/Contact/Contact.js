import React, {useRef,useState } from 'react'
import Map from "../../img/map.jpg"
import emailjs from "@emailjs/browser";
const Contact = () => {
  
 
  const form = useRef();
  const [done, setDone] = useState(false)
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rpy75jo",
        "template_3j9ji4c",
        form.current,
        "tpmZtGNg6yMmLNJA_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
          
        },
        (error) => {
          console.log(error.text);
        }
      );
      form.current.reset()
  };
  return (
    <div>
      
      <section className='mb-5'>
      <div className="container pt-4">
        <p className="text-center fs-1 fw-bold eum">CONTACT</p>
        <p className="text-center fs-5 text-secondary mb-4">Magnam dolores commodi suscipit. Nec eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate.
          impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <div className="row mb-5">
          <div className="col-sm-5  shadow-lg p-3 op">
            <div className="d-flex flex-row mb-3">
              <div>
                <i className="fa-solid fa-location-dot border rounded-circle p-3 fs-3"></i>
                   
              </div>
              <div>
                <p className=" ms-3 mt-2 fw-bold">Location :
                  A108 Adam Street, New York, NY 535022</p>
              </div>
            </div>
            <div className=" d-flex flex-row mb-3">
              <div>
                <i className="fa-solid fa-envelope border rounded-circle p-3 fs-3"></i>
                   
              </div>
              <div>
                <p className=" ms-3 mt-2 fw-bold">Email:
                  info@example.com</p>
              </div>
  
              </div>
                
              <div className=" d-flex flex-row mb-3">
                <div>
                  <i className="fa-solid fa-mobile border rounded-circle p-3 fs-3"></i>
                     
                </div>
                <div>
                  <p className=" ms-3 mt-2 fw-bold">Call :
                    +1 55 334 56 777</p>
                </div>
    
                </div>
                <div>
                  <img src={Map} alt=" " class="img-fluid"/>
                </div>
            </div>
            <div className="col-sm-6 p-3 offset-sm-1 op shadow-lg">
              <form className=" p-5"  ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label for="exampleInputEmail1"  class="form-label">Full Name</label>
                  <input type="text" className="form-control" name="to_name"/>
                
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Email</label>
                  <input type="email" className="form-control" name="to_email"/>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input type="Password" className="form-control" name="to_password"/>
                </div>
                

                <div className="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Message</label>
                  <input type="" className="form-control py-5"  name="message"/>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="rounded-pill px-3 py-2 mt-3 bg-warning" value="Send">Send Message</button>
                </div>
                <span>{done && "Thanks for Contacting me"}</span>
              </form>
            </div>
      </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
