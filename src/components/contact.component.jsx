import React from "react";
import Modal from "./modal.component";

import { useAppContext } from "../context";

import styled from "styled-components";

/**Portfolio-erick - version 1 - Contact - Features:
 * 
 *      --> Building 'Contact' Modal.
 * 
 * Notes: By this version all tasks are done 
 * for this component
 */

const Contact = () => {

    const { closeModal } = useAppContext()

    return(
        <Modal>
            <ContactWrapper>
            <h4>subject:</h4>
            <input  type='text' placeholder='type subject here'/>
            <h4>message:</h4>
            <input className="input-message" type='text' placeholder='type message here'/>
            <button type="submit" className="btn close-btn"
                     onClick={closeModal }   
                    >send message</button>
            </ContactWrapper>
        </Modal>
    )
}

export const ContactWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4{
        text-transform:capitalize;
        text-decoration: underline;
        display: flex;
    }

    input{
        width: 70%;
        border-radius: .25rem;
    }

    .input-message{
        height: 4rem;
    }
`

export default Contact;