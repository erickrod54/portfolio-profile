import React, { useRef } from "react";
import Modal from "./modal.component";

import { useAppContext } from "../context";

import styled from "styled-components";

import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';


/**Portfolio-erick - version 4 - Contact - Features:
 * 
 *      --> Building 'sendEmail' feature.
 * 
 *      --> Adding closeModal in order to close 
 *          the email modal.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 * 
 *  name - email - subject - message
 * 
 * My Default Template
Template ID:
 */

const Contact = () => {

    const { closeModal } = useAppContext()
    
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
        <button onClick={() => closeModal()} className='close-modal-btn'>
            <FaTimes />     
        </button>    
        <ContactWrapper>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <label>your name</label>
            <li>
            <input type="text" name="user_name" placeholder='type your name'/>
            </li>
            <label>your email</label>
            <li>
            <input type="email" name="user_email" placeholder='type your email'/>
            </li>
            <label>Message</label>
            <li>
            <textarea name="message" placeholder='type your message'/>
            <input type="submit" value="Send" />
            </li>
          </ul>
        </form>
        </ContactWrapper>    
        </Modal>
      );
}

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    label{
        text-transform:capitalize;
        font-weight: 700;
    }

    input, textarea{
        width: 70%;
        border-radius: .25rem;
        resize: vertical;
    }

    .input-message{
        height: 4rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        list-style-type: none;
    }

    li{
        padding: .60rem;
    }
`

export default Contact;