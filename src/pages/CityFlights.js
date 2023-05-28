import styled from "styled-components";
import Header from "../components/Header";
import FlightCard from "../components/FlightCard";

export default function CityFlights() {

    return (
        <>
            <Header />
            <StyledHome>
                <StyledSideBar>
                    Filtro
                </StyledSideBar>
                <StyledFlightsContainer>
                    <h1>Flights to your game!</h1>
                    <StyledFlightCardsContainer>
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                        <FlightCard />
                    </StyledFlightCardsContainer>
                </StyledFlightsContainer>
            </StyledHome>
        </>
    );
}

const StyledHome = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 140px;
    background-color: lightblue;
    display: flex;
    font-family: 'Lato', sans-serif;
`;

const StyledSideBar = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;
`;

const StyledFlightsContainer = styled.div`
    width: 80vw;
    height: 100vh;
    background-color: lightcyan;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 20px;
    h1{
        font-size: 40px;
    }
`;

const StyledFlightCardsContainer = styled.div`
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


