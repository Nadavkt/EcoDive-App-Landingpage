import './contact_us.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faFax } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const ContactUs = () => {
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
      href: '#',
      icon: faFax,
    },
    {
      title: 'EMAIL',
      lines: ['ecodive09@gmail.com'],
      href: 'ecodive09@gmail.com',
      icon: faEnvelope,
    },
  ];

  const container = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.08 } } };
  const item = { hidden: { opacity: 0, scale: 0.97 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.35 } } };

  return (
    <motion.section
      id="contact"
      className="cu-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </p>

          <div className="cu-image-wrap">
            {/* Replace the src with your image path. The circle crop is handled in CSS */}
            <img src="'../../assets/image-logo-ecodive.png'" alt="EcoDive" />
          </div>
        </div>

        {/* Right: form */}
        <motion.form className="cu-form" variants={item} onSubmit={(e) => e.preventDefault()}>
          <label className="cu-label" htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter a valid email address" className="cu-input" />

          <label className="cu-label" htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your Name" className="cu-input" />

          <label className="cu-label" htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message" className="cu-textarea" />

          <button type="submit" className="cu-submit">SUBMIT</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactUs;