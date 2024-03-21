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

      {/* <!-- ======= Job Description Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h2 className="entry-title">Business Development Executive </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      Experience: 2+ Years
                    </li>

                    <li className="d-flex align-items-center">
                      Location: Hybrid
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>
                        Source new sales opportunities through outbound
                        approaches for Product Engineering services offered by
                        Prowerse.
                      </li>
                      <li>
                        Understand customer needs and requirements and achieve
                        set quote of approaches and qualified leads.{' '}
                      </li>
                      <li>
                        Involve Prowerse management for further development and
                        closure.
                      </li>
                      <li>
                        Increase LinkedIn networking and footfall on Prowerse
                        LinkedIn page.
                      </li>
                      <li>
                        Research accounts, identify key players and generate
                        interest.
                      </li>
                      <li>
                        Maintain and expand your database of prospects within
                        assigned territories and effectively documenting them on
                        CRM.{' '}
                      </li>
                      <li>Team with channel partners to build pipeline.</li>
                      <li>
                        Perform effective online demos to prospects and
                        preparing weekly/monthly/quarterly reports for internal
                        discussions.
                      </li>
                    </ul>
                  </p>
                  <h3>REQUIREMENTS AND SKILLS</h3>
                  <p>
                    <ul>
                      <li>
                        Proven inside sales experience with IT Product/Services
                        sales.
                      </li>
                      <li>
                        Proficient with corporate productivity and web
                        presentation tools.{' '}
                      </li>
                      <li>Experience working with HubSpot or similar CRM.</li>
                      <li>
                        Effective verbal and written communications skills and
                        knowledge of using LinkedIn and other mediums for Lead
                        generation.
                      </li>
                      <li>Strong listening skills.</li>
                      <li>Ability to manage time effectively. </li>
                      <li>Bachelor's/Master's degree or equivalent.</li>
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
              {/* <!-- End job description entry --> */}
            </div>
            {/* <!-- End job description list --> */}

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
              </div>
              {/* <!-- End sidebar --> */}
            </div>
            {/* <!-- End job description sidebar --> */}
          </div>
        </div>
      </section>
      {/* <!-- End job description Single Section --> */}

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default JobDescription
