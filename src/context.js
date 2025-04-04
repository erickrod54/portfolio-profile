import React, { useContext, useState } from "react";
import { filePdf, NavBarData, ResumeData, skillIcons, social } from "./data";

/**Portfolio-erick - version 9.13 - context js
 *  - Features:
 *  
 *      --> Importing and providing 'skillIcons'.
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
                filePdf,
                skillIcons,
                }}>
            {children}
        </PortfolioContext.Provider>

    )

}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}