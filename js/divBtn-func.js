import { inputArea } from "./app.js";
import { soundEffect } from "./soundBtn-func.js";

const replaceInitialNumber = (e) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((number) => {
        if (e.target.value === String(number)) {
            if (inputArea.value === "0") {
                inputArea.value = "";
            }
        }
    });
};

const expressionTransform = (e) => {
    if (e.target.classList.contains("=")) {
        inputArea.value = eval(inputArea.value);
        let result = eval(inputArea.value);
        inputArea.value = eval((result += e.target.value));
    }
};

const showNumbersOfDisplay = (e) => {
    inputArea.value += e.target.value;
};

const musicEffectButtonNumbers = () => {
    if (soundEffect) {
        sound.play();
    }
};

const resetDisplay = (e) => {
    if (e.target.classList.contains("clear")) {
        let initialNumber = "0";
        inputArea.value = initialNumber;
    }
};

const sqrRoot = number =>{
    
    const sqrResult = Math.sqrt(number)
    inputArea.value = sqrResult
}

const backSpace = () => {

    let numbersArray =  inputArea.value.split('')
    numbersArray.pop() 
    inputArea.value = numbersArray.join('')
    if (numbersArray.length === 0){
        inputArea.value = 0
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
