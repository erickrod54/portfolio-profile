import React, { useContext } from "react";
import { data_test,
         HeaderTitleData,
         profilePictureImg,
         OverviewData,
         AboutPageData,
         social, social_title, DummyFeaturesData, 
         TEAM_MEMBERS,
         ResumeData} from "../data.static";

/**Portfolio-erick - version 56.04 - context.data
 *  - Features:
 *  
 *      --> Importing and providing 'ResumeData'.
 * 
 * Notes: This context will provide static data for 
 * the components that need it 
 */

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {

    const context_data_test = 'from context data';

    return(
        <DataContext.Provider 
            value={{
                context_data_test,
                data_test,
                profilePictureImg,
                social,
                social_title,
                HeaderTitleData,
                DummyFeaturesData,
                OverviewData,
                AboutPageData,
                TEAM_MEMBERS,
                ResumeData
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}