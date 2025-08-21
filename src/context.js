import React, { useContext, useState } from "react";
import { filePdf,
         NavBarData,
         profileImagePic,
         ResumeData,
         skillIcons,
         AI_AND_Classic_Eng,
         MenthorshipProgram,
         ResourcesData,
         SocialFooterData,
         BottomData,
         burgerMenuData,
         ghIconData,
         sourceControlData,
         notificationsData,
         codeData,
         issuesData,
         prData,
         firstPrData,
         secondPrData,
         thirdPrData,
         fourthPrData,
         fifthPrData,
         sixthPrData,
         PrMessages,
         HeaderData,
         social, BrandInfoData, amazonAwsData, pythonData, CollabTitleData, WaterTitleData } from "./data";

/**Portfolio-erick - version 38.13 - context js
 *  - Features:
 *  
 *      --> Importing and providing  'HeaderData'.
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
                HeaderData,
                PrMessages,
                sixthPrData,
                fifthPrData,
                fourthPrData,
                thirdPrData,
                secondPrData,
                firstPrData,
                issuesData,
                prData,
                codeData,
                notificationsData,
                sourceControlData,
                ghIconData,
                burgerMenuData,
                BottomData,
                SocialFooterData,
                ResourcesData,
                AI_AND_Classic_Eng,
                MenthorshipProgram,
                BrandInfoData,
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