import React, { useRef } from "react";
import Modal from "./modal.component";
import { usePortfolioContext } from "../context";
import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { CloseButton, ContactButton, ContactForm, ContactInput, ContactTextArea, ContactWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 9.03 - Contact - Features:
 * 
 *      --> Migrating 'CloseButton'
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

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
      <ContactWrapper>
        <CloseButton onClick={() => closeModal()} className='close-modal-btn'>
          <FaTimes />     
        </CloseButton>    
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
      </ContactWrapper>    
    </Modal>
  );
}

export default Contact;
