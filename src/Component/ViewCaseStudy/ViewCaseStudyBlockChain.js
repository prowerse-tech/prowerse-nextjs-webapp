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
                    FOR A BLOCKCHAIN SOLUTION COMPANY WITH THE VISION OF
                    INTRODUCING THE WORLD’S FIRST DATA CURRENCY
                  </span>
                </h4>

                <div className="entry-content">
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>CLIENT PROFILE</span>
                  </h3>
                  <p>
                    <b>
                      Our client aims to disrupt the market through the
                      introduction of their innovative digital system.
                    </b>
                  </p>
                  <p>
                    Through their smart data technology and innovative
                    Blockchain protocols, they are working towards solving and
                    shaping the future of Web3.
                  </p>
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    After initial set of meetings with the client, we could gain
                    an understanding on existing business scenarios at their
                    end:
                  </p>
                  <ul>
                    <li>
                      No existing infrastructure management process with limited
                      consideration on infrastructure landscaping.
                    </li>
                    <li>
                      Skill-gap in existing team for catering to their business
                      objectives.
                    </li>
                    <li>
                      Need to roll-out quicker feature- releases for sustaining
                      early-mover advantage for their disruptive offering.
                    </li>
                    <li>Spilling costs.</li>
                    <li>
                      Lack of availability of skilled resources in DevOps, Test
                      Automation and for supporting investor needs.
                    </li>
                  </ul>

                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>PROWERSE APPROACH</span>
                  </h3>
                  <ul>
                    <li>
                      Implemented Infrastructure as Code (IaC) for effective
                      infrastructure landscaping.
                    </li>
                    <li>
                      Helped to optimize infrastructure provisioning using
                      opensource solutions for effective cost-saving.
                    </li>
                    <li>Implementing web3 and crypto infra ecosystem.</li>
                    <li>Designed and provisioned their monitoring stack.</li>
                    <li>
                      Contributed in implementation of their archival strategy.
                    </li>
                    <li>
                      Performed Pentest as part of DevSecOps alongwith
                      infrastructure automation.
                    </li>
                    <li>Prepared cloud-agnostic mining agent distribution</li>
                    <li>
                      Designed and configured CI/CD/CT pipelines with nightly
                      build and continuous test-runs
                    </li>
                    <li>
                      Coordinating with their existing team of Rust engineers
                      and being first point of contact for investor queries
                      through an ITIL- certified Prowerse engineer
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
                      Rapid productization and enhanced process efficiency
                      helped client retain their early-mover advantage
                    </li>
                    <li>
                      Cost reduction: facilitating disposable infrastructure for
                      individual test instances itself resulted in 40% annual
                      cost-reduction
                    </li>
                    <li>
                      Access to skilled resources, enabling client to fill their
                      existing resource gap
                    </li>

                    <li>
                      Availability of team working round-the-clock for
                      addressing business and investors needs
                    </li>
                  </ul>
                </div>
              </article>

              {/* <!-- End blog author bio --> */}
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" className="widgetContainer widget_text">
                  {' '}
                  <div className="textwidget">
                    <div className="contact-bar">
                      <h3>TO KNOW MORE ABOUT OUR CLIENT</h3>
                      <p className="text-inner">
                        To start a dialogue with our consultant, please complete
                        our contact form and we shall get in touch with you
                        shortly.
                      </p>
                      <div className="contact-bttn">
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
                    <span style={{ fontWeight: 'bold' }}>Tools:</span> Selenium
                    for Automation Testing, Jenkins, Gitlab, JMeter, Cypress,
                    Github
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Technologies:</span>{' '}
                    Terraform, AWS, Google Cloud Platform, Azure
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    The core project team has remained the same since last 25
                    months which is a great testament to Prowerse management.
                    They are our go to partners for new requirements due to the
                    transparent and loyal relationship maintained through
                    various ups and downs.
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
