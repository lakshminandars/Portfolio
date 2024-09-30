import React from 'react';
import { MDBFooter, MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Banner() {
    return (
        <div className="container-fluid banner-section">
            <div className="row align-items-center " style={{ backgroundColor: "black", height:"650px"}}>
                <div className="col-md-6 text-light text-md-start text-center banner-text">
                    <div className="section border border-2 rounded p-4" style={{ width: "80%", margin: "auto", maxWidth: "500px" }}>
                        <h1 className="mt-5 fw-bold text-light">HI, I AM<br />
                            LAKSHMI NANDA R S
                            <br />
                            <span className="mt-3 d-block">
                                <h5 className="text-warning fw-semibold">MERN STACK DEVELOPER</h5>
                            </span>
                        </h1>
                        <h6 style={{ fontSize: "12px" }}>"I am a passionate and beginner MERN stack developer, building dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. Eager to learn, grow, and take on exciting new challenges in full-stack development."
                            You can tweak it further if needed!</h6>
                        <MDBFooter className='text-center text-light text-lg-start text-muted'>
                            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                                <div className='me-5 d-none d-lg-block text-light'>
                                    <span>Get Connected Through:</span>
                                </div>


                                <div>
                                    <a href='#' className='me-4 text-reset fs-4'>
                                        <MDBIcon fab icon="instagram" />
                                    </a>
                                    <a href='#' className='me-4 text-reset fs-4 '>
                                        <MDBIcon fab icon="linkedin" />
                                    </a>
                                    <a href='#' className='me-4 text-reset fs-4'>
                                        <MDBIcon fab icon="github" />
                                    </a>
                                </div>
                            </section>
                        </MDBFooter>
                    </div>
                </div>

                <div className="col-md-6 text-center banner-image">
                    <img className="img-fluid rounded shadow" src="https://i.pinimg.com/474x/24/75/78/2475786cd4c5f50833c4eb849bdd20b9.jpg" alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
