import React, { useContext } from "react";
import { data_test, HeaderTitleData, profilePictureImg, social } from "../data.static";

/**Portfolio-erick - version 53.20 - context.data
 *  - Features:
 *  
 *      --> Importing and providing 'HeaderTitleData'.
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
                HeaderTitleData,
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}