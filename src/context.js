import React, { useContext, useState } from "react";
import { NavBarData,
         ResumeData,
        social   } from './data';

/**Portfolio-erick - version 1 - context js -
 * Features:
 * 
 *      -->  Importing 'NavBarData', 'ResumeData', 
 *          and 'social' from data js file
 * 
 *      --> Providing the datta througth the provider
 *          to use it on the application.
 * 
 *      --> Building 'isModalOpen', 'openModal' and
 *          'closeModal' to build the Contact
 *           Component
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
                closeModal
                }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}