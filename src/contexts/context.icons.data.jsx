import React, { useContext } from "react";
import { amazonAwsData, DiscordIconData, js_SquareData, pythonData, react_GradientData } from "../data.icons";

/**Portfolio-erick - version 54.07 - IconsContext
 *  - Features:
 *  
 *      --> Importing and providing 'react_GradientData'.
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
                react_GradientData,
                }}>
            {children}
        </IconsContext.Provider>

    )

}

export const useIconsContext = () => {
    return useContext(IconsContext)
}