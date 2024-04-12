import React, { useEffect, useState, useRef } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import Clock from '../Component/Clock'
import AWS from 'aws-sdk'
import ReCAPTCHA from 'react-google-recaptcha'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION, // Change to your desired AWS region
})
function ContactUS() {
  const recaptcha = useRef(null)
  const ses = new AWS.SES({ apiVersion: process.env.REACT_APP_API_VERSION })
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const handleChangeForm = (event, eventName) => {
    setContactData({ ...contactData, [eventName]: event.target.value })
  }
  const SendMail = () => {
    const captchaValue = recaptcha.current.getValue()
    if (!captchaValue) {
      alert('Please verify the reCAPTCHA!')
    } else {
      const params = {
        Destination: {
          ToAddresses: [process.env.REACT_APP_SOURCE],
        },
        Message: {
          Body: {
            Text: {
              Data: `Name: ${contactData.name}\nEmail: ${contactData.email}\nSubject: ${contactData.subject}\nMessage: ${contactData.message}`,
            },
          },
          Subject: {
            Data: 'Contact From',
          },
        },
        Source: process.env.REACT_APP_SOURCE, // Replace with your verified email address in AWS SES
      }
      ses.sendEmail(params, (err, data) => {
        if (err) {
          alert('Failed to send email. Please try again later.')
        } else {
          alert('Your message has been sent. Thank you!')
        }
      })
    }
  }
  const [time, setTime] = useState({
    india: new Date(),
    uk: new Date(),
    usa: new Date(),
  })

  const setClock = () => {
    const indiaTime = new Date()
    const ukTime = new Date(
      indiaTime.toLocaleString('en-US', { timeZone: 'Europe/London' }),
    )
    const usaTime = new Date(
      indiaTime.toLocaleString('en-US', { timeZone: 'America/New_York' }),
    )
    setTime({ india: indiaTime, uk: ukTime, usa: usaTime })
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setClock()
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const { india, uk, usa } = time
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section id="hero-contact" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#Connect</h1>
              <br />
              <h2>Let's Build Great Products</h2>
              <br />
              <br />
              <h5>
                Whether you're seeking collaboration, have burning questions, or
                just fancy a digital chat, we're here — ready to engage, inspire,
                and make meaningful connections in the vast landscape of
                possibilities.
              </h5>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Contact</h2>
          </div>
          <div className="sub-section-title sub-section-title-text">
            <p>
              Contact us today and let us help you build that next great
              software turning disruption into opportunity.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6 ">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Our Address</h3>
                    <p>
                      401, D and C Dynasty CG Road, Stadium Cross Rd, Ahmedabad,
                      Gujarat, 380009
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Us</h3>
                    <p><a style={{color: '#444444'}} href="mailto:inquiry@prowerse.com">inquiry@prowerse.com</a></p>
                    <br />
                    <br />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <i className="bx bx-phone-call"></i>
                    <h3>Call Us</h3>
                    <p>+91-9537485017</p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="php-email-form">
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      onChange={(event) => handleChangeForm(event, 'name')}
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                      onChange={(event) => handleChangeForm(event, 'email')}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    onChange={(event) => handleChangeForm(event, 'subject')}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder="Message"
                    required
                    onChange={(event) => handleChangeForm(event, 'message')}
                  ></textarea>
                </div>
                <div className="col form-group">
                  <span>Please confirm that you are human *</span>

                  <ReCAPTCHA
                    ref={recaptcha}
                    sitekey={process.env.REACT_APP_SITE_KEY}
                  />
                </div>

                <div className="text-center">
                  <button type="submit" onClick={SendMail}>
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services " className="our-office">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>Our Offices</h2>
            {/* <p>Software Development Outsourcing</p> */}
          </div>

          <div className="row" style={{ marginTop: '20px' }}>
            {/* card-first */}
            <div className="col-md-4 ">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4>
                  <a href="#">India</a>
                </h4>
                <p className="service-fill">
                  401, D and C Dynasty CG Road, Stadium Cross Rd, Ahmedabad,
                  Gujarat 380009
                </p>
                <p>
                  <b className="service-fill">Phone:-</b>
                  <span className="service-fill">+91-9537485017</span>
                  <br />
                  <b className="service-fill">Email:-</b>{' '}
                  <span className="service-fill"><a style={{color: 'white'}} href="mailto:inquiry@prowerse.com">inquiry@prowerse.com</a></span>
                  <br />
                  <Link
                    to="https://www.google.co.in/maps/place/Prowerse/@23.0419532,72.5453409,14z/data=!4m6!3m5!1s0x395c2985ee155555:0x7f4b353f9d5a755a!8m2!3d23.0389321!4d72.563301!16s%2Fg%2F11ngmktn3p?entry=ttu"
                    target="_blank"
                  >
                    {' '}
                    <b className="service-fill">Get Direction</b>
                  </Link>
                  <Clock
                    hourRatio={
                      ((india.getHours() % 12) + india.getMinutes() / 60) / 12
                    }
                    minuteRatio={
                      (india.getMinutes() + india.getSeconds() / 60) / 60
                    }
                    secondRatio={india.getSeconds() / 60}
                  />
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <h4>
                  <a href="#">United Kingdom</a>
                </h4>
                <p
                  className="service-fill"
                  style={{ textAlign: 'center', marginLeft: 0 }}
                >
                  11 Black Rod Close Hayes
                  <br /> London <br /> UB3 4QJ
                </p>

                <p>
                  <br />
                  <br />

                  <Clock
                    hourRatio={
                      ((uk.getHours() % 12) + uk.getMinutes() / 60) / 12
                    }
                    minuteRatio={(uk.getMinutes() + uk.getSeconds() / 60) / 60}
                    secondRatio={uk.getSeconds() / 60}
                  />
                </p>
              </div>
            </div>
            {/* card-last */}
            <div className="col-md-4 ">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <h4>
                  <a href="#">United States</a>
                </h4>
                <p
                  className="service-fill"
                  style={{ textAlign: 'center', marginLeft: 0 }}
                >
                  643 Liberty Avenue
                  <br /> Jersey City <br />
                  NJ 07307
                </p>

                <p>
                  <br />
                  <br />

                  <Clock
                    hourRatio={
                      ((usa.getHours() % 12) + usa.getMinutes() / 60) / 12
                    }
                    minuteRatio={
                      (usa.getMinutes() + usa.getSeconds() / 60) / 60
                    }
                    secondRatio={usa.getSeconds() / 60}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default ContactUS
