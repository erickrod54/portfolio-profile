import React, { useContext } from "react";
import { DiscordIconData } from "../data.icons";

/**Portfolio-erick - version 53.17 - IconsContext
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

                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}