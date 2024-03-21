import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Count from "../Component/Count";
import Counter from "../Component/Counter";
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = {
    counts: [
      {
        id: "001",
        label: "Years of Industry Experience",
        number: "15",
        duration: "5",
        type: "+",
        icon: "bi bi-emoji-smile",
      },
      {
        id: "002",
        label: "Client Retention Rate",
        number: "92",
        duration: "5",
        type: "%",
        icon: "bi bi-journal-richtext",
      },
      {
        id: "003",
        label: "Projects Executed",
        number: "200",
        duration: "5",
        type: "+",
        icon: "bi bi-headset",
      },
    ],
  };
  const datawithdash = {
    counts: [
      {
        id: "004",
        label: "Reduction In Your IT Budgets",
        number: "50 - 70",
        duration: "5",
        type: "%",
        icon: "bi bi-people",
      },
    ],
  };
  return (
    <>
      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#RightFirstTime</h1>
              <br />
              <h2>Software Development. Delivered.</h2>
              <br />
              <br />
              <h5>
                The development of reliable and scalable software solutions for
                any OS, browser and device.
              </h5>
              <h5>
                Reduced implementation costs and timely delivery with organized
                development process, modern methodologies, competencies in
                cutting-edge technologies, and a rich pool of developers.
              </h5>
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row">
              {data.counts.map((count) => (
                <>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                      <i className={count.icon}></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="345"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <Count key={count.id} data={count} />
                      <p>
                        {count.text}
                        {count.label}
                      </p>
                    </div>
                  </div>
                </>
              ))}
              {datawithdash.counts.map((count) => (
                <>
                  <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    <div className="count-box">
                      <i className={count.icon}></i>
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end="345"
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      <Counter key={count.id} data={count} />
                      <p>
                        {count.text}
                        {count.label}
                      </p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </section>
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about section-bg">
          <div className="container" data-aos="fade-up">
            <div className="row no-gutters">
              <div className="content col-xl-5 d-flex align-items-stretch">
                <div className="content">
                  <h3>Prowerse Values</h3>
                  <p>
                    Prowerse believes in a personalized approach to every
                    customer. The selection of development practice is tailored
                    to customer's specific business needs. Be it classical
                    methodologies, such as Waterfall or Prototype development,
                    or modern approaches like Agile, Kanban, Lean or Extreme
                    Programming, Prowerse ensures a timely delivery of the
                    project.
                  </p>
                  <p>
                    Being a boutique product engineering company with great
                    experience but fresh to the core, we work as a one-stop
                    service provider, supporting businesses to get a competitive
                    edge in the market through their digital offerings.
                  </p>
                </div>
              </div>
              <div className="col-xl-7 d-flex align-items-stretch">
                <div className="icon-boxes d-flex flex-column justify-content-center">
                  <div className="row">
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-body"></i>
                      <h4>People</h4>
                      <p>
                        People are the focus of fundamental belief at Prowerse.
                        To attract, hire and retain the best talents and provide
                        first-class learning, growing & working experiences is
                        the core Prowerse value.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bx bx-book-reader"></i>
                      <h4>Journey</h4>
                      <p>
                        Prowerse passionately believes that moments,
                        experiences, and memories shared by team while on a
                        project delivery must be enjoyable & wholesome. As they
                        say, Happiness is a journey, not a destination.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-receipt"></i>
                      <h4>Progress</h4>
                      <p>
                        Stay focused on the continuous march toward achieving
                        the milestones, the successes, and the breakthroughs.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bx bx-bulb"></i>
                      <h4>Innovative Thinking</h4>
                      <p>
                        Intending to constantly improvise on service quality,
                        Prowerse unlocks innovative thinking by adopting a
                        calculated mix of manual and automation initiatives.
                        Focus on AI, Blockchain, Big Data, Cloud Engineering,
                        etc., has proved extremely beneficial during various
                        engagements and ensuring business excellence. Ensuring
                        constant exposure to training and development is another
                        aspect that facilitates innovative thinking at Prowerse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Tabs Section ======= --> */}
        <section id="tabs" className="tabs">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>WHY CHOOSE US ?</h2>
            </div>
            <ul
              className="nav nav-tabs row d-flex"
              style={{ marginTop: "44px" }}
            >
              <li className="nav-item col-3">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                >
                  <i className="ri-gps-line"></i>
                  <h4 className="d-none d-lg-block">
                    Extensive experience with diverse set of domains
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                >
                  <i className="ri-body-scan-line"></i>
                  <h4 className="d-none d-lg-block">
                    High service ettiquettes
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-3"
                >
                  <i className="ri-sun-line"></i>
                  <h4 className="d-none d-lg-block">
                    Agile and flexible approach
                  </h4>
                </a>
              </li>
              <li className="nav-item col-3">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-4"
                >
                  <i className="ri-store-line"></i>
                  <h4 className="d-none d-lg-block">People and Processes</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div
                    className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Client-Centric Solutions: </b>Our listening appetite
                        and extensive experience with a diverse set of domains
                        translate into a deeper understanding of client needs.
                        <div>
                          This allows us to engineer tailor-made solutions that
                          exceed client expectations.
                        </div>
                        <div>
                          The ability to anticipate domain-specific challenges
                          enables the delivery of impactful software products,
                          mitigating challenges encountered at various junctures
                          of SDLC.
                        </div>
                      </li>
                      {/* <br /> */}
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Efficient Problem Solving: </b>Domain knowledge is a
                        powerful tool for effective problem-solving. Our
                        versatile experience empowers us to quickly identify
                        issues that may arise during product development and
                        implementation.
                        <div>
                          This allows for proactive issue resolution, minimizing
                          downtime and ensuring customer delight.
                        </div>
                      </li>
                      {/* <br /> */}
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Optimized Processes: </b>
                        Rich exposure to leading domains, industries,
                        technologies, and geographies empowers us to introduce
                        refined and optimized development processes. Along with
                        accelerating project timelines and enhancing the overall
                        delivery quality, this also boosts the
                        cost-effectiveness and reliability of the solution
                        delivered.
                        <div>
                          Along with accelerating project timelines and
                          enhancing the overall delivery quality, this also
                          boosts the cost-effectiveness and reliability of the
                          solution delivered.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {/* prowerse-website */}
                    <img
                      src="assets/img/whychosseus/about-us.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Complete transparency</b> is ensured during various
                        stages of SDLC, keeping partners fully updated about
                        progress and next steps.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b> Timely and regular communication is the key:</b> At
                        no point in the engagement could you risk losing your
                        way and taking the wrong path. Businesses often spend
                        more money and time on course correction than on the
                        actual project. We understand that regular catch-ups,
                        proper communication, and timely feedback are critical
                        to project success. Through regular reports, status
                        updates, and sprints, we ensure a tight hold on timely
                        and quality output.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Every client matters:</b> No matter the size of the
                        project, we assign a dedicated point of contact to
                        discuss project health and engagement functions that
                        matter to the client. Ensuring customer delight has
                        resulted in long-term and mutually-beneficial
                        relationships for Prowerse.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Integrity as the epicenter:</b> Everything revolves
                        around delivering on our commitments with a high sense
                        of sincerity and honesty. This is what a client would
                        carry with them, even more than certain quality and
                        economical aspects.
                      </li>
                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Customer & Employee Satisfaction:</b> These are the
                        two core aspects of any business. We go the extra mile
                        to strike perfect balance and keep our employees
                        motivated, which reflects in successful client
                        engagements. We would land nowhere without the two poles
                        guarding our business.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/whychosseus/journey.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>We tailor{" "}
                        <b>personalized engagement plans</b>, ensuring that our
                        offerings accurately fit your needs and business
                        objectives.
                      </li>

                      <li>
                        <i className="ri-check-double-line"></i>We go beyond{" "}
                        <b>one-size-fits-all practices</b> and delve into the
                        intricacies of your requirements to meet your expected
                        service standards.
                        <div>
                          Customised approach as per the nature of your business
                          helps us address your vision.
                        </div>
                        <div>
                          Working with a start-up or small business is different
                          from working with an enterprise.{" "}
                        </div>
                        <div>
                          Refining an idea into an MVP/prototype or rapid
                          productization for early adopters are a few cases that
                          we have mastered over several executions.
                        </div>
                      </li>

                      <li>
                        <i className="ri-check-double-line"></i>
                        <b>Embedding seamlessly</b> in your existing set-up and
                        work culture, we foster collaboration for shared
                        success, working as a natural extension of your team and
                        amplifying your overall delivery capabilities.
                      </li>

                      <li>
                        <i className="ri-check-double-line"></i>As your
                        strategic partners and invested collaborators, we work
                        with a <b>cohesive approach</b> towards a common
                        business objective.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/whychosseus/progress.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                    <ul>
                      <li>
                        <i className="ri-check-double-line"></i>{" "}
                        <b>Strong core team</b> with deep knowledge and
                        experience in their respective domains.
                      </li>
                      <br />
                      <br />
                      <li>
                        <i className="ri-check-double-line"></i>{" "}
                        <b>State-of-the-art tools and techniques:</b> Our choice
                        of relevant tools, techniques, processes, and talent is
                        done keeping superior performance and efficiency in
                        mind.
                      </li>
                      <br />
                      <br />
                      <li>
                        <i className="ri-check-double-line"></i> Our
                        collaborative ethos implies that we share in both wins
                        and hurdles, and are reachable beyond any SLAs, giving
                        you the assurance that{" "}
                        <b>"we are there whenever you need someone"</b>.
                      </li>
                      <br />
                      <br />
                      <li>
                        <i className="ri-check-double-line"></i> With a{" "}
                        <b>vision of mutual growth</b>, our people bring a
                        proactive mindset, actively seeking opportunities to add
                        value and innovate.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                      src="assets/img/whychosseus/people.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ marginTop: 10 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>OUR DEVELOPMENT PROCESS</h2>
            </div>
            <div className="sub-section-title">
              <p>
                We strive to deliver highest level of customer service through
                innovative and collaborative project management systems to build
                robust, secure and highly scalable digital solutions with
                superior quality standards.
              </p>
            </div>
            <div className="row">
              <ul className="hire-team-process">
                <li className="step1">
                  <div className="dashed-circle project-requirment"></div>
                  <div className="figcaption">
                    <h4 className="heading">
                      {" "}
                      SHARE YOUR PROJECT &amp; REQUIREMENTS
                    </h4>
                    <p className="sub-title-area">
                      Our team will analyze the project requirements and select
                      relevant engineers suited for the project. We also offer
                      our clients to screen our engineers as per their set
                      criteria.
                    </p>
                  </div>
                </li>
                <li className="step2">
                  <div className="dashed-circle discuss-project"></div>
                  <div className="figcaption">
                    <h4 className="heading">
                      DISCUSS PROJECT DETAILS WITH OUR ANALYSTS
                    </h4>
                    <p className="sub-title-area">
                      Our team will contact you within 1-2 business days to
                      discuss the project and its execution plan in depth, and
                      to offer the best suited solution for the given business
                      scenario.
                    </p>
                  </div>
                </li>
                <li className="step3">
                  <div className="dashed-circle terms-n-timelines"></div>
                  <div className="figcaption">
                    <h4 className="heading">
                      REVIEW ENGAGEMENT TERMS & TIMELINES
                    </h4>
                    <p className="sub-title-area">
                      Based on the initial discussions and requirements review,
                      we can discuss and agree on the relevant engagement model
                      for project execution. Timelines would be transparently
                      discussed and mutually agreed upon before the project
                      kick-off.
                    </p>
                  </div>
                </li>
                <li className="step4">
                  <div className="dashed-circle get-started"></div>
                  <div className="figcaption">
                    <h4 className="heading">
                      LETS CREATE ANOTHER SUCCESS-STORY
                    </h4>
                    <p className="sub-title-area">
                      We mutually agree on the engagement terms, defining
                      milestones and moving forward to creating another
                      success-story.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Few of our Case Studies</h2>
            </div>
            <div className="sub-section-title"></div>

            <div className="row" style={{ marginTop: "44px" }}>
              <div
                className="case-studies-banner row mr0 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div className="item col-lg-6 col-sm-6 aos-init aos-animat">
                  <div className="inner-cols banner1">
                    <div className="banner-col-content">
                      <div className="col-logo"></div>
                      <p className="para">
                        REDUCTION IN INFRASTRUCTURE PROVISIONING TIME BY 70%
                        RESULTING IN SIGNIFICANT ANNUAL COST-SAVINGS
                      </p>
                      <p className="para domainPara">
                        DOMAIN - <span>Crypto</span>
                      </p>
                      <Link to="/blockchain" className="red-btn circle-btn">
                        View Case Study{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item col-lg-6 col-sm-6 aos-init aos-animat">
                  <div className="inner-cols banner2">
                    <div className="banner-col-content">
                      <div className="col-logo"></div>
                      <p className="para">
                        SIGNIFICANT REDUCTION IN MVP ROLL OUT TIMELINES THROUGH
                        PORTABLE WEB APPS (PWA'S) AND ABOUT 45% REDUCTION IN
                        COSTS
                      </p>
                      <p className="para domainPara">
                        DOMAIN - <span>Healthcare</span>
                      </p>
                      <Link to="/healthcare" className="red-btn circle-btn">
                        {" "}
                        View Case Study{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div
                  className="item col-lg-6 col-sm-6 aos-init aos-animat"
                  style={{ marginTop: 26 }}
                >
                  <div className="inner-cols banner3">
                    <div className="banner-col-content">
                      <div className="col-logo"></div>
                      <p className="para">
                        Scaling MVP to market- ready product offering by keeping
                        product north star in sight and increasing marketable
                        feature releases with 50% more agility
                      </p>
                      <p className="para domainPara">
                        DOMAIN - <span>Health, Wellness & Fitness</span>
                      </p>
                      <Link
                        to="/health-wealth-fitness"
                        className="red-btn circle-btn"
                      >
                        {" "}
                        View Case Study{" "}
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="item col-lg-6 col-sm-6 aos-init aos-animat"
                  style={{ marginTop: 26 }}
                >
                  <div className="inner-cols banner4">
                    <div className="banner-col-content">
                      <div className="col-logo"></div>
                      <p className="para">
                        Enhancement In Client's Transnational strategy with
                        annual cost - saving of about 40%
                      </p>
                      <p className="para domainPara">
                        DOMAIN - <span>Insurance </span>
                      </p>

                      <Link to="/insurance" className="red-btn circle-btn">
                        {" "}
                        View Case Study{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <div className="large-container">
            <div
              className="section-title text-center position-relative pb-3 mx-auto"
              data-aos="fade-up"
            >
              <h2>WHAT OUR CORE CLIENTS SAY ?</h2>
            </div>
            <div className="container" data-aos="fade-up">
              <div className="row gy-4">
                <div
                  className="col-xl-8 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="testimonial-text">
                    Development results are great and skills of the developers
                    are effective. Communication as an aspect is given high
                    regard. Overall good value for money.
                  </p>
                  <p>
                    <h6>
                      {" "}
                      Product company in Health, Fitness & Nutrition domain,
                      Norway
                    </h6>
                  </p>
                </div>
                <div
                  className="col-xl-4 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/testimonials/testimonial-1.png"
                    alt="Nature"
                    classname="responsive testimonail-img"
                  />
                </div>

                <div
                  className="col-xl-4 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/testimonials/testimonial-2.jpg"
                    alt="Nature"
                    classname="responsive testimonail-img"
                  />
                </div>
                <div
                  className="col-xl-8 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="testimonial-text">
                    The core project team has remained the same since last 25
                    months which is a great testament to Prowerse management.
                    They are our go to partners for new requirements due to the
                    transparent and loyal relationship maintained through
                    various ups and downs.
                  </p>
                  <p>
                    <h6>Swiss Blockchain solutions company working in Web3</h6>
                  </p>
                </div>

                <div
                  className="col-xl-8 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="testimonial-text">
                    DevOps is their forte. Bring what you got. AWS, Azure, GCP.
                    Strong technical acumen. In other terms, it's like a tennis
                    player with qualities of Fed, Rafa and Novak.
                  </p>
                  <p>
                    <h6>CTO, Sports event management firm, Prague, Czechia</h6>
                  </p>
                </div>
                <div
                  className="col-xl-4 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/testimonials/dedicatedteam.png"
                    alt="Nature"
                    classname="responsive testimonail-img"
                  />
                </div>

                <div
                  className="col-xl-4 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="assets/img/testimonials/staffaugmentation.png"
                    alt="Nature"
                    classname="responsive testimonail-img"
                  />
                </div>
                <div
                  className="col-xl-8 col-md-6 inner-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <p className="testimonial-text">
                    Prowerse is best suited for an emerging brands eying quality
                    deliveries at optimum costs. Glad we found them. Can't speak
                    higher of any other brand.
                  </p>
                  <p>
                    <h6>Diana, Event Management firm from Durban, SA</h6>
                  </p>
                </div>
              </div>
              {/* <!-- End recent posts list --> */}
            </div>
          </div>
        </section>
        {/* <!-- ======= Service Section ======= --> */}
        <section id="team" className="team">
          <div className="container" data-aos="fade-up">
            <div className="section-title text-center position-relative pb-3 mx-auto">
              <h2>Founding Team</h2>
            </div>
            <div className="sub-section-title">
              <p>
                Meet our dynamic team dedicated to transforming ideas into
                cutting-edge software solutions. With diverse expertise and
                knowledge in their respective fields, we collaborate seamlessly
                to elevate your experience of engaging with Prowerse.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <img
                      src="\assets/img/team/prady.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a
                        href="https://www.linkedin.com/in/zalaps/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Prady</h4>
                    <span>Technology & Delivery</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    {/* src="prowerse-website/assets/img/team/prady.jpg" */}
                    <img
                      src="assets/img/team/mohit.png"
                      className="img-fluid"
                      alt=""
                      style={{ height: 352 }}
                    />
                    <div className="social">
                      <a
                        href="https://www.linkedin.com/in/mohit-p-jain/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Mohit</h4>
                    <span>Sales & Marketing</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    {/* src="prowerse-website/assets/img/team/prady.jpg" */}
                    <img
                      src="assets/img/team/hardik.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a
                        href="https://www.linkedin.com/in/hardik-pathak-01000597/"
                        target="_blank"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Hardik</h4>
                    <span>People & Culture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent-posts" className="recent-posts">
          {/* <!--  Section Title --> */}
          <div
            className="container section-title text-center position-relative pb-3 mx-auto"
            data-aos="fade-up"
          >
            <h2>Blogs</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Explore the latest updates and insights through our hub of posts
              and blogs.
            </p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Product Engineering</p>

                  <h2 className="title">
                    <Link to="/blog-product">
                      The importance of effective product engineering strategy
                    </Link>
                  </h2>
                </article>
              </div>

              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Infrastructure</p>

                  <h2 className="title">
                    <Link to="/blog-infra">
                      Infrastructure As Code and it's Relevance
                    </Link>
                  </h2>
                </article>
              </div>
              {/* <!-- End post list item --> */}

              <div
                className="col-xl-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <article>
                  <div className="post-img">
                    <img
                      src="assets/img/blog/blog-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>

                  <p className="post-category">Cloud</p>

                  <h2 className="title">
                    <Link to="/blog-cloud">
                      Hybrid Cloud - What, Why & How?
                    </Link>
                  </h2>
                </article>
              </div>
              {/* <!-- End post list item --> */}
            </div>
            {/* <!-- End recent posts list --> */}
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
      {/* <!-- End #main --> */}
      {/* <!-- Call-to-action Section - Home Page --> */}
      <section id="call-to-action" className="call-to-action">
        <img src="assets/img/cta-bg.jpg" alt="" />

        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>Let's Build Great Products</h3>

                <p>
                  Let's connect on how we can assist you build your dream with
                  high performance business applications suited for today's
                  digital environment.
                </p>
                <Link className="cta-btn" to="/contact">
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Call-to-action Section --> */}

      <Footer />
    </>
  );
};
export default Home;
