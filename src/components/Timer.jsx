import React from "react";
import Countdown from "react-countdown";

function Timer(props){

    React.useEffect(() => {
        if (props.isPaused) {
            props.countdownApiRef.current.pause();
        } else {
            props.countdownApiRef.current.start();
        }
    }, [props.countdownApiRef, props.isPaused]);
    

    function renderer({hours, minutes, seconds, completed}) {
        if (completed) {
            props.setIsPaused(true);
            props.setInputBlocked(true);
            return <h1 className="timer-ended">Player {props.currentPlayer % 2 + 1} Loses!</h1>
        } else if (props.isPaused) {
            return <h1 className="timer">Paused ({seconds}s)</h1>
        } else {
            props.setRemainingSeconds(seconds);
            return <h1 className="timer">{seconds}</h1>
        }
    }

    return (
        <div className={props.remainingSeconds > 10 ? "green" : props.remainingSeconds > 5 ? "yellow" : "red"}>
            <Countdown key={props.timerKey} ref={props.countdownApiRef} date={props.timeEnd} renderer={renderer} />
        </div>
    );
}

export default Timer;