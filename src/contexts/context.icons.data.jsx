import React, { useContext } from "react";
import { amazonAwsData, DiscordIconData, js_SquareData, pythonData } from "../data.icons";

/**Portfolio-erick - version 54.05 - IconsContext
 *  - Features:
 *  
 *      --> Importing and providing 'js_SquareData'.
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
                js_SquareData,
                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}