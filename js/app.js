import {
    replaceInitialNumber,
    expressionTransform,
    resetDisplay,
    showNumbersOfDisplay,
    musicEffectButtonNumbers,
} from "./divBtn-func.js";

import { playSoundButtons } from "./soundBtn-func.js";

import { power } from "./powerBtn-func.js";

const inputArea = document.querySelector(".display");
const divButtons = document.querySelector(".buttons");
const powerButton = document.querySelector(".power-btn");
const sound = document.getElementById("sound");
const soundButton = document.querySelector(".sound-btn");
const soundPower = document.getElementById("soundPower");

let initialNumber = "0";

divButtons.addEventListener("click", (e) => {
    replaceInitialNumber(e);
    expressionTransform(e);
    musicEffectButtonNumbers();
    showNumbersOfDisplay(e);
    resetDisplay(e);
});

powerButton.addEventListener("click", () => {
    soundPower.play();
    power();
});

soundButton.addEventListener("click", () => {
    playSoundButtons();
});
export { inputArea, divButtons, soundButton, initialNumber, sound };
