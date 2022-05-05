import { ContactStyle } from "./Contact.style";

import contactme from "../../assets/contactme.svg";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xvvg2kp",
        "template_t8u084t",
        form.current,
        "6_nPa9S4_Pu0PoLpp"
      )
      .then((res) => {
        console.log(res.text);
        if (res.text === "OK") {
          setSent(true)
        }
        e.target.reset();
      })
      .catch((err) => console.log(err.text));
      setSent(false)
  };

  return (
    <ContactStyle id='contact'>
      <h1>CONTACT ME</h1>
      <div className='container'>
        <div className='contactme-bg'>
          <img src={contactme} alt='' />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Name' name='name' />
          <input type='email' placeholder='Email' name='user_email' />
          <textarea placeholder='Message' rows={9} name='Message' />
          <input type='submit' value='SEND MESSAGE' />
        </form>
      </div>
      {sent && <div className='success'>
        <svg
          width='15'
          height='15'
          viewBox='0 0 15 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_53_48)'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5H0ZM7.072 10.71L11.39 5.312L10.61 4.688L6.928 9.289L4.32 7.116L3.68 7.884L7.072 10.711V10.71Z'
              fill='#E75525'
            />
          </g>
          <defs>
            <clipPath id='clip0_53_48'>
              <rect width='15' height='15' rx='5' fill='white' />
            </clipPath>
          </defs>
        </svg>
        <p>Message sent!</p>
      </div>}
    </ContactStyle>
  );
};

export default Contact;
