import styled from "styled-components";
import Header from "../components/Header";
import FlightCard from "../components/FlightCard";
import MinSliderFilter from "../components/MinSliderFilter";
import MaxSliderFilter from "../components/MaxSliderFilter";

export default function CityFlights() {
    return (
        <>
            <Header />
            <StyledHome>
                <StyledSideBar>
                    <h3>Preço Mínimo</h3>
                    <MinSliderFilter />
                    <h3>Preço Máximo</h3>
                    <MaxSliderFilter />
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
    width: 25vw;
    height: 100vh;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 5px;
    h3{
        margin: 40px 0 10px 0;
    }
`;

const StyledFlightsContainer = styled.div`
    width: 75vw;
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


