import { styled } from "styled-components";

import diceImage from "../assets/dices 1.svg";

import { Button } from "../style/Button";

const StartGame = () => {
    return (
        <Container>
            <img src={diceImage} alt="diceImage" />
            <div className="content">
                <h1>Dice</h1>
                <Button>PLAY</Button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    justify-content: space-between;
    padding: 2rem;

    .content h1 {
        font-size: 3em;
        white-space: nowrap;
    }
`;

export default StartGame;
