import axios from "axios";

const getUser = async ()=>{
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data.capital);
       
    }catch (error){
        console.log(error)
    }
}


