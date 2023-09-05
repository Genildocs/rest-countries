import consultCountry from "../axios/axios";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { styled } from "styled-components";
import InputSearch from "./inputSearch";

export default function CountriesCards() {
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

    return (
        <div>
            <InputSearch countries={countries} setCoutries={setCoutries}/>
            <Container>
                {countries.length === 0 ? (
                    <Loader size="md" content="Loading..." />
                ) : (
                    countries.map((countrie) => (
                        <div  className={`${countrie.fifa} mb-6`}>
                            <Img
                                src={countrie.flags.png}
                                alt={`flags ${countrie.name.common}`}
                            />
                            <Country className="bg-whiteText dark:bg-DarkBlue dark:text-white">
                                <h1 className="font-bold text-2xl mb-3">
                                    {countrie.name.common}
                                </h1>
                                <p className="mb-2.5">
                                    <span className="font-semibold text-lg">Population:</span>{" "}
                                    {Number(countrie.population).toLocaleString("en", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </p>
                                <p className="mb-2.5">
                                    <span className="font-semibold text-lg">Region:</span>{" "}
                                    {countrie.region}
                                </p>
                                <p>
                                    <span className="font-semibold text-lg">Capital:</span>{" "}
                                    {countrie.capital}
                                </p>
                            </Country>
                        </div>
                    ))
                )}
            </Container>
        </div>
    );
}

export const Container = styled.div`
  margin: 5rem 3rem 0 3rem;
`;

export const Img = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 100%;
`;

export const Country = styled.div`
  padding: 2rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
`;
