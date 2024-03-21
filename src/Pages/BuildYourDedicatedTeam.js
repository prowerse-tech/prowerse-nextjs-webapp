import React, { useEffect } from "react";
import Footer from "./Footer";

function BuildYourDedicatedTeam() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section
        id="service-build-your-dedicated"
        className="d-flex align-items-center"
      >
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#BuildYourOwnTeam</h1>
              <br />
              <h5>
                Hire skilled engineers from our rich pool of individuals at
                reasonable prices. Avail on-demand, dedicated engineers through
                our strong, hand-picked inhouse team of Business Analysts,
                Software Engineers, Automation QAs, DevOps, service-support
                executives, etc.
              </h5>
              <h5>
                We support various businesses in growing their IT teams with
                fast ramp-up time, keeping costs in check.
              </h5>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about hire-developers-sec about-box">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>You demand, we deliver.</h2>
          </div>
          <div className="sub-section-title">
            <p></p>
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
                <h4>{/* <a href="">Lorem Ipsum</a> */}</h4>
                <p>Hire dedicated engineers on a full-time basis.</p>
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
                <h4>{/* <a href="">Sed ut perspici</a> */}</h4>
                <p>
                  You can also choose to hire on part-time or hourly basis,
                  whatever fits your need.
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
                <h4>{/* <a href="">Magni Dolores</a> */}</h4>
                <p>
                  Hire single developer or build your own team of
                  cross-functional engineers or developers with similar
                  skill-set.
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
                <h4>{/* <a href="">Nemo Enim</a> */}</h4>
                <p>
                  Experienced to work independently or in collaboration with
                  existing client team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-12 col-md-12"></div>
          </div>

          <div className="row">
            <h3 className="value-box icon-box  aos-init aos-animate ">
              VALUE FOR YOU…!!!
            </h3>

            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-transparency"></i>

                <p>
                  TRANSPARENT ENGAGEMENT MODELS WITH COMPREHENSIVE REPORTING
                  SYSTEM
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i className="bi bi-calendar4-week"></i>
                {/* <h4>
                  <a href="#">Eiusmod Tempor</a>
                </h4> */}
                <p>
                  {" "}
                  ACCESS TO A WIDE RANGE OF EXPERIENCED IT ENGINEERS WITH
                  DIVERSE SKILL SETS{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-chat-left-fill"></i>
                {/* <h4>
                  <a href="#">Magni Dolore</a>
                </h4> */}
                <p>DIRECT COMMUNICATION CHANNELS THROUGH VARIOUS MODES</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <i className="bi bi-calendar4-week"></i>

                <p>
                  DEDICATED PROJECT MANAGER AS SINGLE POINT OF DELIVERY CONTACT
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <i className="bi bi-card-list"></i>

                <p>TRUSTED IP PROTECTION MECHANISMS</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-card-checklist"></i>

                <p>RIGHT TO CHOOSE TEAM AS PER YOUR SET CRITERIA</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <i className="bi bi-fast-forward"></i>

                <p>FAST RAMP-UP, RAMP-DOWN TIME</p>
              </div>
            </div>
            <div className="col-md-3 mt-4 mt-md-0">
              <div
                className="icon-box aos-init aos-animate buid-your-team-box"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-binoculars"></i>

                <p>ESCALATION MATRIX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about hire-developers-sec about-box">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Pay As You Go</h2>
          </div>
          <div className="sub-section-title">
            <p>
              {/* Hire dedicated developers from our team at a reasonable price,
              customized 100% as per your requirements. We offer world-class
              development skills with a strong inhouse team of 300+ dedicated
              web, mobile app and software developers. */}
            </p>
          </div>
          {/* <div className="row">
            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-file"></i>
                </div>
                <h4>8 hours/day</h4>
                <h4>5 days/weeks</h4>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="icon-box">
                <div className="icon">
                  <p>full time</p>
                </div>
                <h4>4 hours/day</h4>
                <h4>5 days/weeks</h4>
              </div>
            </div>

            <div
              className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <div className="icon-box">
                <div className="icon">
                  <i className="bx bx-layer"></i>
                </div>
                <h4>Starts with 40 hours</h4>
              </div>
            </div>
          </div> */}
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-12 mt-5 "></div>
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{ marginTop: "20px" }}
            >
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box primary-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Full-Time
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <h5 class="text-center d-block text-dark hr-text">
                  8 hours/day{" "}
                </h5>
                <h5 className="text-center d-block text-dark hr-text">
                  5 days/weeks
                </h5>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{ marginTop: "20px" }}
            >
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box yellow-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Part-Time
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <h5 className="text-center d-block text-dark hr-text">
                  8 hours/day{" "}
                </h5>
                <h5 className="text-center d-block text-dark hr-text">
                  5 days/weeks
                </h5>
              </div>
            </div>
            <div
              className="col-12 col-md-6 col-lg-4"
              style={{ marginTop: "20px" }}
            >
              <div className="core-expertise-box bg-white position-relative">
                <div className="core-inner-box lightBlue-bg-color">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style-2">
                      Hourly Basis
                    </a>
                    <div className="circle"></div>
                  </div>
                  {/* <p>HOURLY BASIC</p> */}
                </div>
                <h5 className="text-center d-block text-dark hr-text">
                  Starts with 40 hours
                </h5>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Whats Next */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>What's Next ?</h2>
            {/* <p>Software Development Outsourcing</p> */}
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Share Requirements</a>
                </h4>
                <p className="service-fill">
                  Our team will analyze project requirements and select the most
                  apt developers best suited for tech stack.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Discuss Project Details</a>
                </h4>
                <p className="service-fill">
                  Our team will reach out to discuss project related queries and
                  to offer the best solution for given business scenario.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <a href="#">Review Engagement Terms</a>
                </h4>
                <p className="service-fill">
                  Based on the details provided, you can choose the engagement
                  model & timelines for project execution.
                </p>
              </div>
            </div>
            <div className="col-md-6 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">Let's create another success-story</a>
                </h4>
                <p className="service-fill">
                  We mutually agree on a timeline and costing, define milestones
                  and move forward to creating another success-story
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
export default BuildYourDedicatedTeam;
