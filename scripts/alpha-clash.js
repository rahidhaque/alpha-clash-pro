function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    const currentAlphabetString = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetString.innerText.toLowerCase();



    if (playerPressed === currentAlphabet) {
        const currentScoreText = document.getElementById('score');
        const currentScore = parseInt(currentScoreText.innerText);
        //increase player score
        const newScore = currentScore + 1;
        currentScoreText.innerText = newScore;
        //continue the game
        removeBackgroundColor(currentAlphabet);
        continueGame();
    }
    else {
        //decrease life
        const currentLifeText= document.getElementById('life');
        const currentLife= parseInt(currentLifeText.innerText);

        const newLife= currentLife-1;
        currentLifeText.innerText= newLife;
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

function play() {
    hideElement('home');
    showElement('play-ground');
    continueGame();
}
