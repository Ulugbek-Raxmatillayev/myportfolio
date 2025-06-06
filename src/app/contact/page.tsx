'use client';

import { useState } from "react";
import type { NextPage } from "next";
import emailjs from '@emailjs/browser';

const Contact: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const templateParams = {
        to_email: 'ulugbekraxmatillayev615@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      console.log('Sending email with params:', templateParams); // Debug log

      await emailjs.send(
        'service_ga473al',
        'template_g1a15vh',
        templateParams,
        'Xf0PgVhiG3pjrCNxZ'
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49726.70152492196!2d65.59447717030615!3d38.83431939304932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ebbb8b622a467%3A0x6f0fdc0bdd401c77!2sKojor%20MFY!5e0!3m2!1sen!2sus!4v1749154786493!5m2!1sen!2sus";

  return (
    <>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-map-marker" />
              </div>
              <h4>Address</h4>
              <p>Uzbekistan,Qarshi</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-phone" />
              </div>
              <h4>Call Us On</h4>
              <p>+998 88-034-09-12</p>
            </div>
            {/* contact-info-item Ended */}
            {/* contact-info-item */}
            <div className="contact-info-item padd-15">
              <div className="icon">
                <i className="fa fa-envelope" />
              </div>
              <h4>Email</h4>
              <p>ulugbekraxmatillayev615@gmail.com</p>
            </div>
            {/* contact-info-item Ended */}
          </div>

          {/* Map Section */}
          <div className="row">
            <div className="contact-map padd-15">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                frameBorder="0"
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
          {/* Map Section Ended */}

          {/* Contact Form */}
          <div className="row">
            <form className="contact-form padd-15" onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Name*"
                      required
                    />
                  </div>
                </div>
                <div className="form-item col-6 padd-15">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Email*"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Subject*"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-item col-12 padd-15">
                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your Message*"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 padd-15">
                  <button 
                    type="submit" 
                    className="btn"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                  {status === 'success' && (
                    <p style={{ color: 'green', marginTop: '10px' }}>Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p style={{ color: 'red', marginTop: '10px' }}>Failed to send message. Please try again.</p>
                  )}
                </div>
              </div>
            </form>
          </div>
          {/* Contact Form Ended */}
        </div>
      </section>
    </>
  );
};

export default Contact;
