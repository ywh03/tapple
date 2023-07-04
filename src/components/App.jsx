import React from 'react';
import KeyArea from './KeyArea';
import TimerArea from './TimerArea';
import CategoryDisplay from './CategoryDisplay';
import PlayerDisplay from './PlayerDisplay';
import OptionButtons from './OptionButtons';

function App() {

    const [timeEnd, setTimeEnd] = React.useState(Date.now() + 15000);
    const [currentPlayer, setCurrentPlayer] = React.useState(0);
    const childRef = React.useRef();
    const [isPaused, setIsPaused] = React.useState(false);
    const [isInputBlocked, setInputBlocked] = React.useState(false);
    const [isKeyReset, setKeyReset] = React.useState(0);
    const [remainingSeconds, setRemainingSeconds] = React.useState(15);
    const [timerKey, setTimerKey] = React.useState(0);
    const countdownApiRef = React.useRef(null);

    function resetTimer() {
        incrementPlayer();
        setTimeEnd(Date.now() + 15000);
    }

    function incrementPlayer() {
        setCurrentPlayer(currentPlayer + 1);
    }

    function resetCategory() {
        childRef.current.generateCategory();
        resetTimer();
        setCurrentPlayer(0);
    }

    function toggleTimer() {
        setIsPaused(!isPaused);
        setInputBlocked(!isInputBlocked);
    }

    function resetGame() {
        resetCategory();
        resetTimer();
        setKeyReset(isKeyReset + 1);
        setTimerKey(timerKey + 1);
        setCurrentPlayer(0);
        setRemainingSeconds(15);
        setIsPaused(false);
        setInputBlocked(false);
    }


    return (
        <div>
            <CategoryDisplay ref={childRef} />
            <TimerArea timeEnd={timeEnd} currentPlayer={currentPlayer} isPaused={isPaused} setIsPaused={setIsPaused} countdownApiRef={countdownApiRef} remainingSeconds={remainingSeconds} setRemainingSeconds={setRemainingSeconds} timerKey={timerKey} setInputBlocked={setInputBlocked} />
            <KeyArea resetTimer={resetTimer} isInputBlocked={isInputBlocked} isKeyReset={isKeyReset} />
            <PlayerDisplay currentPlayer={currentPlayer} />
            <OptionButtons resetCategory={resetCategory} toggleTimer={toggleTimer} isPaused={isPaused} resetGame={resetGame} />
        </div>
    )
}

export default App;