import './contact_us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import ecodiveLogo from '../../Assets/image-logo-ecodive.png';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      // Check if environment variables are loaded
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your .env file.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ecodive09@gmail.com'
      };

      console.log('Sending email with params:', { serviceId, templateId, publicKey, templateParams });

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cards = [
    {
      title: 'OUR MAIN OFFICE',
      lines: ['Emanuel Haromi 19', 'Tel Aviv', 'Israel'],
      href: 'https://www.google.com/maps/place/Emanuel+Haromi+St+19,+Tel+Aviv-Jaffa/@32.0876292,34.7812543,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4b8c43e1d47b:0xe11eb6f346ed877b!8m2!3d32.0876292!4d34.7812543!16s%2Fg%2F11c88slg8g?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
      icon: faLocationDot,
    },
    {
      title: 'PHONE NUMBER',
      lines: ['052-4222403'],
      href: 'tel:0524222403',
      icon: faPhone,
    },
    {
      title: 'WHATSAPP',
      lines: ['+972-52-4222403'],
      href: 'https://wa.me/972524222403?text=Hello%20I%20would%20like%20to%20contact%20EcoDive',
      icon: faWhatsapp,
    },
    {
      title: 'EMAIL',
      lines: ['ecodive09@gmail.com'],
      href: 'mailto:ecodive09@gmail.com?subject=Contact%20from%20EcoDive%20Website&body=Hello%20EcoDive%20Team,',
      icon: faEnvelope,
    },
  ];

  const container = { 
    hidden: { opacity: 0, x: -100 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.6,
        staggerChildren: 0.1 
      } 
    } 
  };
  const item = { 
    hidden: { opacity: 0, x: -50 }, 
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.6
      } 
    } 
  };

  return (
    <motion.section
      id="contact"
      className="cu-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={container}
    >
      {/* Top cards */}
      <div className="cu-cards">
        {cards.map((c, i) => (
          <motion.a
            key={i}
            href={c.href}
            className="cu-card"
            variants={item}
            target={c.href.startsWith('#') ? '_self' : '_blank'}
            rel="noreferrer"
          >
            <div className="cu-card-icon">
              <FontAwesomeIcon icon={c.icon} />
            </div>
            <div className="cu-card-title">{c.title}</div>
            <div className="cu-card-lines">
              {c.lines.map((l, idx) => (
                <div key={idx}>{l}</div>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      {/* Bottom split */}
      <div className="cu-bottom">
        {/* Left: text + image */}
        <div className="cu-left">
          <h2 className="cu-heading">Contact info</h2>
          <p className="cu-paragraph">
          At EcoDive, we believe every dive deserves to be remembered. Our app lets you log your dives, explore new sites, and connect with dive clubs around the world.
          Have a question or want to collaborate? Drop us a message — we’d love to hear from you!
          </p>

          <div className="cu-image-wrap">
            <img src={ecodiveLogo} alt="EcoDive" />
          </div>
        </div>

        {/* Right: form */}
        <motion.form className="cu-form" variants={item} onSubmit={handleSubmit}>
          <label className="cu-label" htmlFor="email">Email</label>
          <input 
            id="email" 
            name="email"
            type="email" 
            placeholder="Enter a valid email address" 
            className="cu-input"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <label className="cu-label" htmlFor="name">Name</label>
          <input 
            id="name" 
            name="name"
            type="text" 
            placeholder="Enter your Name" 
            className="cu-input"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <label className="cu-label" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message"
            placeholder="Enter your message" 
            className="cu-textarea"
            value={formData.message}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="cu-submit" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SUBMIT'}
          </button>
          
          {submitStatus === 'success' && (
            <div style={{ color: '#4CAF50', marginTop: '10px', fontSize: '14px' }}>
              Message sent successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div style={{ color: '#f44336', marginTop: '10px', fontSize: '14px' }}>
              Error sending message. Please try again.
            </div>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;