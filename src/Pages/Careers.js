import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import JoinUsForm from './../Component/JoinUsForm/JoinUsForm'

function Careers() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [currentSlide, setCurrentSlide] = useState(0)
  const images = [
    [
      'assets/img/portfolio/portfolio-1.jpg',
      'assets/img/portfolio/portfolio-2.jpg',
      'assets/img/portfolio/portfolio-3.jpg',
    ],
    [
      'assets/img/portfolio/portfolio-4.jpg',
      'assets/img/portfolio/portfolio-5.jpg',
      'assets/img/portfolio/portfolio-6.jpeg',
    ],
  ]

  const totalSlides = images.length

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1)
  }

  return (
    <>
      <section id="hero-career" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-8">
              <br />
              <br />
              <br />
              <br />
              <h1>Become a Part of Prowerse Family...</h1>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <h5>
                We are a team of fast-driven professionals who are not afraid to
                think out of the box and pursue excellence.
              </h5>
              <h5>
                A career with Prowerse will motivate you to aspire high and
                perform your best without any obstructions from the hierarchy.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="portfolio" class="portfolio">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Life at Prowerse</h2>
            </div>

            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
              style={{ marginTop: '20px' }}
            >
              <div className="carousel">
                <button className="prev" onClick={prevSlide}>
                  &#10094;
                </button>
                <button className="next" onClick={nextSlide}>
                  &#10095;
                </button>
                <div className="slides col-lg-4 col-md-6 portfolio-item">
                  {images.map((imageGroup, index) => (
                    <div
                      key={index}
                      className={
                        index === currentSlide ? 'slide active' : 'slide'
                      }
                    >
                      {imageGroup.map((image, subIndex) => (
                        <img className="img-responsive"
                          key={subIndex}
                          src={image}
                          alt={`Slide ${index + 1} Image ${subIndex + 1}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services ">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Find Your Place</h2>
            </div>

            <div className="row" style={{ marginTop: '20px' }}>
              <div className="job-list__wrapper mb-6"></div>
              <div className="col-md-6">
                <Link
                  to="/job-description-python"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="row justify-content-between align-items-center">
                      <span className="col-md-4 color--heading">
                        <i className="bi bi-filetype-py"></i>

                        <span className="position position-title">
                          Python Engineer
                        </span>
                      </span>
                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>3+ years Experience
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>Hybrid
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  to="/job-description-rust"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="row justify-content-between align-items-center">
                      <span className="col-md-4 color--heading">
                        <i className="bi bi-briefcase"></i>

                        <span className="position position-title">
                          Rust Engineer
                        </span>
                      </span>
                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>3+ years Experience
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>Hybrid
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  to="/job-description-automation"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="row justify-content-between align-items-center">
                      <span className="col-md-5 color--heading">
                        <i className="bi bi-server"></i>

                        <span className="position position-title">
                          Test Automation Engineer
                        </span>
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> 4-5 years
                        Experience
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> Hybrid
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="col-md-6">
                <Link
                  to="/job-description-devops"
                  className="card p-0 mb-3 border-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <span className="row justify-content-between align-items-center">
                      <span className="col-md-5 color--heading">
                        <i className="bi bi-cpu"></i>

                        <span className="position position-title">
                          DevOps Engineer
                        </span>
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i>3+ years Experience
                      </span>

                      <span className="col-5 col-md-3 my-3 my-sm-0 color--text">
                        <i className="fas fa-clock mr-1"></i> Hybrid
                      </span>
                    </span>
                  </div>
                </Link>
              </div>
              {/* card-last */}
            </div>
          </div>
        </section>
      </main>
      {/* <!-- End #main --> */}

      <JoinUsForm />

      <section class="follow-us_new">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <h3>Follow us and stay connected for more updates on LinkedIn</h3>
              <a
                href="https://www.linkedin.com/company/prowerse/mycompany/"
                target="_blank"
                class="btn btn-lg btn-linkedin_new"
              >
                <i class="bx bxl-linkedin"></i> Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default Careers
