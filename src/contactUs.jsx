import React from 'react'

function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="text-center m-5">
          <h3>Contact Us</h3>
        </div>

        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">Contact Us</h5>
                <p className="card-text">You Can contact us for any Question in any Time.</p>

                <form>
                  <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control"></textarea>
                  </div>
                  <div className="form-check p-3">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Submit Your Message</label>
                  </div>
                  <button type="submit" className="btn btn-dark">Send</button>
                </form>
              </div>
            </div>

            <div className="col">
              <img src="https://media.istockphoto.com/photos/contact-us-symbols-on-toy-blocks-contact-us-and-crm-concept-picture-id1053986724?k=20&m=1053986724&s=612x612&w=0&h=fmgaNcQnUS1ltgTAG-nUjVLXYVTHKT86Bvn0KZCSft4=" className="card-item col-md h-100" alt="" />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs;