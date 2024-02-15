function continueGame(){
    const alphabet= getRandomAlphabet();

    //set random alphabet
    const currentAlphabetString= document.getElementById('current-alphabet');
    currentAlphabetString.innerText=alphabet;

    setBackgroundColor(alphabet);
}

function play(){
    const homeSection= document.getElementById('home');
    homeSection.classList.add('hidden');

    const playGroundSection= document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');

    continueGame();
}
