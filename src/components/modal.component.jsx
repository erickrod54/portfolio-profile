import React from "react";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 6.06 - Modal - Features:
 * 
 *      --> Adapting modal to the new layout.
 * 
 *      --> Changing versioning to two digits
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

const Modal = ({ children }) => {

    const {  isModalOpen } = usePortfolioContext()

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