import React, { useEffect } from 'react'
import Footer from '../../Pages/Footer'
import { Link } from 'react-router-dom'

function JobDescription() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="hero-blog" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#CAREERS</h1>
              <h5>
                At Prowerse, we believe in offering much more than just a job.
                We strive to give you a full-fledged growing career driven with
                passion.
              </h5>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Blog Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h2 className="entry-title">Rust Engineer</h2>

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

                <div className="entry-content">
                  <p>
                    We seek a highly motivated and experienced Rust developer to
                    join our team. We are especially interested in candidates
                    who can demonstrate an aptitude for problem solving and
                    critical thinking. The team works on wide variety of crypto
                    solutions and algorithms.{' '}
                  </p>
                  <p>
                    Ultimately, you’ll be contributing to development of crypto
                    product for decentralized economy.{' '}
                  </p>
                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>Write effective, scalable code.</li>
                      <li>
                        Develop back-end components to improve responsiveness
                        and overall performance.{' '}
                      </li>
                      <li>Integrate user-facing elements into applications.</li>
                      <li>Test and debug programs.</li>
                      <li>Improve functionality of existing systems. </li>
                      <li>Assess and prioritize feature requests. </li>
                      <li>
                        Coordinate with internal teams to understand user
                        requirements and provide technical solutions.
                      </li>
                    </ul>
                  </p>
                  <h3>REQUIREMENTS</h3>
                  <p>
                    <ul>
                      <li>
                        Ideally 3+ years of experience in software industry,
                        fluent with the Rust programming language.
                      </li>
                      <li>
                        Ability to work creatively and independently on
                        long-term technical problems.
                      </li>
                      <li>
                        Understanding of core concepts in data structures,
                        algorithms.{' '}
                      </li>
                      <li>
                        Be fluent with best practices related to software
                        testing, peer code reviews, continuous integration etc.{' '}
                      </li>
                      <li>
                        Familiarity with front-end technologies (like JavaScript
                        and HTML5).{' '}
                      </li>
                      <li>Good problem-solving skills. </li>
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
              {/* <!-- End blog entry --> */}

              {/* <!-- End blog author bio --> */}
            </div>
            {/* <!-- End blog entries list --> */}

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
export default JobDescription
