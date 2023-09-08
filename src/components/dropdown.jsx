import React from "react";
import { styled } from "styled-components";
import { useState, useContext } from "react";

const Dropdown = ({ onSearch }) => {
  const [ismenu, setIsmenu] = useState(false);

  const handleMenu = () => {
    setIsmenu(!ismenu);
  };

  return (
    <div className="drop relative sm:w-[25rem] lg:ml-9">
      <Menu className="flex items-center p-4 cursor-pointer dark:bg-DarkBlue bg-whiteText dark:text-whiteText w-[50%] rounded-md text-base">
        <span onClick={handleMenu}>Filter by Region</span>
        <div className={ismenu ? "hidden" : "block"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
            />
          </svg>
        </div>
        <div className={ismenu ? "block" : "hidden"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
            />
          </svg>
        </div>
      </Menu>

      {ismenu && (
        <Ul  className={` absolute dark:bg-DarkBlue dark:text-whiteText bg-whiteText w-[50%] p-4 rounded-md`}>
          <li
            onClick={() => onSearch("Africa")}
            className="mb-1.5 cursor-pointer hover:bg-Bluehover hover:text-white"
          >
            Africa
          </li>
          <li
            onClick={() => onSearch("America")}
            className="mb-1.5 cursor-pointer hover:bg-Bluehover hover:text-white"
          >
            America
          </li>
          <li
            onClick={() => onSearch("Asia")}
            className="mb-1.5 cursor-pointer hover:bg-Bluehover hover:text-white"
          >
            Asia
          </li>
          <li
            onClick={() => onSearch("Europe")}
            className="mb-1.5 cursor-pointer hover:bg-Bluehover hover:text-white"
          >
            Europe
          </li>
          <li
            onClick={() => onSearch("Oceania")}
            className="mb-1.5 cursor-pointer hover:bg-Bluehover hover:text-white"
          >
            Oceania
          </li>
        </Ul>
      )}
    </div>
  );
};

export default Dropdown;

export const Menu = styled.div`
  margin: 2rem 0 0 1.5rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  gap: 0.5rem; 

  @media(min-width: 1240px){
    margin-left: 11rem;
  }
`;

export const Ul = styled.ul`  
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  margin: 0.5rem 0 0 1.5rem;
  @media(min-width: 1240px){
    margin-left: 11rem;
  }
`;
