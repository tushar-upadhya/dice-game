import { useState } from "react";
import "./App.css";

import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
    const [isGameStart, setIsGameStart] = useState(true);

    const handleToggle = () => {
        setIsGameStart((prev) => !prev);
    };

    return (
        <>
            {isGameStart ? (
                <GamePlay />
            ) : (
                <StartGame handleToggle={handleToggle} />
            )}
        </>
    );
}

export default App;
