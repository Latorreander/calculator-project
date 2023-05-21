const inputArea = document.querySelector(".display");
const divButtons = document.querySelector(".buttons");
const powerButton = document.querySelector(".power-btn");
const sound = document.getElementById("sound");
const soundButton = document.querySelector(".sound-btn");
const soundPower = document.getElementById('soundPower')

let soundEffect = true;
let powerOn = false;
let numberInitial = "0";

divButtons.addEventListener("click", (e) => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    numbers.forEach((number) => {
        if (e.target.value === String(number)) {
            if (inputArea.value === "0") {
                inputArea.value = "";
            }
        }
    });

    if (soundEffect) {
        sound.play();
    }

    if (e.target.classList.contains("=")) {
        inputArea.value = eval(inputArea.value);
        result = eval(inputArea.value);
        inputArea.value = eval((result += e.target.value));
    }
    inputArea.value += e.target.value;

    if (e.target.classList.contains("clear")) {
        numberInitial = '0'
        inputArea.value = numberInitial;
    }

    if (e.target.classList.contains("power")) {
        inputArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
    }
});

powerButton.addEventListener("click", () => {

    soundPower.play()
    if (powerOn === false) {
        inputArea.classList.toggle("off-mode");
        divButtons.classList.toggle("off-mode");
        soundButton.classList.toggle('off-mode')
        inputArea.value = numberInitial;
        powerOn = true;
    }
     if (powerOn) {

        powerOn = false;
}
   
});

soundButton.addEventListener("click", () => {

    if (soundEffect) {
        sound.pause();
        soundEffect = false;
    } else {
        soundEffect = true;
     }
});
