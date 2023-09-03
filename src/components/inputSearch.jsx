import { styled } from "styled-components";
const InputSearch = () => {
    return (
        <Wrapper className="flex bg-whiteText">
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6  cursor-pointer "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </div>
            <Input type="text" placeholder="Search for a country..." />           
        </Wrapper>
    );
};

export default InputSearch;

export const Wrapper = styled.div`
  margin: 2rem 1.5rem 0 1.5rem;
  border-radius: 5px;
  padding: 1rem;


`;

export const Input = styled.input`
  margin-left: 1rem;
  
  
  &::placeholder {
    color: #858585;
  }

  &:focus-visible {
    outline: none;
  }
`;
