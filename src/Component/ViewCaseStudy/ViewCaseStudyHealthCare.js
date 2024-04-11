import React, { useEffect } from 'react'
import Footer from '../../Pages/Footer'
import { Link } from 'react-router-dom'

function ViewCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section
        id="hero-casestudy"
        className="d-flex align-items-center"
      ></section>

      {/* <!-- ======= Blog Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h4 className="entry-title">
                  <span style={{ color: '#ff8050' }}>
                    FOR AN AFRICAN VENTURE IN HEALTHCARE
                  </span>
                </h4>

                <div className="entry-content entry-content-desc">
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>CLIENT PROFILE</span>
                  </h3>
                  <p>
                    <b>
                      Our client aims to reach every African household with a
                      bouquet of comprehensive healthcare services.
                    </b>
                  </p>
                  <p>
                    Our solution aims to tackle lack of availability of medical
                    services in the region through our machine learning enabled
                    diseases prediction services, helping users preempt serious
                    medical situation in time.
                  </p>

                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    After understanding client requirements through initial
                    meetings, we convened upon developing ML algorithm for
                    disease prediction, setting-up end-to-end product
                    development life cycle. Rapid feature deliveries as well was
                    expected from Prowerse to make MVP more appealing to early
                    adopters.
                  </p>
                  <p>
                    We knew that client was on a tight budget with limited
                    timeline and was then dealing with multiple freelancers with
                    negligible control and coordination between them and that
                    with our client.
                  </p>

                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>PROWERSE APPROACH</span>
                  </h3>
                  <p>
                    PROWERSE WORKED ON FOUR PARALLELS TO SPEED UP EARLY MV
                    PRELEASE
                  </p>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 'bold' }}>Firstly</span>{' '}
                      defined & developed ground work for diseases prediction
                      algorithm.
                    </li>
                    <li>
                      <span style={{ fontWeight: 'bold' }}>Secondly,</span>{' '}
                      finalized on PWA as choice of app stack. This allowed us
                      to combine Android, iOS, Web & Admin portals into one
                      single source offering, enabling client to roll out quick
                      weekly updates to enhance MVP's desired impact.
                    </li>
                    <li>
                      <span style={{ fontWeight: 'bold' }}>Thirdly,</span>{' '}
                      ensured set up of cloud infra IT infrastructure, and CI-CD
                      pipelines to make release cycles shorter and more
                      effective.
                    </li>
                    <li>
                      <span style={{ fontWeight: 'bold' }}>Importantly,</span>{' '}
                      streamlined communication channels with existing
                      freelancing units and delivering towards one common
                      objective.
                    </li>
                  </ul>
                </div>

                <div
                  className="widgetContainer"
                  style={{ padding: '5px', color: 'white' }}
                >
                  <h3 className="sidebar-title">
                    <div className="contact-bar">
                      <h3>VALUE PROPOSITIONS</h3>
                    </div>
                  </h3>
                  <ul>
                    <li>
                      Rapid Productization: Shortened release cycles by 75% to 1
                      week to delivery freshly build features in MVP
                    </li>
                    <li>
                      Cost Reduction: About 45% reduction in engineering costs
                    </li>
                    <li>
                      Enhanced Delivery Efficiency: Helped client present more
                      APT business case in front of investors and early adopters
                    </li>
                  </ul>
                </div>
              </article>

              {/* <!-- End blog author bio --> */}
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {' '}
                  <div class="textwidget">
                    <div class="contact-bar">
                      <h3>KNOW MORE ABOUT OUR CLIENT</h3>
                      <p className="text-inner">
                        To start a dialogue with our consultant, please complete
                        our contact form and we shall get in touch with you
                        shortly.
                      </p>
                      <div class="contact-bttn">
                        <Link to="/contact">Let's Talk</Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h3 className="sidebar-title">Search</h3> */}
                <div className="sidebar-item search-form"></div>
                {/* <!-- End sidebar search formn--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>TOOLS & TECHNOLOGIES</span>
                </h3>
                <div className="sidebar-item categories">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Tools:</span> PWA,
                    Python, Django, MS Azure, Lighthouse, MySQL
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Technologies:</span> VS
                    Code, Selenium for Automation Testing, Cucumber for BDD
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    Prowerse is best suited for emerging brands eying quality
                    deliveries at optimum costs. Glad we found them. Can't speak
                    higher of any other brand.
                  </p>
                </div>
                {/* <!-- End sidebar recent posts--> */}

                {/* <!-- End sidebar tags--> */}
              </div>
              {/* <!-- End sidebar --> */}
            </div>
            {/* <!-- End blog sidebar --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Blog Single Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default ViewCaseStudy
