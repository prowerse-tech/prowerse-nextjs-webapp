import React, { useEffect } from "react";
import Footer from "./Footer";

function ProductEngineering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="service-product-engg" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#ProductEngineering</h1>
              {/* <h2>Software Development. Delivered.</h2> */}
              <h5>
              
                {/* In the realm of tech services, we're not just providers; we're
                architects of solutions. From code intricacies to system
                scalability, our tech services embody precision and
                adaptability. Whether it's troubleshooting challenges or
                envisioning future enhancements, we're your partners in
                navigating the ever-evolving landscape of technology. */}
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>

     
      <section id="pricing" className="pricing section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Software Product Development</h2>
          </div>

          <div className="sub-section-title">
            <p>
              In the realm of software product development, we orchestrate
              brilliance—conceptualizing, coding, and refining to birth
              seamless, user-centric solutions. Our commitment lies in crafting
              software that not only meets expectations but exceeds them, one
              line of code at a time.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="box" data-aos="fade-up" data-aos-delay="100">
                <h3>Enterprise Applications</h3>
                <p>
                  Enterprise Applications are large-scale software packages that
                  support business processes, information flows, reporting, and
                  data analytics in complex organizations. Prowerse focuses on
                  Simplicity, Maintainability, Reusability, Decoupling of
                  Technology and Functionality. Prowerse's proven approach of
                  breaking large-scale application in to the small.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
              <div
                className="box featured"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Mobile Applications</h3>
                <p>
                  Prowerse brings to life product ideas of native,
                  cross-platform, and hybrid mobile applications, targeting
                  smartphones and tablets. Be it e-commerce experience or
                  geo-tracking of users, Prowerse has delivered such examples
                  with ease of use. Prowerse can participate from concept screen
                  sketching till seamless deployments of Apps to the respective
                  app stores.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
              <div className="box" data-aos="fade-up" data-aos-delay="300">
                <h3>Web Applications</h3>
                <p>
                  Prowerse provides flexible and seamless website development
                  services. Prowerse's approach to design attractive and
                  customer-friendly web designs has helped many businesses to
                  enlarge digital footprint. Prowerse is proud of excellent team
                  of designers & developers, which can collaborate with you
                  during the journey of concept to website hosting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default ProductEngineering;
