import React, { useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section id="service-about" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Services</h1>
              <br />
              <h5>
                In the realm of tech services, we're not just providers; we're
                architects of solutions. From code intricacies to system
                scalability, our tech services embody precision and
                adaptability.
              </h5>
              <br />
              <h5>
                {" "}
                Whether it's troubleshooting challenges or envisioning future
                enhancements, we're your partners in navigating the
                ever-evolving landscape of technology.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Service Section ======= --> */}
      <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Ingenious Product Engineering</h2>
          </div>

          <div className="sub-section-title">
            <p>
              Crafting innovative solutions through meticulous code and creative
              design, our product engineering capabilities transforms ideas into
              tangible, user-centric realities.
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

      {/* <!-- ======= Services Section ======= --> */}
      <section
        id="services"
        className="services "
        style={{ padding: "0px 0px" }}
      >
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-md-12 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <a href="#">BUILD YOUR DEDICATED TEAM</a>
                </h4>
                <p className="service-fill">
                  Expand your software development capabilities and minimize
                  management efforts with a dedicated Prowerse development team
                  managed by a PM from Prowerse who regularly reports to you and
                  collaborates on all important decisions in the project.
                </p>
                <div className="lets-talk-service">
                  <Link className="cta-btn" to="/build-your-dedicated-team">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Tech======= --> */}
      <section id="services" className="services techstack-section">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Technology</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Our tech stacks are the backbone of our wizardry—powered by a
              blend of the latest frameworks, languages, and tools. We thrive on
              staying at the forefront of technology to craft solutions that are
              not just efficient but also future-ready.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Backends
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  {" "}
                  Microsoft .Net & .Net Core, Java, PHP, Node.js, Python
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      AI/ML
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Azure ML, LUIS, BOT Framework, TensorFlow
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      CloudOps
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Amazon Web Services, Microsoft Azure, Google Cloud Platform
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      DevOps
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Azure Pipelines, TeamCity, Kubernetes, Jenkins, Docker
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Mobility
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  iOS, Android, React Native, Xamarin, Flutter, Ionic
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Frontends
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  PWA, Angular, React, Vue, ASP.NET
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker">
                      UI Bundles
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Bootstrap, Materialize, Semantic, PureCSS, FluentUI
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      UX
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Sketch, InVision, Figma, Adobe Suite, Balsamiq
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker text-style">
                      Validation
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Selenium, Katalon, Cucumber, Sauce Labs, Cross Browser
                  Testing, Appium, JMeter, SoapUI
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="example-wrap">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Databases
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  MSSQL, MySQL, MongoDB, Redis, Cassandra, Azure CosmosDB, AWS
                  DynamoDB
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div class="example-wrap">
                  <div class="button-wrap-1 example">
                    <a href class="clicker">
                      (RPA + GenAI)
                    </a>
                    <div class="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">Intelligent Automation</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="example-wrap">
                  <div className="button-wrap-1 example">
                    <a href className="clicker text-style">
                      Blockchain
                    </a>
                    <div className="circle"></div>
                  </div>
                </div>

                <p className="service-fill techstack">
                  Web3, Ether, WASM, Bluzelle, Polkadot, Whisper, MetaMask, Rust
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Techstack --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  );
}
export default Service;
