import { useState, useRef } from 'react';
import { send } from 'emailjs-com';
import '../../main.css';
import { motion } from 'framer-motion';
import mail from '../../env/mail';
import { useMediaQuery } from 'react-responsive';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0, transition: { duration: 0.4 }, scale: 0.4 },
};

const formVariants = {
  hidden: { opacity: 0, y: 50, scale: 1, x: 0 },
  visible: { opacity: 1, y: 0, x: 0 },
};

function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  // onSubmit send an email using emailjs-com
  const onSubmit = (e) => {
    e.preventDefault();
    send(mail.serviceId, mail.templateId, toSend, mail.userId)
      .then((response) => {
        messageRef.current.innerHTML = 'Message sent.';
        setTimeout(() => (messageRef.current.innerHTML = ''), 10000);
      })
      .catch((err) => {
        messageRef.current.innerHTML = 'Failed to send a message.';
        setTimeout(() => (messageRef.current.innerHTML = ''), 10000);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const messageRef = useRef();
  return (
    <div id='contacts'>
      <div>
        <motion.h1
          variants={pageVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.8 }}
          exit='exit'
        >
          Contact Me
        </motion.h1>
        <motion.ul
          variants={pageVariants}
          initial={{ opacity: 0, scale: 1 }}
          animate='visible'
          transition={{ delay: isMobile ? 0 : 0.1, duration: 0.8 }}
          exit='exit'
        >
          <li style={{ textTransform: 'none' }}>
            <i className='las la-envelope'></i> dandavisjs@protonmail.com
          </li>
          <li>
            <i className='las la-phone'></i>
            {`(903) 033 3333`}
          </li>
          <li>
            <i className='lab la-github'></i>
            <i className='lab la-behance'></i>
            <i className='lab la-instagram'></i>
          </li>
        </motion.ul>
      </div>
      <form onSubmit={onSubmit}>
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50, y: 1, scale: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            exit={{
              opacity: 0,
              y: 50,
              x: 50,
              scale: 0.4,
            }}
          >
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              minlength='4'
              value={toSend.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 1, scale: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: isMobile ? 0 : 0.1 }}
            exit={{
              opacity: 0,
              y: 50,
              x: -50,
              scale: 0.4,
              transition: { duration: 0.4 },
            }}
          >
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={toSend.email}
              onChange={handleChange}
              required
            />
          </motion.div>
        </div>
        <motion.div
          variants={formVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.4, delay: isMobile ? 0 : 0.2 }}
          exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.4 } }}
        >
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            minlength='20'
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>
        <motion.button
          type='submit'
          variants={formVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2, delay: isMobile ? 0 : 0.3 }}
          exit={{
            opacity: 0,
            scale: 0.4,
            y: -50,
            x: isMobile ? 0 : 180,
            transition: { duration: 0.4 },
          }}
        >
          Send
        </motion.button>
        <motion.span
          ref={messageRef}
          variants={formVariants}
          initial='hidden'
          animate='visible'
          transition={{ duration: 0.2, delay: isMobile ? 0 : 0.3 }}
          exit={{
            opacity: 0,
            scale: 0.4,
            y: isMobile ? 0 : -50,
            x: isMobile ? 0 : 180,
            transition: { duration: 0.2 },
          }}
        ></motion.span>
      </form>
    </div>
  );
}

export default Contact;
