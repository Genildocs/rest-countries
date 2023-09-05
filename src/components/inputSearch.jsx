import { useState } from "react";
import { styled } from "styled-components";
import { RegionContext } from "../providers/countrys";
import { useContext } from "react";
const InputSearch = () => {
  const { countries, setCoutries } = useContext(RegionContext);
  const [search, setSearch] = useState("");
  const searchCountry = () => {
    const country = [...countries];
    const filter = country.filter((item) => {
      return item.name.common === search
        ? item.name.common
        : console.log("Isfalse");
    });

    setCoutries(filter);
  };

  const handleClick = () => {
    if (search === "") return;
    setSearch("");
    searchCountry();
  };

  return (
    <Wrapper className="flex bg-whiteText dark:bg-DarkBlue">
      <button onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6  cursor-pointer text-DarkGray dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="dark:text-white"
        type="text"
        placeholder="Search for a country..."
      />
    </Wrapper>
  );
};

export default InputSearch;

export const Wrapper = styled.div`
  margin: 2rem 1.5rem 0 1.5rem;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
`;

export const Input = styled.input`
  margin-left: 1rem;
  background: transparent;

  &::placeholder {
    color: #858585;
  }

  &:focus-visible {
    outline: none;
  }
`;
