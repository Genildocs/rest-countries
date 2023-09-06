import consultCountry from "../axios/axios";
import { createContext, useState, useEffect} from "react";

export const RegionContext = createContext({});

export const RegionProvider = ({children}) =>{
    const [countries, setCoutries] = useState([]);      
   
    const getCountries = async () => {
        try {
            const response = await consultCountry('/all');
            const data = response.data;
            setCoutries(data);
          
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    
    
  

    

    return(
        
        <RegionContext.Provider value={{countries, setCoutries}}>
            {children}
        </RegionContext.Provider>

    )
}