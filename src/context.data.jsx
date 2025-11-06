import React, { useContext } from "react";
import { data_test } from "./data.static";

/**Portfolio-erick - version 53.13 - context.data
 *  - Features:
 *  
 *      --> Building DataContext.
 * 
 * Notes: This context will provide static data for 
 * the components that need it 
 */

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {

    return(
        <DataContext.Provider 
            value={{
                data_test
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}