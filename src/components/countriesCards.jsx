import Dropdown from "../components/dropdown";
import React, { useEffect, useState } from "react";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { styled } from "styled-components";
import InputSearch from "./inputSearch";
import { RegionContext } from "../providers/countrys";
import { useContext } from "react";
import { Link } from "react-router-dom";
import BtnLearMore from "./btnlmore";
export default function CountriesCards() {
  const { countries } = useContext(RegionContext);
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(8);

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

  const showMoreIten = () => {
    setVisible((prevValue) => prevValue + 8);
  };

  return (
    <div className="lg:mx-7">
      <div className="lg:flex lg:justify-between lg:items-center ">
        <InputSearch onSearch={handleSearch} />
        <Dropdown onSearch={handleSearch} />
      </div>

      <div className=" mt-5 grid grid-cols-auto-fit gap-y-12 justify-center min-h-screen sm:gap-x-12">
        {searchResults.length === 0 ? (
          <div className=" absolute bottom-1/2 right-1/2 translate-x-[50%] translate-y-[50%]">
            <Loader size="md" content="Loading..." />
          </div>
        ) : (
          searchResults.slice(0, visible).map((countrie) => (
            <Link
              to={`/detail/${countrie.name.common.toLowerCase()}`}
              style={{ textDecoration: "none", color: "inherit" }}
              key={countrie.name.common}
            >
              <div className=" h-[21rem] shadow-concreto rounded-md overflow-hidden">
                <div className="h-[10rem]">
                  <img
                    src={countrie.flags.png}
                    alt={`flags ${countrie.name.common}`}
                    className=" object-cover h-full w-full shadow-concreto"
                  />
                </div>
                <div className="pl-6 pt-3 pb-5 ">
                  <h1 className="font-bold mb-4 text-lg">
                    {countrie.name.common}
                  </h1>
                  <p className="mb-2.5">
                    <span className=" font-bold ">Population:</span>{" "}
                    {Number(countrie.population).toLocaleString("en", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="mb-2.5">
                    <span className=" font-bold">Region:</span>{" "}
                    {countrie.region}
                  </p>
                  <p>
                    <span className=" font-bold">Capital:</span>{" "}
                    {countrie.capital}
                  </p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
      {searchResults.length !== 0 && (
        <BtnLearMore showMoreIten={showMoreIten} />
      )}
    </div>
  );
}

export const Country = styled.div`
  padding: 2rem;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  width: 100%;
  max-width: 20rem;
`;
