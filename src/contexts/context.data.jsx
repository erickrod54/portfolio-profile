import React, { useContext } from "react";
import { data_test,
         HeaderTitleData,
         profilePictureImg,
         OverviewData,
         AboutPageData,
         social, social_title, DummyFeaturesData } from "../data.static";

/**Portfolio-erick - version 55.13 - context.data
 *  - Features:
 *  
 *      --> Importing and providing 'AboutPageData'.
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
                social_title,
                HeaderTitleData,
                DummyFeaturesData,
                OverviewData,
                AboutPageData,
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}