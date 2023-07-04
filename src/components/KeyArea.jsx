import React from "react";
import LetterButton from "./LetterButton";

function KeyArea(props) {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    return (
        <div className="key-area">
            {letters.map((letter) => {
                return (<LetterButton key={letter} letter={letter} resetTimer={props.resetTimer} isInputBlocked={props.isInputBlocked} isKeyReset={props.isKeyReset}  />);
            })}
        </div>
    )
}

export default KeyArea;