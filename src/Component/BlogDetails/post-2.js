import React from "react";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

function Post2() {
  return (
    <>
      <section className="d-flex align-items-center">
      </section>

      {/* <!-- ======= Blog Single Section ======= --> */}
      <section id="blog" class="blog">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-lg-8 entries">
              <article className="entry entry-single">
                <div className="entry-img">
                  <img
                    src="assets/img/blog/blog-2.png"
                    alt=""
                    class="img-fluid"
                  />
                </div>

                <h2 className="entry-title">
                  <Link to="/blog-infra">
                    Infrastructure As Code and it's Relevance
                  </Link>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-person"></i> Pradyuman Zala
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-clock"></i>{" "}
                      <time datetime="2020-01-01">Sept 17, 2023</time>
                    </li>
                  </ul>
                </div>

                <div className="entry-content">
                  <p>
                    Infrastructure as Code (IaC) provisions infrastructure
                    through code instead of handling with manual efforts. IaC
                    results into configuration files which contains
                    infrastructure specifications.
                  </p>

                  <p>
                    In the times of containerization, it is very essentials that
                    same environment is provisioned every time.
                  </p>

                  <blockquote>
                    <p>
                      Every DevOps Engineer's nightmare is undocumented, ad-hoc
                      configuration changes.
                    </p>
                  </blockquote>

                  <p>
                    Codifying configuration specifications ensures that latest
                    versions are delivered in every build. Having infrastructure
                    as code also means that infra is divided in meaningful
                    reusable components. How about having common Kubernetes
                    cluster specifications with all common stack preloaded?
                  </p>

                  <p>
                    Provisioning infra with IaC relieves developers from
                    manually provisioning servers, storage, and other
                    infrastructure components. There's a great set of tool set
                    is available to accomplish the IaC. Tool set can be used to
                    know desired state of infrastructure, which then can be
                    provisioned. It can be used for configuration management to
                    maintain systems in the desired state. Widely used tooling
                    to implement IaC are
                  </p>
                  <ul>
                    <li>Terraform</li>
                    <li>Chef</li>
                    <li>Puppet</li>
                    <li>Ansible</li>
                  </ul>
                  <p>IaC can be achieved with different ways.</p>

                  <p>
                    A <span style={{ fontWeight: "bold" }}>Declarative</span>{" "}
                    approach maintains the desired state of the system,
                    including resources required. Here list of the current state
                    of system objects is maintained. This makes infrastructure
                    simpler to manage.
                  </p>

                  <p>
                    An <span style={{ fontWeight: "bold" }}>Imperative</span>{" "}
                    approach defines the commands needed to achieve the desired
                    configuration. These commands are also required to be
                    executed in the correct order.
                  </p>
                  <p>
                    <span style={{ textDecoration: "underline" }}>
                      Which one is better?
                    </span>{" "}
                    Majority IaC tools will automatically provision the desired
                    infrastructure. This is declarative approach. If changes are
                    made to the desired state, IaC tool will apply those
                    changes. Whereas an imperative tool will require strategy to
                    identify how those changes should be applied.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold" }}>Benefits</span> - With
                    advancement in cloud computing, the number of infrastructure
                    components has increased significantly. Agile practices &
                    quest of being early in market results in delivery of
                    frequent builds to production daily. Manually it becomes
                    difficult to manage the multiple components and multi and
                    hybrid cloud scenarios.
                  </p>
                  <ul>
                    <li>
                      Reduced Downtimes with automation in controller's seat
                    </li>
                    <li>Reduced Cost with support for hybrid and</li>
                    <li>Improved time for Go to Market</li>
                    <li>Improved infrastructure consistency</li>
                    <li>Great tooling helps to focus on what is required</li>
                  </ul>
                </div>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <div id="text-11" class="widgetContainer widget_text">
                  {" "}
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
                        <Link to="/contact">Let't Talk</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="sidebar-item search-form"></div>

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

                <h3 className="sidebar-title">Recent Posts</h3>
                <div className="sidebar-item recent-posts">
                  <div className="post-item clearfix">
                    <img
                      src="assets/img/blog/blog-1.png"
                      alt=""
                    />
                    <h4>
                      <Link to="/blog-product">
                        The importance of effective product engineering strategy
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Jan 3, 2024</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src="assets/img/blog/blog-2.png"
                      alt=""
                    />
                    <h4>
                      <Link to="/blog-infra">
                        Infrastructure As Code and it's Relevance
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Sept 17, 2023</time>
                  </div>

                  <div className="post-item clearfix">
                    <img
                      src="assets/img/blog/blog-3.png"
                      alt=""
                    />
                    <h4>
                      <Link to="/blog-cloud">
                        Hybrid Cloud - What, Why & How?
                      </Link>
                    </h4>
                    <time datetime="2020-01-01">Oct 25, 2022</time>
                  </div>
                </div>
                {/* <!-- End sidebar recent posts--> */}
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
  );
}
export default Post2;
