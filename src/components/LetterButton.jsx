import React from 'react';

function LetterButton(props) {

    const [buttonState, setButtonState] = React.useState(true);

    function disableLetter(){
        setButtonState(false);
    }

    function checkLetter(){
        if(buttonState === false){
            console.log("Button is already disabled");
        } else {
            console.log("Resetting timer");
            props.resetTimer();
            disableLetter();
        }
    }

    React.useEffect(() => {
        function keyDownHandler(event) {
            event.preventDefault();
            if (!props.isInputBlocked && event.key.toUpperCase() === props.letter) {
                checkLetter();
            };
        };
    
        document.addEventListener('keydown', keyDownHandler);

        return (() => {
            document.removeEventListener('keydown', keyDownHandler);
        })

    });

    React.useEffect(() => {
        if (props.isKeyReset) {
            setButtonState(true);
        }
    }, [props.isKeyReset])


    return (
        <button disabled={props.isInputBlocked ? true : false} className={"letter-button " + (buttonState ? "button-enabled" : "button-disabled")} onClick={checkLetter}>
            {props.letter}
        </button>
    )

}

export default LetterButton;