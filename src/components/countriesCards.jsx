import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import { styled } from "styled-components";

export default function CountriesCards() {
    const [countries, setCoutries] = useState([]);

    const getCountries = async () => {
        try {
            const response = await axios.get(
                "https://restcountries.com/v3.1/name/peru?fullText=true"
            );

            const data = response.data;
            setCoutries(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    return (
        <Container>
            {countries.length === 0 ? (
                <Loader content="Loading..." />
            ) : (
                countries.map((countrie) => (
                    <div >
                        <img src={countrie.flags.png} alt="" />
                        <div>
                            <h1 className="font-bold ">{countrie.name.common}</h1>
                            <p>{}</p>
                        </div>
                    </div>
                ))
            )}
        </Container>
    );
}

export const Container = styled.div`
  margin: 5rem 3rem 0 3rem;
`;
