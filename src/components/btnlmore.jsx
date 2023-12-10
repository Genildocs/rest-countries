import styled from "styled-components";
export default function BtnLearMore({ showMoreIten }) {
  return (
    <Divlmore className="flex justify-center  ">
      <Btnlmore onClick={showMoreIten} className="flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        Load more
      </Btnlmore>
    </Divlmore>
  );
}

export const Divlmore = styled.div`
  grid-column: 1 / -1;
`;

export const Btnlmore = styled.button`
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;

  &::before {
    content: "";
    height: 2px;
    background: #85000d;
    position: absolute;
    bottom: 0;
    width: 0%;
    transition: all 0.5s;
  }

  &:hover::before {
    width: 80%;
  }

  &:hover {
    color: #85000d;
  }
`;
