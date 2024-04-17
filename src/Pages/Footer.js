import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 footer-contact">
                <h3>
                  Prowerse<span></span>
                </h3>
                <p>
                  401, D and C Dynasty CG Road, Stadium Cross Rd, <br />
                  Ahmedabad
                  <br />
                  Gujarat <br />
                  <br />
                  <strong>Phone:</strong> +91-9537485017
                  <br />
                  <strong>Email:</strong> <a style={{color: 'white'}} href="mailto:inquiry@prowerse.com">inquiry@prowerse.com</a>
                  <br />
                </p>
              </div>

              <div className="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <Link to="/">About Us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <Link to="/build-your-dedicated-team">
                      Build Your Dedicated Team
                    </Link>
                  </li>

                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{' '}
                    <Link to="/contact">Let's Talk</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-newsletter">
                <h4>Follow Us:</h4>
                <p>
                  {' '}
                  <div className="social-links ">
                    <Link
                      to="https://www.linkedin.com/company/prowerse/mycompany/"
                      target="_blank"
                      className="linkedin"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="LinkedIn"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </Link>
                    <Link
                      to="https://github.com/prowerse-tech"
                      target="_blank"
                      className="linkedin"
                      data-bs-toggle="tooltip" data-bs-placement="top" title="Github"
                    >
                      <i className="bx bxl-github"></i>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{' '}
              <strong>
                <span>Prowerse</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0"></div>
        </div>
      </footer>
      <Link
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </Link>
    </>
  )
}
export default Footer
