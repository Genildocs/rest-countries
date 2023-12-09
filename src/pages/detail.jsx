import { useEffect, useState } from "react";
import consultCountry from "../axios/axios";
import ButtonBack from "../components/buttonBack";
import { Loader } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
const Detail = () => {
  const [nations, setNations] = useState([]);
  const { nation } = useParams();

  const getNation = async () => {
    try {
      const response = await consultCountry(`name/${nation}`);
      const data = response.data;
      setNations(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNation();
  }, []);

  return (
    <div>
      <ButtonBack />
      <div>
        {nations.length === 0 ? (
          <Loader size="md" content="Loading..." />
        ) : (
          nations.map((nations) => (
            <Container>
              <Images>
                <Img src={nations.flags.svg} alt={nations.flags.alt} />
              </Images>
              <Infor className="text-LightModeText dark:text-white">
                <Title>
                  <h1 className="font-bold text-2xl mt-8 mb-8 ">
                    {nations.name.common}
                  </h1>
                </Title>

                <div>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg">Native Name:</span>{" "}
                    {Object.values(nations.name.nativeName)[0].common}
                  </p>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg ">Population:</span>{" "}
                    {Number(nations.population).toLocaleString("en", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg">Region:</span>{" "}
                    {nations.region}
                  </p>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg">Sub Region:</span>{" "}
                    {nations.subregion}
                  </p>

                  <p className="mb-12">
                    <span className="font-semibold text-lg">Capital:</span>{" "}
                    {nations.capital}
                  </p>
                </div>

                <div>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg">
                      Top Level Domain:
                    </span>{" "}
                    {nations.tld}
                  </p>
                  <p className="mb-2.5">
                    <span className="font-semibold text-lg">Curriencies:</span>{" "}
                    {`(${Object.values(nations.currencies)[0].symbol}) ${
                      Object.values(nations.currencies)[0].name
                    }`}
                  </p>
                  <p className="mb-12">
                    <span className="font-semibold text-lg">Languages:</span>{" "}
                    {Object.values(nations.languages).map(
                      (item, index, nations) => `(${nations[index]}) `
                    )}
                  </p>
                </div>

                <div>
                  <p className="mb-12">
                    <span className="font-semibold text-lg">
                      Border Countries:
                    </span>
                    <Dbtn className="dark:text-LightModeText">
                      {nations.borders
                        ? nations.borders.map((item, index, nations) => (
                            <Btn className="bg-whiteText">{nations[index]}</Btn>
                          ))
                        : ""}
                    </Dbtn>
                  </p>
                </div>
              </Infor>
            </Container>
          ))
        )}
      </div>
    </div>
  );
};

export default Detail;

export const Img = styled.img`
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
`;

export const Images = styled.div`
  width: 100%;
  max-width: 80%;
`;

export const Infor = styled.div`
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Container = styled.div`
  margin: 5rem 0 0 2rem;
  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Dbtn = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Btn = styled.button`
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`;

export const Title = styled.div`
  grid-column: 1 / -1;
`;
