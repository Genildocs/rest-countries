import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const ButtonBack = () => {
    return (
        <Wrapper className="bg-whiteText dark:bg-DarkBlue">
            <Link to={"/"} className="flex justify-center items-center py-3">
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
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                </svg>

                <h5>Back</h5>
            </Link>
        </Wrapper>
    );
};

export default ButtonBack;

export const Wrapper = styled.div`
  width: 30%;
  margin: 3rem 2rem 0 2rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
`;
