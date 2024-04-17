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

      {/* <!-- ======= job description Single Section ======= --> */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <h2 className="entry-title">DevOps Engineer </h2>

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
                    To help us build functional systems that improve customer
                    experience we are now looking for an experienced DevOps
                    Engineer with experience in Infrastructure optimization.
                    They will be responsible for deploying product updates,
                    identifying production issues and implementing integrations
                    that meet our customers' needs. If you have a solid
                    background in software engineering and are familiar with
                    Python, we’d love to speak with you.{' '}
                  </p>
                  <h3>RESPONSIBILITIES</h3>
                  <p>
                    <ul>
                      <li>
                        Work with development teams to ideate software
                        solutions
                      </li>
                      <li>
                        Building and setting up new development tools and
                        infrastructure
                      </li>
                      <li>
                        Working on ways to automate and improve development and
                        release processes
                      </li>
                      <li>
                        Ensuring that systems are safe and secure against
                        cybersecurity threats
                      </li>
                      <li>Deploy updates and fixes</li>
                      <li>
                        Perform root cause analysis for production errors
                      </li>
                      <li>
                        Develop scripts to automate infrastructure provision
                      </li>
                      <li>
                        Working with software developers and software engineers
                        to ensure that development follows established processes
                        and works as intended
                      </li>
                    </ul>
                  </p>
                  <h3>TECHNOLOGIES WE USE</h3>
                  <p>
                    <ul>
                      <li>GitOps – GitHub, GitLab, BitBucket</li>
                      <li>
                        CI/CD – Jenkins, Circle CI, Travis CI, TeamCity, Azure
                        DevOps
                      </li>
                      <li>Containerization – Docker, Swarm, Kubernetes</li>
                      <li>Provisioning – Terraform</li>
                      <li>CloudOps – Azure, AWS, GCP</li>
                      <li>
                        Observability – Prometheus, Grafana, GrayLog, ELK
                      </li>
                    </ul>
                  </p>
                  <h3>QUALIFICATIONS</h3>
                  <p>
                    <ul>
                      <li>Graduate / Postgraduate in Technology sector</li>
                      <li>
                        Proven experience as a DevOps Engineer or similar role
                      </li>
                      <li>Effective communication and teamwork skills</li>
                    </ul>
                  </p>
                </div>
                <div className="contact-bar">
                  {' '}
                  <div className="contact-bttn">
                    <Link to="/post-resume">Apply Now</Link>
                  </div>
                </div>
              </article>
              {/* <!-- End job description entry --> */}
            </div>
            {/* <!-- End job description list --> */}

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" className="widgetContainer widget_text">
                  {' '}
                  <div className="textwidget">
                    <div className="contact-bar">
                      <h3>
                        Looking for
                        <br /> Certified &amp; <br />
                        Experienced <br />
                        <span className="red-text">Developers ?</span>
                      </h3>
                      <ul>
                        <li>50+ Experts</li>
                        <li>Flexible Engagement</li>
                        <li>NDA Protection</li>

                        <li>24X7 Support</li>
                      </ul>
                      <div className="contact-bttn">
                        <Link to="/contact">Let's Talk</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item search-form"></div>

                {/* <!-- End sidebar job description--> */}
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
