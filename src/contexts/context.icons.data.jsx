import React, { useContext } from "react";
import { DiscordIconData, pythonData } from "../data.icons";

/**Portfolio-erick - version 54.01 - IconsContext
 *  - Features:
 *  
 *      --> Placing context in new directory.
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
                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}