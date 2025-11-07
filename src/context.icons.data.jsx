import React, { useContext } from "react";
import { DiscordIconData } from "./data.icons";

/**Portfolio-erick - version 53.15 - IconsContext
 *  - Features:
 *  
 *      --> Importing and providing 'DiscordIconData'.
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

                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}