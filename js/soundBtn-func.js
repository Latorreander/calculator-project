import { sound } from "./app.js";
let soundEffect = true;

const onOffSoundButtons = () => {
    if (soundEffect) {
        sound.pause();
        soundEffect = false;
    } else {
        soundEffect = true;
    }
};

export { onOffSoundButtons, soundEffect };
