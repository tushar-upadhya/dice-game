import { useState } from "react";

const GamePlay = () => {
    const [score, SetScore] = useState(0);

    const [selectedNumber, setSelectedNumber] = useState();

    const [currentDice, SetCurrentDice] = useState(1);

    const [error, setError] = useState("");

    const [showRules, setShowRules] = useState(false);

    return <div></div>;
};

export default GamePlay;
