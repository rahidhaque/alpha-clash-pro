function hideElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.add('hidden');
}

function showElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString= 'abcdefghiklmnopqrstvxyz';
    const alphabets= alphabetString.split('');
    
    //get a random index 0-25
    const randomNumber= Math.random() * 25;
    const index= Math.round(randomNumber);
    
    const alphabet= alphabets[index];
    return alphabet;
}


function setBackgroundColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}