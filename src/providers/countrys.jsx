import consultCountry from "../axios/axios";
import { createContext, useState, useEffect} from "react";

export const RegionContext = createContext({});

export const RegionProvider = ({children}) =>{
    const [countries, setCoutries] = useState([]);  
    const [searchResults, setSearchResults] = useState([]);    
    console.log(searchResults)
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

    const searchCountry = (searchQuery) => {
        if (searchQuery === "") {
          setSearchResults([]); // Se a pesquisa estiver vazia, limpe os resultados
        } else {
          const filter = countries.filter((item) =>
            item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
          );
          setSearchResults(filter); // Atualize os resultados da pesquisa
        }
      };
    
    

    

    return(
        
        <RegionContext.Provider value={{countries, setCoutries, searchCountry}}>
            {children}
        </RegionContext.Provider>

    )
}