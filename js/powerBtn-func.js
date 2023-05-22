import { displayArea, divButtons, soundButton, initialNumber } from "./app.js";

let powerOn = false;

const power = () => {
    if (powerOn === false) {
        displayArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
        soundButton.classList.toggle("off-mode");
        displayArea.value = initialNumber;
        powerOn = true;
    } else if (powerOn) {
        displayArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
        displayArea.value = "";
        powerOn = false;
    }
};

export { power };
