import React from "react";
import { useAppContext } from "../context";

/**Portfolio-erick - version 1 - Modal
 * Component - Features:
 * 
 *      --> Building generic modal
 *          Component to build a 
 *          contact and login feature
 *          later
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

const Modal = ({ children }) => {

    const { isModalOpen } = useAppContext();

    return(
        <div className={`${isModalOpen ? 
            ('modal-container isOpen ') : 
            ('modal-container')}`}>
                <div className="modal-content">
                    { children }
                </div>
            </div>
    )
}

export default Modal;