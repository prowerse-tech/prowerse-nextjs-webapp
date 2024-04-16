import React, { useEffect } from 'react'
import Footer from '../../Pages/Footer'
import { Link } from 'react-router-dom'

function Post3() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="d-flex align-items-center"></section>

      {/* <!-- ======= Blog Single Section ======= --> */}
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <a href="/blog-cloud">Hybrid Cloud - What, Why & How?</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i> Pradyuman Zala
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{' '}
                      <time datetime="2020-01-01">Oct 25, 20224</time>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    <h3>What is Hybrid Cloud?</h3>
                  </p>

                  <p>
                    A Hybrid Cloud amalgamates multiple cloud stacks to work
                    seamlessly. Hybrid Cloud workload combine public and private
                    clouds. It also includes on-premises infrastructure with
                    cloud workloads. All practical Hybrid Clouds contain
                    different cloud environments which are tightly
                    interconnected with each other.
                  </p>
                  <p>
                    Word 'hybrid' has its inspiration from concept of hybrid
                    cars! Hybrid cars offer drivability through two different
                    engines. A petrol and an electric motor. Each engine
                    operates differently, but together both results in moving
                    car in frugal way. Similarly, Hybrid Clouds leverage the
                    benefits of multiple clouds for given scenario. For e.g.,
                    using SES from AWS and MS-SQL from Azure.
                  </p>

                  <blockquote>
                    <p>
                      Hybrid Cloud combines public and private cloud resources
                      for flexibility and security. It optimizes costs while
                      ensuring scalability and control over sensitive data.
                    </p>
                  </blockquote>

                  <h3>Why is Hybrid Cloud required?</h3>
                  <p>
                    <b>
                      Hybrid Clouds solves many use cases. Following are few:
                    </b>
                  </p>
                  <p>
                    1. Direct move from legacy to public cloud may not be
                    practical move in many scenarios. Here migration can start
                    with moving less risky components such as storage, emailers
                    etc.
                  </p>
                  <p>
                    2. Many times, public cloud offers services which are not
                    possible in private infrastructure. Hybrid approach is best
                    suited for such scenarios.
                  </p>
                  <p>
                    3. To reduce dependency on single independent public cloud
                    service provider. It’s very risky to put service monitoring
                    solution on same region/zone/cloud service provider. Hybrid
                    Cloud resolves this by having monitoring stack in some other
                    public cloud infrastructure.
                  </p>
                  <p>
                    4. Making public cloud infrastructure exposed to internet &
                    then exposing private cloud to public cloud is very well
                    accepted security trade-off.
                  </p>

                  <p>
                    5. Greater control over cost by choosing best suited option
                    from all cloud providers.
                  </p>
                  <h3>How Hybrid Cloud works?</h3>
                  <p>
                    So how Hybrid Cloud communicate within? For a Hybrid Cloud
                    to work well, the connection between the separate clouds is
                    key. Public clouds, private clouds, and on-premises
                    infrastructure can connect to each other by API, VPN or WAN.
                    Hybrid Cloud is all about mixing many types of hosting
                    options. Following are usual cases of different type of
                    environments. Any combination of infrastructure is known as
                    Hybrid Cloud.
                  </p>

                  <p>
                    1.{' '}
                    <span style={{ color: '#ff8050', fontStyle: 'italic' }}>
                      Public Cloud:
                    </span>{' '}
                    A public cloud is a cloud service run by an independent
                    company with multiple data centers. Public clouds usually
                    offer 'slice' of infrastructure from much bigger
                    infrastructure. AWS, Azure, GCP are popular Public Clouds.
                  </p>
                  <p>
                    2.{' '}
                    <span style={{ color: '#ff8050', fontStyle: 'italic' }}>
                      Hosted Private Cloud:
                    </span>{' '}
                    In contrast to Public Cloud, HPCs don't ger 'slice' of
                    infra. Instead, they get the whole fruit. Usually, complete
                    infrastructure is reserved for one customer. There are
                    independent hosting providers offering service to host
                    private cloud.
                  </p>
                  <p>
                    3.{' '}
                    <span style={{ color: '#ff8050', fontStyle: 'italic' }}>
                      On-premises Private Cloud:
                    </span>{' '}
                    These are like HPCs. Only difference here is that owner of
                    infrastructure maintains it by themselves in private
                    instance of Data Centre. Usually, financial data sets are a
                    best case for these types of clouds.
                  </p>
                  <p>
                    4.{' '}
                    <span style={{ color: '#ff8050', fontStyle: 'italic' }}>
                      On-premises Non-cloud:
                    </span>{' '}
                    This is the model used by legacy systems. Owner of
                    infrastructure buys software licenses, installs, and
                    maintains hardware in private data center computers.
                  </p>
                </div>
              </article>
              {/* <!-- End blog entry --> */}
            </div>
            {/* <!-- End blog entries list --> */}

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
                        <a href="/contact">Let't Talk</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-item search-form"></div>
                {/* <!-- End sidebar search formn--> */}

                <h3 className="sidebar-title">Categories</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li>
                      <Link to="/blog-product">Product Engineering</Link>
                    </li>
                    <li>
                      <Link to="/blog-infra">Infrastructure</Link>
                    </li>
                    <li>
                      <Link to="/blog-cloud">Cloud</Link>
                    </li>
                  </ul>
                </div>
                {/* <!-- End sidebar categories--> */}

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-1.png" alt="" />
                    <h4>
                      <Link to="/blog-product">
                        The importance of effective product engineering strategy
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Jan 3, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-2.png" alt="" />
                    <h4>
                      <Link to="/blog-infra">
                        Infrastructure As Code and it's Relevance
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Sept 17, 2023</time>
                  </div>

                  <div className="post-item clearfix">
                    <img src="assets/img/blog/blog-3.png" alt="" />
                    <h4>
                      <Link to="/blog-cloud">
                        Hybrid Cloud - What, Why & How?
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Oct 25, 2022</time>
                  </div>
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
export default Post3
