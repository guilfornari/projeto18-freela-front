import styled from "styled-components";
import Header from "../components/Header";
import FlightCard from "../components/FlightCard";
import MaxSliderFilter from "../components/MaxSliderFilter";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useState } from "react";

export default function CityFlights() {

    const flights = ["2800", "3500", "6000", "7000", "30000", "40000"];

    const marks = [
        {
            value: 2500,
            label: "R$2500",
        },
        {
            value: 3000,
            label: "R$3000",
        },
        {
            value: 3500,
            label: "R$3500",
        },
        {
            value: 4000,
            label: "R$4000",
        },
    ];

    function valuetext(value) {
        return `${value}`;
    }

    function valueLabelFormat(value) {
        return marks.findIndex((mark) => mark.value === value) + 1;
    }

    const [minValue, setMinValue] = useState(2500);
    const [filteredFlights, SetFilterdFlights] = useState(flights)


    function filterFlights() {
        const flightList = flights.filter(f => f > minValue);
        SetFilterdFlights(flightList);
    }

    return (
        <>
            <Header />
            <StyledHome>
                <StyledSideBar>
                    <h3>Preço Mínimo</h3>
                    <Box sx={{ width: 250 }}>
                        <Slider
                            onChange={e => setMinValue(e.target.value)}
                            onChangeCommitted={filterFlights}
                            aria-label="Restricted values"
                            defaultValue={2500}
                            valueLabelFormat={valueLabelFormat}
                            getAriaValueText={valuetext}
                            step={500}
                            valueLabelDisplay="auto"
                            marks={marks}
                            min={2500}
                            max={4000}
                            value={minValue}
                        />
                    </Box>
                    <h3>Preço Máximo</h3>
                    <MaxSliderFilter />
                </StyledSideBar>
                <StyledFlightsContainer>
                    <h1>Flights to your game!</h1>
                    <StyledFlightCardsContainer>
                        {filteredFlights.map(f => <FlightCard key={f} flight={f} />)}
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


