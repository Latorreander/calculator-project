import {
    replaceInitialNumber,
    expressionTransform,
    resetDisplay,
    showNumbersOfDisplay,
    musicEffectButtonNumbers,
    sqrRoot,
    backSpace,
    calcPercentage
} from "./divBtn-func.js";

import { onOffSoundButtons } from "./soundBtn-func.js";

import { power } from "./powerBtn-func.js";

const displayArea = document.querySelector(".display");
const divButtons = document.querySelector(".buttons");
const powerButton = document.querySelector(".power-btn");
const sound = document.getElementById("sound");
const soundButton = document.querySelector(".sound-btn");
const soundPower = document.getElementById("soundPower");
const sqrRootButton = document.querySelector(".sqr-root");

let initialNumber = "0.";

sqrRootButton.addEventListener("click", () => {
    let number = displayArea.value;
    sqrRoot(number);
});

divButtons.addEventListener("mousedown", (e) => {
    replaceInitialNumber(e);
    try{
        expressionTransform(e)
    }catch (e){
     if (e instanceof SyntaxError){
        displayArea.value = 'error'
     }
    }
    backSpace(e);
    musicEffectButtonNumbers();
    showNumbersOfDisplay(e);
    resetDisplay(e);
    calcPercentage(e)
});


powerButton.addEventListener("click", () => {
    soundPower.play();
    power();
});

soundButton.addEventListener("click", () => {
    onOffSoundButtons();
    sound.play()
});


export { displayArea, divButtons, soundButton, initialNumber, sound };


