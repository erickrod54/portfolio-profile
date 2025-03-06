import React, { useRef } from "react";
import Modal from "./modal.component";
import { usePortfolioContext } from "../context";
import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { ContactForm } from "../styled-components/styled.components";

/**Portfolio-erick - version 8.17 - Contact - Features:
 * 
 *      --> Migrating 'ContactForm'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const ContactInput = styled.input`
  padding: 10px;
  margin: 10px 0;
`;

const ContactTextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
`;

const ContactButton = styled.input`
  padding: 10px 20px;
  margin: 10px 0;
  font-size: 17px;
  font-weight: 500;
  color: yellow;
  background-color: transparent;
  border: 2px solid yellow;
  transition: 0.5s ease;
  user-select: none;
`;

const Contact = () => {
  const { closeModal } = usePortfolioContext()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2ty4p3i', 'template_w3jpd4s', form.current, 'rQysZwpxWQqwyMhIY')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
    closeModal()
  };

  return (
    <Modal>
      <section className="contact">
        <button onClick={() => closeModal()} className='close-modal-btn'>
          <FaTimes />     
        </button>    
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ul>
            <label>your name</label>
            <li>
              <ContactInput type="text" name="user_name" placeholder='type your name' />
            </li>
            <label>your email</label>
            <li>
              <ContactInput type="email" name="user_email" placeholder='type your email' />
            </li>
            <label>Message</label>
            <li>
              <ContactTextArea name="message" placeholder='type your message' />
            </li>
            <ContactButton type="submit" value="Send" />
          </ul>
        </ContactForm>
      </section>    
    </Modal>
  );
}

export default Contact;
