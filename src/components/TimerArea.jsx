import React from "react";
import Timer from "./Timer";

function TimerArea(props) {

    return (
        <div className="timer-area">
            <Timer isPaused={props.isPaused} setIsPaused={props.setIsPaused} timeEnd={props.timeEnd} currentPlayer={props.currentPlayer} countdownApiRef={props.countdownApiRef} remainingSeconds={props.remainingSeconds} setRemainingSeconds={props.setRemainingSeconds} timerKey={props.timerKey} setInputBlocked={props.setInputBlocked} />
        </div>
    );
}

export default TimerArea;