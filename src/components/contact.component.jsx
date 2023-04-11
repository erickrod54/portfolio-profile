import React, { useRef } from "react";
import Modal from "./modal.component";

import { usePortfolioContext } from "../context";

import emailjs from '@emailjs/browser';
import { FaTimes } from 'react-icons/fa';


/**Portfolio-erick - version 6.06 - Contact - Features:
 * 
 *      --> Placing and testing the Component.
 * 
 *      --> Changing versioning to two digits.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
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
        <button onClick={() => closeModal()} className='close-modal-btn'>
            <FaTimes />     
        </button>    
        <section className="contact">
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
        </section>    
        </Modal>
      );
}


export default Contact;