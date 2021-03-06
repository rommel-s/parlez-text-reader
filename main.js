const utterance = new SpeechSynthesisUtterance();
utterance.lang = "pt-BR";

function insertText(event) {
  utterance.text = event.target.innerText;
}

function speak() {
  speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

let defaultRate = 1.5;
utterance.rate = defaultRate;
