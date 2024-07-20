const buttn = document.querySelector("#button");
const textarea = document.querySelector("#placeholder");

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceselect = document.querySelector("#select"); // Corrected selector

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speechSynthesis.voice = voices[0];
    voices.forEach((voice, i) => (voiceselect.options[i] = new Option(voice.name, i))); // Corrected "Option"
}

voiceselect.addEventListener("change", () => {
    speech.voice = voices[voiceselect.value];
});

buttn.addEventListener("click", () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
});
