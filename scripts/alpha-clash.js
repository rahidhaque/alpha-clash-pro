function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    const currentAlphabetString = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetString.innerText.toLowerCase();



    if (playerPressed === currentAlphabet) {
        // const currentScoreText = document.getElementById('score');
        // const currentScore = parseInt(currentScoreText.innerText);
        const currentScore= getElementValue('score');
        //increase player score
        const newScore = currentScore + 1;
        // currentScoreText.innerText = newScore;
        setElementValue('score', newScore);
        //continue the game
        removeBackgroundColor(currentAlphabet);
        continueGame();
    }
    else {
        //decrease life
        // const currentLifeText= document.getElementById('life');
        // const currentLife= parseInt(currentLifeText.innerText);
        const currentLife= getElementValue('life');

        const newLife= currentLife-1;
        setElementValue('life',newLife);

        if(newLife===0){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame() {
    const alphabet = getRandomAlphabet();

    //set random alphabet
    const currentAlphabetString = document.getElementById('current-alphabet');
    currentAlphabetString.innerText = alphabet;

    setBackgroundColor(alphabet);
}

function gameOver(){
    hideElement('home');
    hideElement('play-ground');
    showElement('final-score');
    const finalScore= getElementValue('score');
    setElementValue('final-score-value',finalScore);
}

function playAgain(){
    showElement('play-ground');
    hideElement('final-score');
    hideElement('home');

    //reset values
    setElementValue('life',5);
    setElementValue('score',0);
}

function play() {
    hideElement('home');
    hideElement('final-score');
    showElement('play-ground');
    continueGame();
}
