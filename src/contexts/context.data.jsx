import React, { useContext } from "react";
import { data_test, profilePictureImg, social } from "../data.static";

/**Portfolio-erick - version 53.18 - context.data
 *  - Features:
 *  
 *      --> Importing and providing 'social'.
 * 
 * Notes: This context will provide static data for 
 * the components that need it 
 */

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {

    return(
        <DataContext.Provider 
            value={{
                data_test,
                profilePictureImg,
                social,
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}