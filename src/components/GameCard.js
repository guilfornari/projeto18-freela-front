import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function GameCard({ city }) {
    const navigate = useNavigate();

    function selectGame(city) {
        navigate(`/city/:${city}`)
    }

    return (
        <ContainerStyled onClick={() => selectGame(city)}>
            <h1>- Date</h1>
            <h2>awayTeam @ homeTeam</h2>
            <h2>{city}</h2>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
box-sizing: border-box;
width: 500px;
height: 40px;
padding: 1px 20px;
background-color: lightgoldenrodyellow;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5px;
cursor: pointer;
`;