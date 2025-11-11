import React, { useContext } from "react";
import { amazonAwsData, DiscordIconData, pythonData } from "../data.icons";

/**Portfolio-erick - version 54.03 - IconsContext
 *  - Features:
 *  
 *      --> Importing and providing 'amazonAwsData'.
 * 
 * Notes: This context will provide static data for 
 * the components that need it 
 */

export const IconsContext = React.createContext();

export const IconsContextProvider = ({ children }) => {

    return(
        <IconsContext.Provider 
            value={{
                DiscordIconData,
                pythonData,
                amazonAwsData,
                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}