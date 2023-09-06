import { useEffect, useState } from "react";
import consultCountry from "../axios/axios";
import ButtonBack from "../components/buttonBack";
import { Loader } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
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
                        <Infor className="text-LightModeText">
                            <h1 className="font-bold text-2xl mt-8 mb-8">
                                {nations.name.common}
                            </h1>
                            {/* <p className="mb-2.5">
                                    <span className="font-semibold text-lg">Native Name:</span>{" "}
                                    {nations.name.eng.official}
                                </p> */}
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

                            <p>
                                <span className="font-semibold text-lg">Capital:</span>{" "}
                                {nations.capital}
                            </p>
                        </Infor>
                    </Container>
                )))              
                }
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

export const Infor = styled.div``;
export const Container = styled.div`
  margin: 5rem 0 0 2rem;
`;
