import ButtonBack from "../components/buttonBack";
import { RegionContext } from "../providers/countrys";
import { useContext,  useState, useEffect } from "react";

const Detail = ({pais}) =>{
    const {countries, nation, setNation} = useContext(RegionContext)
    
    console.log(pais)

    return(
        <div>
            <ButtonBack />
           <div>
           {}
           </div>
        </div>
        
    )
    
}

export default Detail