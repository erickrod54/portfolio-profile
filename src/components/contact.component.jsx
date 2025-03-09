import React, { useRef } from "react";
import Modal from "./modal.component";
import { usePortfolioContext } from "../context";
import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { CloseButton, ContactButton, ContactForm, ContactInput, ContactTextArea, ContactWrapper } from "../styled-components/styled.components";

/**Portfolio-erick - version 9.05 - Contact - Features:
 * 
 *      --> writitng 'ContactTitle'
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

  const ContactList = styled.ul`
  
  `

  const ContactTitle = styled.label`
    font-weight: 700;
    text-transform: capitalize;
    font-size: larger;
  `

  return (
    <Modal>
      <ContactWrapper>
        <CloseButton onClick={() => closeModal()} className='close-modal-btn'>
          <FaTimes />     
        </CloseButton>    
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactList>
            <ContactTitle>your name</ContactTitle>
            <li>
              <ContactInput type="text" name="user_name" placeholder='type your name' />
            </li>
            <ContactTitle>your email</ContactTitle>
            <li>
              <ContactInput type="email" name="user_email" placeholder='type your email' />
            </li>
            <ContactTitle>Message</ContactTitle>
            <li>
              <ContactTextArea name="message" placeholder='type your message' />
            </li>
            <ContactButton type="submit" value="Send" />
          </ContactList>
        </ContactForm>
      </ContactWrapper>    
    </Modal>
  );
}

export default Contact;
