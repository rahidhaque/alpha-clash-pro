function continueGame(){
    const alphabet= getRandomAlphabet();

    //set random alphabet
    const currentAlphabetString= document.getElementById('current-alphabet');
    currentAlphabetString.innerText=alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    hideElement('home');
    showElement('play-ground');
    continueGame();
}
