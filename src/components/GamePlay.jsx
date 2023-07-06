import { useState } from "react";

import { styled } from "styled-components";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";

const GamePlay = () => {
    const [score, SetScore] = useState(0);

    const [selectedNumber, setSelectedNumber] = useState();

    const [currentDice, SetCurrentDice] = useState(1);

    const [error, setError] = useState("");

    const [showRules, setShowRules] = useState(false);

    return (
        <main>
            <TotalScore />
            <NumberSelector />
        </main>
    );
};

export default GamePlay;
