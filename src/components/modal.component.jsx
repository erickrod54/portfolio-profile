import React from "react";
import { usePortfolioContext } from "../context";

/**Portfolio-erick - version 6.08 - Modal - Features:
 * 
 *      --> Refactoring Modal condiion
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
                <div>
                    { children }
                </div>
            </div>
    )
}

export default Modal;