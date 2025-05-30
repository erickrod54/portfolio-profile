import React, { useContext, useState } from "react";
import { filePdf, NavBarData, profileImagePic, ResumeData, skillIcons, social, amazonAwsData, pythonData, CollabTitleData, WaterTitleData } from "./data";

/**Portfolio-erick - version 22.10 - context js
 *  - Features:
 *  
 *      --> Importing and providing 'WaterTitleData'.
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
                WaterTitleData,
                CollabTitleData,
                social,
                NavBarData,
                isModalOpen,
                openModal,
                closeModal,
                filePdf,
                skillIcons,
                profileImagePic,
                amazonAwsData,
                pythonData
                }}>
            {children}
        </PortfolioContext.Provider>

    )

}

export const usePortfolioContext = () => {
    return useContext(PortfolioContext)
}