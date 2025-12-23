import React, { useContext } from "react";
import { data_test,
         HeaderTitleData,
         profilePictureImg,
         OverviewData,
         AboutPageData,
         social, social_title, DummyFeaturesData, 
         TEAM_MEMBERS,
         ResumeData} from "../data.static";
import { fetchResumeData } from "../../api/resume_api";
import { useQuery } from "@tanstack/react-query";

/**Portfolio-erick - version 57.08 - context.data
 *  - Features:
 *  
 *      --> Fetching data from my back end server by 'resume_api'.
 * 
 * Notes: The data set comes from 'ResumeData'
 */

export const DataContext = React.createContext();

export const DataContextProvider = ({ children }) => {

    const { data: ResumeData, isLoading, error } = useQuery({
        queryKey: ['resumeData'],
        queryFn: fetchResumeData,
        staleTime: 1000 * 60 * 5, // Keep data fresh for 5min
    })

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
                ResumeData,
                isLoading,
                error
                }}>
            {children}
        </DataContext.Provider>

    )

}

export const useDataContext = () => {
    return useContext(DataContext)
}