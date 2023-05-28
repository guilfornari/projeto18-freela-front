import { useNavigate } from "react-router-dom";
import styled from "styled-components";


export default function FlightCard({ flight }) {
    const navigate = useNavigate();

    function selectFlight(flight) {
        navigate(`/flight/:${flight}`)
    }

    return (
        <ContainerStyled onClick={() => selectFlight(flight)}>
            <figure>
                <img src="https://thumbs.dreamstime.com/b/postcard-chicago-38480322.jpg" alt="Chicago postcard" />
            </figure>
            <div>
                <p>Data e Horário</p>
                <p>R${flight}.00</p>
                <p>Cidade de partida</p>
            </div>
        </ContainerStyled>
    );
}

const ContainerStyled = styled.div`
box-sizing: border-box;
width: 180px;
height: 240px;
background-color: lightgoldenrodyellow;
display: flex;
flex-direction: column;
align-items: center;
margin: 20px 30px;
border: solid 1px black;
cursor: pointer;
    figure {
        img{
            width: 178px;
        }
    }

    div{
        width: 138px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        p{
            font-size: 12px;
        }
    }
`;