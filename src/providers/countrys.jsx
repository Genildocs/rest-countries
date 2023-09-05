import { createContext } from "react";

export const RegionContext = createContext({});

export const RegionProvider = ({children}) =>{

    return(
        
        <RegionContext.Provider value={{}}>
            {children}
        </RegionContext.Provider>

    )
}