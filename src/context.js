import React, { useContext, useState } from "react";
import { filePdf, NavBarData, ResumeData, social } from "./data";

/**Portfolio-erick - version 6.06 - context js
 *  - Features:
 * 
 *      --> Refactoring context js file.
 * 
 *      --> Importing and providing data, and features.
 * 
 * Notes: This components is adapted to the new layout
 * and is functional working, pending for layout the 
 * component itself
 */

export const PortfolioContext = React.createContext();

export const PortfolioProvider = ({ children }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <PortfolioContext.Provider 
            value={{
                ResumeData,
                social,
                NavBarData,
                isModalOpen,
                openModal,
                closeModal,
                filePdf
                }}>
            {children}
        </PortfolioContext.Provider>

    )

}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}