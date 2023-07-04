import React from "react";

function OptionButtons(props) {
    return (
        <div className="option-buttons">
            <button onClick={props.resetCategory}>Reset Category</button>
            <button onClick={props.resetGame}>Reset Game</button>
            <button onClick={props.toggleTimer}>{ props.isPaused ? "Resume Timer" : "Pause Timer"}</button>
        </div>
    )
}

export default OptionButtons;