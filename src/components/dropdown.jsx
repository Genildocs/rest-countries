import React from "react";
import { styled } from "styled-components";
import { useState, useContext } from "react";

const Dropdown = ({ onSearch }) => {
  const [ismenu, setIsmenu] = useState(false);

  

  return (
    <div className="drop relative sm:w-[25rem]">
      <Menu className="flex items-center" onClick={() => setIsmenu(!ismenu)}>
        <span>Filter by Region</span>
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

      <Ul className={`${ismenu ? "block" : "hidden"} absolute`}>
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
    </div>
  );
};

export default Dropdown;

export const Menu = styled.div`
  background: #ffffff;
  margin-top: 2rem;
  margin-left: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  width: 50%;
  font-size: 1rem;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Ul = styled.ul`
  background: #ffffff;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  width: 50%;
  border-radius: 5px;
  padding: 1rem;
`;
