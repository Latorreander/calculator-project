import { sound } from "./app.js";
let soundEffect = true;

const playSoundButtons = () => {
    if (soundEffect) {
        sound.pause();
        soundEffect = false;
    } else {
        soundEffect = true;
    }
};

export { playSoundButtons, soundEffect };
