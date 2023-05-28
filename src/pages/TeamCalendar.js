import styled from "styled-components";
import Header from "../components/Header";
import GameCard from "../components/GameCard";


export default function TeamCalendar() {

    const cities = ["Chicago", "Denver", "LA", "Miami"];

    return (
        <>
            <Header />
            <StyledHome>
                {cities.map(c => <GameCard key={c} city={c} />)}
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
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    padding: 10px 20px;
`;

