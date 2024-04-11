import React, { useState, useRef,useEffect } from 'react'
import Footer from './Footer'
import ReCAPTCHA from 'react-google-recaptcha'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION, // Change to your desired AWS region
})

function PostResume() {
  const recaptcha = useRef(null)
  const toEmail = useState(process.env.REACT_APP_SOURCE)
  const [name, setName] = useState('') // State for name field
  const [email, setEmail] = useState('') // State for email field
  const [phoneNumber, setPhoneNumber] = useState('') // State for phone number field
  const [experience, setExperience] = useState('') // State for experience field
  const ses = new AWS.SES({ apiVersion: process.env.REACT_APP_API_VERSION })
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const SubmitResume = (event) => {
    event.preventDefault()
    const captchaValue = recaptcha.current.getValue()

    if (!captchaValue) {
      alert('Please verify the reCAPTCHA!')
    } else {
      // make form submission
      const emailBody = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Experience: ${experience}
      `
      const params = {
        Source: process.env.REACT_APP_SOURCE, // Replace with your verified email address in AWS SES
        Destination: {
          ToAddresses: [toEmail],
        },
        Message: {
          Subject: {
            Data: 'RESUME APPLICATION FORM',
            Charset: 'UTF-8',
          },
          Body: {
            Text: {
              Data: emailBody,
              Charset: 'UTF-8',
            },
          },
        },
      }

      ses.sendEmail(params, (err, data) => {
        if (err) {
          alert('Failed to send email. Please try again later.')
        } else {
          alert('Your message has been sent. Thank you!')
          // Reset form fields after successful sending
          setName('')
          setEmail('')
          setPhoneNumber('')
          setExperience('')
        }
      })
    }
  }

  return (
    <>
      <section id="hero-contact" className="d-flex align-items-center">
        <div className="container" data-aos="zoom-out" data-aos-delay="100">
          <div className="row">
            <div className="col-xl-6">
              <h1>#JOB APPLICATION</h1>
              {/* {resume && (
                <div>
                  <img src={URL.createObjectURL(resume)} alt="Preview" />
                </div>
              )} */}

              <h5>
                Prowerse is looking for smart, intelligent and awesome people to
                join our global workforce for a challenging & rewarding career.
              </h5>
              {/* <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Contact Section ======= --> */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title text-center position-relative pb-3 mx-auto">
            <h2>RESUME APPLICATION FORM</h2>
          </div>
          <div className="sub-section-title">
            <p>
              Please fill the job application form below and one of
              representative shall get in touch with you soon.
            </p>
          </div>

          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12">
              <form role="form" className="php-email-form">
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                      value={name} // Set value to the state variable
                      onChange={(e) => setName(e.target.value)} // Update state variable on change
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
                      value={email} // Set value to the state variable
                      onChange={(e) => setEmail(e.target.value)} // Update state variable on change
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Phone Number"
                      required
                      value={phoneNumber} // Set value to the state variable
                      onChange={(e) => setPhoneNumber(e.target.value)} // Update state variable on change
                    />
                  </div>
                  <div className="col form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Experiencer"
                      required
                      value={experience} // Set value to the state variable
                      onChange={(e) => setExperience(e.target.value)} // Update state variable on change
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col form-group">
                    <div className="col form-group">
                      <span>Please confirm that you are human *</span>

                      <ReCAPTCHA
                        ref={recaptcha}
                        sitekey={process.env.REACT_APP_SITE_KEY}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button type="submit" onClick={SubmitResume}>
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ======= Footer ======= --> */}
      <Footer />
    </>
  )
}
export default PostResume
