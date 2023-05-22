import { displayArea } from "./app.js";
import { soundEffect } from "./soundBtn-func.js";

const replaceInitialNumber = (e) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((number) => {
        if (e.target.value === String(number)) {
            if (displayArea.value === "0") {
                displayArea.value = "";
            }
        }
    });
};

const expressionTransform = (e) => {
    if (e.target.classList.contains("=")) {
        displayArea.value = eval(displayArea.value);
        let result = eval(displayArea.value);
        displayArea.value = eval((result += e.target.value));
    }
};

const showNumbersOfDisplay = (e) => {
    displayArea.value += e.target.value;
};

const musicEffectButtonNumbers = () => {

    if (soundEffect) {
        sound.play();
    }
};

const resetDisplay = (e) => {
    if (e.target.classList.contains("clear")) {
        let initialNumber = "0";
        displayArea.value = initialNumber;
    }
};

const sqrRoot = number =>{
    
    const sqrResult = Math.sqrt(number)
    displayArea.value = sqrResult
}

const backSpace = () => {

    const numbersArray =  displayArea.value.split('')
    numbersArray.pop() 
    displayArea.value = numbersArray.join('')
    if (numbersArray.length === 0){
        displayArea.value = 0
    }  
}


export {
    replaceInitialNumber,
    expressionTransform,
    resetDisplay,
    showNumbersOfDisplay,
    musicEffectButtonNumbers,
    sqrRoot, backSpace
};
