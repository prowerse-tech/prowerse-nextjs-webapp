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
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h4 className="entry-title">
                  <span style={{ color: '#ff8050' }}>
                    FOR A PRODUCT COMPANY IN HEALTH, WELLNESS & FITNESS DOMAIN
                  </span>
                </h4>

                <div className="entry-content entry-content-desc">
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>CLIENT PROFILE</span>
                  </h3>
                  <p>
                    <b>
                      Our client offers a marketplace, a web and app platform
                      for their customers to promote healthier and fitter
                      lifestyle.
                    </b>
                  </p>
                  <p>
                    Their main customers are personal trainers, nutritionists,,
                    etc. Mobile apps on iOS & Android caters to users from
                    Norway, Sweden & Lithuania. Solution also offers platform
                    for health professionals to enrol & offer services.
                  </p>
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>BUSINESS SCENARIO</span>
                  </h3>

                  <p>
                    The initial MVP was developed by client himself as a lone
                    contributor. The client wanted to progress the product
                    journey from the existing MVP to a scalable product offering
                    by:
                  </p>
                  <ul>
                    <li>Setting up a product team</li>
                    <li>
                      Reviewing and adjusting tech stacks in line with final
                      version of business requirement
                    </li>
                    <li>
                      Setting up a product development team for native apps
                      development and continuous delivery cycle for the same
                    </li>
                  </ul>
                  <h3 className="sidebar-title">
                    <span style={{ color: '#ff8050' }}>PROWERSE APPROACH</span>
                  </h3>
                  <ul>
                    <li>
                      Prowerse reviewed MVP tech stacks and analyzed whether it
                      can continue in release- ready project as well
                    </li>
                    <li>
                      Adjusted and altered tech stacks in journey from MVP to
                      release ready
                    </li>
                    <li>Removing PHP based APIs with Node JS</li>
                    <li>
                      Using ReactNative to maintain correct balance between
                      availability of native features and maintaining single
                      source for cross platform app
                    </li>
                    <li>
                      Ensured setting-up of cloud IT infrastructure, and CI/CD
                      pipelines to make release cycles shorter and more
                      effective
                    </li>
                    <li>
                      Prowerse managed, prioritized and groomed product backlog
                      to ship as many feature and fixes possible in short 1 week
                      delivery webs
                    </li>
                    <li>
                      The approach for creating database backups at predefined
                      intervals making it fault-tolerant were recommended and
                      implemented
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
                      Rapid productization and reduced GO-TO-MARKET time by 20%
                    </li>
                    <li>
                      Cost Reduction: Reduced business expenses by about 30%
                    </li>
                    <li>
                      Scaled product development team to deliver as many feature
                      on top of bare bones CII
                    </li>
                    <li>
                      Enabling client to focus on market expansion strategy
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
                      <h3>KNOW MORE ABOUT OUR CLIENT</h3>
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

                <div className="sidebar-item search-form"></div>
                {/* <!-- End sidebar search formn--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>TOOLS & TECHNOLOGIES</span>
                </h3>
                <div className="sidebar-item categories">
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Tools:</span> VS Code,
                    Jenkins
                  </p>
                  <p>
                    <span style={{ fontWeight: 'bold' }}>Technologies:</span>{' '}
                    React Native, ReactJS, HTML, AWS, MySql
                  </p>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">
                  <span style={{ color: '#ff8050' }}>CLIENT REVIEWS</span>
                </h3>
                <div className="sidebar-item recent-posts">
                  <p>
                    Development results are great and skills of the developers
                    are effective. Communication as an aspect is given high
                    regard. Overall good value for money.
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
