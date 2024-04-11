import React, { useEffect } from 'react'
import Footer from '../../Pages/Footer'
import { Link } from 'react-router-dom'

function JobDescription() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section
        id="hero-casestudy"
        className="d-flex align-items-center"
      ></section>

      {/* <!-- ======= Job Description Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h2 className="entry-title">Python Engineer</h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      Experience: 3+ Years
                    </li>

                    <li className="d-flex align-items-center">
                      Location: Hybrid
                    </li>
                  </ul>
                </div>

                <div className="entry-content entry-content-desc">
                  <p>
                    We are looking for a Python Developer to join our
                    engineering team and help us develop and maintain various
                    software products.
                  </p>
                  <p>
                    Python Developer responsibilities include writing and
                    testing code, debugging programs and integrating
                    applications with third-party web services. To be successful
                    in this role, you should have experience using server-side
                    logic and work well in a team.{' '}
                  </p>
                  <p>
                    Ultimately, you’ll build highly responsive web applications
                    that align with our business needs.
                  </p>

                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>Write effective, scalable code.</li>
                      <li>
                        Develop back-end components to improve responsiveness
                        and overall performance
                      </li>
                      <li>Integrate user-facing elements into applications.</li>
                      <li>Test and debug programs.</li>
                      <li>Improve functionality of existing systems. </li>
                      <li>
                        Implement security and data protection solutions.{' '}
                      </li>
                      <li>Assess and prioritize feature requests.</li>
                      <li>
                        Coordinate with internal teams to understand user
                        requirements and provide technical solutions.
                      </li>
                    </ul>
                  </p>

                  <h3>REQUIREMENTS</h3>
                  <p>
                    <ul>
                      <li>Work experience as a Python Developer.</li>
                      <li>
                        Expertise in at least one popular Python framework (like
                        Django, Flask or Pyramid).{' '}
                      </li>
                      <li>Knowledge of object-relational mapping (ORM).</li>
                      <li>
                        Familiarity with front-end technologies (like JavaScript
                        and HTML5).
                      </li>
                      <li>Team spirit .</li>
                      <li>Good problem-solving skills. </li>
                      <li>
                        BSc in Computer Science, Engineering or relevant field.
                      </li>
                    </ul>
                  </p>
                </div>
                <div class="contact-bar">
                  {' '}
                  <div class="contact-bttn">
                    <Link to="/post-resume">Apply Now</Link>
                  </div>
                </div>
              </article>
              {/* <!-- End Job Description entry --> */}
            </div>
            {/* <!-- End Job Description entries list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {' '}
                  <div class="textwidget">
                    <div class="contact-bar">
                      <h3>
                        Looking for
                        <br /> Certified &amp; <br />
                        Experienced <br />
                        <span class="red-text">Developers ?</span>
                      </h3>
                      <ul>
                        <li>50+ Experts</li>
                        <li>Flexible Engagement</li>
                        <li>NDA Protection</li>
                        <li>24X7 Support</li>
                      </ul>
                      <div class="contact-bttn">
                        <Link to="/contact">Let's Talk</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item search-form"></div>

                {/* <!-- End sidebar Job Description--> */}
              </div>
              {/* <!-- End sidebar --> */}
            </div>
            {/* <!-- End Job Description sidebar --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Job Description Single Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default JobDescription
