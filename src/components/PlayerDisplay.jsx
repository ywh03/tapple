import React from "react";

function PlayerDisplay(props) {
    let playerCount = 2;
    return (
        <div className="player-display">
            <h1>Current Player:</h1>
            <h1><span>{props.currentPlayer % 2 ? null : "<-- "  }</span>Player {props.currentPlayer % playerCount + 1}<span>{props.currentPlayer % 2 ? " -->" : null}</span></h1>
        </div>
    )
}

export default PlayerDisplay;