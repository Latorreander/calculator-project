import { displayArea, divButtons } from "./app.js";
import { soundEffect } from "./soundBtn-func.js";

const delayTime = 150;

const replaceInitialNumber = (e) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((number) => {
        if (e.target.value === String(number)) {
            if (displayArea.value === "0.") {
                displayArea.value = "";
            }
        }
    });
};

const expressionTransform = (e) => {
    if (e.target.classList.contains("=")) {
        let result = eval(displayArea.value);
        displayArea.value = "";
        setTimeout(() => {
            displayArea.value = eval((result += e.target.value)) + ".";
        }, delayTime);
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
        displayArea.value = "";
        setTimeout(() => {
            let initialNumber = "0.";
            displayArea.value = initialNumber;
        }, delayTime);
    }
};

const sqrRoot = (number) => {
    const sqrResult = Math.sqrt(number);
    displayArea.value = "";
    setTimeout(() => {
        displayArea.value = sqrResult + ".";
    }, delayTime);
};

const backSpace = (e) => {
    if (e.target.classList.contains("back-space")) {
        const numbersArray = displayArea.value.split("");
        numbersArray.pop();
        displayArea.value = numbersArray.join("");
        if (numbersArray.length === 0) {
            displayArea.value = "";
            setTimeout(() => {
                displayArea.value = "0.";
            }, delayTime);
        }
    }
};

const calcPercentage = (e) => {
    if (e.target.classList.contains("percentage")) {
        const expression = displayArea.value;
        const resExpression = eval(expression) / 100;
        displayArea.value = "";
        setTimeout(() => {
            displayArea.value = resExpression + ".";
        }, delayTime);
    }
};

// const isNotAButton = (e) => {
//     if (e.target.classList.contains('buttons')) {
//         divButtons.style.pointerEvent = 'none'
//     }
// }


export {
    replaceInitialNumber,
    expressionTransform,
    resetDisplay,
    showNumbersOfDisplay,
    musicEffectButtonNumbers,
    sqrRoot,
    backSpace,
    calcPercentage
};
