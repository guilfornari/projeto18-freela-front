import styled from "styled-components";

export default function Header() {

    return (
        <HeaderStyled>
            <h1>NBA TRIP the crossover of watching dunks and buying stuff!</h1>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.div`
width: 100vw;
max-width:100%;
height: 140px;
background-color: #FFFFFF;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
z-index: 1;
    
    h1 {
        padding-left: 40px;
        color: red;
        font-family: 'Lato', sans-serif;
        font-size: 40px;
        font-weight: 700;

    }
`;