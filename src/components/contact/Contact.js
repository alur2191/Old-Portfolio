import { useState } from 'react';
import { send } from 'emailjs-com';
import '../../main.css';
import { motion } from 'framer-motion';
import mail from '../../env/mail';

function Contact() {
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    message: '',
  });

  // onSubmit send an email using emailjs-com
  const onSubmit = (e) => {
    e.preventDefault();
    send(mail.serviceId, mail.templateId, toSend, mail.userId)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div id='contacts'>
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          exit={{ opacity: 0, transition: { duration: 0.4 }, scale: 0.4 }}
        >
          Contact Me
        </motion.h1>
        <motion.ul
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          exit={{ opacity: 0, transition: { duration: 0.4 }, scale: 0.4 }}
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
              transition: { duration: 0.4 },
            }}
          >
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={toSend.name}
              onChange={handleChange}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 1, scale: 1 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
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
          initial={{ opacity: 0, y: 50, scale: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          exit={{ opacity: 0, scale: 0.6, transition: { duration: 0.4 } }}
        >
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            cols='30'
            rows='10'
            value={toSend.message}
            onChange={handleChange}
            required
          ></textarea>
        </motion.div>
        <motion.button
          type='submit'
          initial={{ opacity: 0, y: 50, scale: 1, x: 1 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          exit={{
            opacity: 0,
            scale: 0.4,
            y: -50,
            x: 180,
            transition: { duration: 0.4 },
          }}
        >
          Send
        </motion.button>
      </form>
    </div>
  );
}

export default Contact;
