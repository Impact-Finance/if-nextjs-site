import Image from 'next/image';
import { useState, ChangeEvent, MouseEvent } from 'react';

import { Fade } from 'react-awesome-reveal';
import ReCAPTCHA from 'react-google-recaptcha';

import cube from '@/public/shapes/cubic-grid.png';
import prism from '@/public/shapes/prismatic-grid.png';
import cylinder from '@/public/shapes/pipe-grid.png';
import styles from './contact.module.css';

const captchaKey: string = process.env.CAPTCHA_SITE_KEY;

const Contact = () => {
  const [passed, setPassed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  function passCaptcha() {
    setPassed(true);
  }

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleOrg = (e: ChangeEvent<HTMLInputElement>) => {
    setOrg(e.target.value);
  };
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const response = await fetch('/api/contact-send', {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          organization: org,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        setName('');
        setEmail('');
        setOrg('');
        setMessage('');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    setPending(false);
  };

  return (
    <>
      <Fade
        duration={1000}
        triggerOnce
        direction="down"
        delay={500}>
        <h3 className={styles.headline}>Send us a message!</h3>
      </Fade>
      <Fade
        duration={1000}
        triggerOnce
        delay={500}>
        <div className={styles.outerShell}>
          <Image
            src={cube}
            alt="floating cube"
            height={160}
            width={160}
            className={styles.cube}
          />
          <Image
            src={prism}
            alt="floating prism"
            height={160}
            width={160}
            className={styles.prism}
          />
          <div className={styles.contactBox}>
            <Image
              className={styles.cylinder}
              src={cylinder}
              alt="cylinder-background"
              fill
              sizes="60vw"
            />
            <form>
              <div className={styles.row1}>
                <div className={styles.name}>
                  <label htmlFor="name">Name</label>
                  <input
                    className={styles.inputBox}
                    type="text"
                    id="name"
                    onChange={handleName}
                    value={name}
                    placeholder="What you call yourself..."
                  />
                </div>
              </div>
              <div className={styles.row2}>
                <div className={styles.email}>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.inputBox}
                    type="text"
                    id="email"
                    onChange={handleEmail}
                    value={email}
                    placeholder="Your email..."
                  />
                </div>
                <div className={styles.organization}>
                  <label htmlFor="organization">Organization</label>
                  <input
                    className={styles.inputBox}
                    type="text"
                    id="organization"
                    onChange={handleOrg}
                    value={org}
                    placeholder="Who you represent..."
                  />
                </div>
              </div>
              <div className={styles.row3}>
                <div className={styles.message}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    className={styles.inputBox}
                    id="message"
                    rows={5}
                    onChange={handleMessage}
                    value={message}
                    placeholder="Tell us something..."
                  />
                </div>
              </div>
              <div className={styles.captcha}>
                <ReCAPTCHA
                  sitekey={captchaKey}
                  onChange={passCaptcha}
                />
              </div>
              <div className={styles.submit}>
                {pending && (
                  <p className={styles.pending}>Sending message...</p>
                )}
                {submitted && !pending && !error && (
                  <p className={styles.success}>Message received!</p>
                )}
                {error && !pending && (
                  <p className={styles.error}>
                    Uh oh, there was an error. Please try again!
                  </p>
                )}
                <button
                  className={styles.button}
                  disabled={!passed || pending || !name || !email || !message}
                  onClick={handleSubmit}>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Contact;
