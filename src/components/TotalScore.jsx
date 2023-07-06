import { styled } from "styled-components";

const TotalScore = () => {
    return (
        <Score>
            <h1>0</h1>

            <p>Total Score</p>
        </Score>
    );
};

const Score = styled.div`
    max-width: 250px;
    text-align: center;
    /* background-color: yellow; */

    h1 {
        font-size: 100px;
        line-height: 150px;
    }

    p {
        font-size: 24px;
        font-weight: 500;
    }
`;

export default TotalScore;
