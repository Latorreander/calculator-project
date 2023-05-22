import { inputArea, divButtons, soundButton, initialNumber } from "./app.js";

let powerOn = false;

const power = () => {
    if (powerOn === false) {
        inputArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
        soundButton.classList.toggle("off-mode");
        inputArea.value = initialNumber;
        powerOn = true;
    } else if (powerOn) {
        inputArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
        inputArea.value = "";
        powerOn = false;
    }
};

export { power };
