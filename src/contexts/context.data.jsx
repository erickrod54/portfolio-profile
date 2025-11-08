import React, { useContext } from "react";
import { data_test, profilePictureImg } from "../data.static";

/**Portfolio-erick - version 53.17 - context.data
 *  - Features:
 *  
 *      --> Placing context in new directory.
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
                profilePictureImg
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}