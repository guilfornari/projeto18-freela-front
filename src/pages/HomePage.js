import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { useState } from "react";

export default function HomePage() {

    const [value, setValue] = useState("");
    const navigate = useNavigate();

    const teams = ["Chicago", "Denver", "LA", "Miami"];


    function selectTeam(event) {
        event.preventDefault();
        navigate(`/team/${value}`)
    }

    return (
        <>
            <Header />
            <StyledHome>
                <StyledSelection>
                    <form onSubmit={selectTeam}>
                        <select value={value} onChange={e => setValue(e.target.value)}>
                            {teams.map(t => <option value={t}>{t}</option>)}
                        </select>
                        <button type="submit">
                            Select
                        </button>
                    </form>
                </StyledSelection>
                <StyledHomeGray>
                    <figure>
                        <img src="https://fadeawayworld.net/.image/t_share/MTgwMTMyNzY1NTY5NTkwNjE2/how-did-your-favorite-nba-team-get-its-name-the-origin-of-every-nba-teams-name.jpg"
                            alt="first" />
                        First pick your team!
                    </figure>
                    <figure>
                        <img src="https://fadeawayworld.net/.image/t_share/MTgwMTMyNzY1NTY5NTkwNjE2/how-did-your-favorite-nba-team-get-its-name-the-origin-of-every-nba-teams-name.jpg"
                            alt="second" />
                        First pick your team!
                    </figure>
                    <figure>
                        <img src="https://fadeawayworld.net/.image/t_share/MTgwMTMyNzY1NTY5NTkwNjE2/how-did-your-favorite-nba-team-get-its-name-the-origin-of-every-nba-teams-name.jpg"
                            alt="third" />
                        First pick your team!
                    </figure>
                </StyledHomeGray>
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

const StyledHomeGray = styled.div`
    width:100vw;
    margin-top: 100px;
    height: 260px;
    display: flex;
    justify-content: space-around;
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: solid 3px red;
        background-color: white;
        img{
            width:300px;
            margin-bottom: 5px;
        }

    }

`;

const StyledSelection = styled.div`
    width: 585px;
    margin-top: 120px;
    color: #FFFFFF;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        select {
            width: 500px;
            height: 50px !important;
            line-height: 50px;
            font-size: 20px;
            border: solid 2px gray;
        }
        button {
            margin-top: 10px;
            height: 50px;
            width: 200px;
            font-size: 20px;
            background-color: red;
            border-style: none;
            border-radius: 5px;
            cursor: pointer;
        }
    }
`;