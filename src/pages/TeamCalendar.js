import styled from "styled-components";
import Header from "../components/Header";


export default function TeamCalendar() {

    return (
        <>
            <Header />
            <StyledHome>
                TeamCalendar
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
    align-items: center;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
`;

