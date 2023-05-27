import styled from "styled-components"

export default function Header() {

    return (
        <HeaderStyled>
            <h1>Meteor Store</h1>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
width: 100vw;
max-width:100%;
height: 140px; 
background-color: #1D1F2D;
position: fixed;
top: 0;
left: 0;
display: flex;
align-items: center;
z-index: 1;
    
    h1 {
        width: 100px;
        color: red;
        font-size: 30px;
        font-family: 'Poppins';
        font-weight: 500;
    }
`;