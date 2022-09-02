import React, { useContext } from "react";
import { NavBarData } from './data'

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {

    return(
        <AppContext.Provider value={{ NavBarData}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}