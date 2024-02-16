function hideElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.add('hidden');
}

function showElement(elementName){
    const elementSection= document.getElementById(elementName);
    elementSection.classList.remove('hidden');
}

function getElementValue(elementId){
    const element= document.getElementById(elementId);
    const elementValue= parseInt(element.innerText);
    return elementValue; 
}

function setElementValue(elementId, value){
    const element= document.getElementById(elementId);
    element.innerText=value;
}

function setElementById(){

}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);

    const alphabet = alphabets[index];
    return alphabet;
}


function setBackgroundColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-[#FFA500]');
}

function removeBackgroundColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-[#FFA500]');
}