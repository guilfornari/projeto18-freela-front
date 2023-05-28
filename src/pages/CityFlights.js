import styled from "styled-components";
import Header from "../components/Header";

export default function CityFlights() {

    return (
        <>
            <Header />
            <StyledHome>
                What!
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