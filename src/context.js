import React, { useContext, useState } from "react";
import { constructionbkg, NavBarData,
         ResumeData,
        social } from './data';

/**Portfolio-erick - version 6.04 - context js -
 * Features:
 * 
 *      --> Importing and providing 'constructionbkg'.
 * 
 *      --> Changing versioning to two digits.
 * 
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 * 
 *  isModalOpen
 *  closeModal
 */

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return(
        <AppContext.Provider 
            value={{ 
                NavBarData,
                ResumeData,
                social,
                isModalOpen,
                openModal,
                closeModal,
                constructionbkg
                }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}