import Dropdown from "../components/dropdown";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { styled } from "styled-components";
import InputSearch from "./inputSearch";
import { RegionContext } from "../providers/countrys";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function CountriesCards() {
    const { countries } = useContext(RegionContext);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchQuery) => {
        if (searchQuery === "") {
            setSearchResults([]);
        } else {
            const filter = countries.filter(
                (countrie) =>
                    countrie.name.common
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    countrie.region.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filter);
        }
    };

    useEffect(() => {
        if (searchResults.length === 0) {
            setSearchResults(countries);
        }
    }, [searchResults, countries]);

    return (
        <div className="lg:mx-7">
            <InputSearch onSearch={handleSearch} />
            <Dropdown onSearch={handleSearch} />
            <Container>
                {searchResults.length === 0 ? (
                    <Loader size="md" content="Loading..." />
                ) : (
                    searchResults.map((countrie) => (
                        <Link
                            to={`/detail/${countrie.name.common}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Region className={`${countrie.fifa} mb-6`}>
                                <Img
                                    src={countrie.flags.png}
                                    alt={`flags ${countrie.name.common}`}
                                />
                                <Country className="bg-whiteText text-LightModeText dark:bg-DarkBlue dark:text-white">
                                    <h1 className="font-bold text-2xl mb-3">
                                        {countrie.name.common}
                                    </h1>
                                    <p className="mb-2.5">
                                        <span className="font-semibold text-lg ">Population:</span>{" "}
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
                            </Region>
                        </Link>
                    ))
                )}
            </Container>
        </div>
    );
}

export const Container = styled.div`
  margin: 3rem 3rem 0 3rem;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;

    @media(min-width: 768px){
        grid-template-columns: repeat(auto-fit, minmax(0,320px));
        gap: 6rem;
        margin: 3rem 1rem 0 1rem;
    }
  }
`;

export const Img = styled.img`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const Country = styled.div`
  padding: 2rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15); 
  width: 100% ;
`;

export const Region = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
