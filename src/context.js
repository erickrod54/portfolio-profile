import React, { useContext } from "react";
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
 * Notes: By this version changes to the data
 * has been made in order to get the essential
 * information
 */

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    return(
        <AppContext.Provider 
            value={{ 
                NavBarData,
                ResumeData,
                social
                }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}