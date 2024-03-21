import React, { useEffect } from "react";
import Footer from "./Footer";

function BuildYourTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="service-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#BuildYourOwnTeam</h1>image.file
              <h5>
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Services Section ======= --> */}
      <section id="services" className="services ">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Services</h2>
          </div>
          <div className="sub-section-title">
            <p>Software Development Outsourcing</p>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Staff Augmentation</a>
                </h4>
                <p className="service-fill">
                  Fill in the skill gap of in-house resources with the best
                  Prowerse offshore talents assigned to projects full-time and
                  managed by you directly. Prowerse provides staff augmentation
                  services to speed up development and optimize development
                  costs.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Dedicated Team</a>
                </h4>
                <p className="service-fill">
                  Expand your software development capabilities and minimize
                  management efforts with a dedicated Prowerse development team
                  managed by a PM from Prowerse who regularly reports to you and
                  collaborates on all important decisions in the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* deticated team */}
      {/* <section
        id="about"
        className="about section-bg hire-developers-sec about-box"
      >
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>HIRE DEDICATED DEVELOPERS</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Hire dedicated developers from our team at a reasonable price,
              customized 100% as per your requirements. We offer world-class
              development skills with a strong inhouse team of 300+ dedicated
              web, mobile app and software developers.
            </p>
          </div>
          <div class="row">
            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bxl-dribbble"></i>
                </div>
                <h4>
                  <a href="">Lorem Ipsum</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-file"></i>
                </div>
                <h4>
                  <a href="">Sed ut perspici</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-tachometer"></i>
                </div>
                <h4>
                  <a href="">Magni Dolores</a>
                </h4>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>

            <div
              class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div class="icon-box">
                <div class="icon">
                  <i class="bx bx-layer"></i>
                </div>
                <h4>
                  <a href="">Nemo Enim</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default BuildYourTeam;

