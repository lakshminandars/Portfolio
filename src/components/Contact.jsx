import React from 'react';

function Contact() {
  return (
    <div className="section py-5" style={{ backgroundColor: "black" }}>
      <div className="text-center mb-4">
        <h2 className='text-warning fw-bold fs-2'>CONTACT</h2>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="contact border border-light p-4 rounded w-100" style={{ maxWidth: "600px" }}>
          <form>
            <div className="mb-3">
              <input
                type="text"
                placeholder='Name'
                className='form-control form-control-lg rounded-pill'
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder='Mobile Number'
                className='form-control form-control-lg rounded-pill'
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder='E-mail'
                className='form-control form-control-lg rounded-pill'
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder='Message'
                className='form-control form-control-lg rounded'
                rows="4"
                required
              />
            </div>
            <div className="text-center">
              <button className='btn btn-lg btn-warning fw-bold px-4 py-2 rounded-pill'>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
