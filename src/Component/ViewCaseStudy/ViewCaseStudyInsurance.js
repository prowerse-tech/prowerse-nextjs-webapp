import React, { useEffect } from 'react'
import Footer from '../../Pages/Footer'
import { Link } from 'react-router-dom'

function ViewCaseStudyInsurance() {
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
                    FOR AN INSURANCE MAJOR WITH BUSINESS SPREAD ACROSS APAC, UK,
                    EUROPE
                  </span>
                </h4>

                <div className="entry-content">
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>CLIENT PROFILE</span>
                  </h3>
                  <p>
                    <b>
                      Our client provides comprehensive range of insurance
                      products globally for around 30 years now.
                    </b>
                  </p>
                  <p>
                    With major operations spread across APAC, UK and Europe,
                    they are a market leader having solutions designed to cater
                    to various customer needs around the world.
                  </p>
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    After initial set of interactions with client, we could gain
                    an understanding on existing business scenarios at their
                    end:
                  </p>
                  <ul>
                    <li>Extended product development lifecycles</li>
                    <li>Spilling costs</li>
                    <li>Lack of test automation</li>
                    <li>
                      Less visibility with management around product and feature
                      launches and associated timelines,
                    </li>
                    <li>
                      Unsynchronized priorities due to complex multi-vendor
                      relationships
                    </li>
                    <li>
                      Multiple product development planned but internal capacity
                      and above complexities creating hurdles
                    </li>
                  </ul>
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>PROWERSE APPROACH</span>
                  </h3>
                  <ul>
                    <li>
                      Carefully <b>organized skilled teams</b> for various
                      geographical GoToMarket objectives, enabling focused
                      approach and timely execution of action plans
                    </li>
                    <li>
                      <b>Facilitated quick product launches</b> and introducing
                      newer geographies without heavy time and cost investment
                    </li>
                    <li>
                      <b>Introduced Automation Testing </b> and automated sanity
                      test suites, making it accessible to various team leads,
                      resulting in significant effort optimization. Early error
                      detection and elimination of manual bottlenecks boosted
                      system quality and scalability
                    </li>
                    <li>
                      <b>Handled designing needs </b>
                      through crisp frontends suiting various geographical
                      tastes, which resulted in encouraging footfalls on various
                      webpages
                    </li>
                    <li>
                      <b>Uniform management of efforts </b>
                      put by the entire team enabling clear visibility of time
                      and cost investment for client
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
                      Enhanced process efficiency and system quality improvement
                      through early error detection
                    </li>
                    <li>
                      Cost Reduction: Reduced business expenses by about 40%
                    </li>
                    <li>
                      Enhanced delivery visibility: Around key business
                      performance indicators for the management
                    </li>
                    <li>Simplifying multi - vendor complexities</li>
                    <li>
                      improved accuracy through introduction of automation
                      testing and other key initiatives
                    </li>
                  </ul>
                </div>
              </article>
            </div>
            {/* <!-- End blog entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {' '}
                  <div class="textwidget">
                    <div class="contact-bar">
                      <h3>TO KNOW MORE ABOUT OUR CLIENT</h3>
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

                <div className="sidebar-item search-form"></div>
                {/* <!-- End sidebar search formn--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>TOOLS & TECHNOLOGIES</span>
                </h3>
                <div className="sidebar-item categories">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Tools:</span> Salenium
                    for Automation Testing, Cucumber for BDD
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Technologies:</span>{' '}
                    Microsoft .NET, Python, AWS, SQL Server, Wordpress
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>
                      Project Management Methodology:{' '}
                    </span>{' '}
                    Kanban in Open Project
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    After engaging with 6 different tech teams over last 8
                    years, we could finally find someone who understands our
                    business needs to a decent extent. We've had ups and downs
                    surely and would continue to have them, but we have the
                    Prowerse team around, whenever needed. They are an integral
                    part of our business already.
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
export default ViewCaseStudyInsurance
