const words=["Grace","嘿嘿","芯芯","zyx","fig","grape","kiwi","orange"];

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText = randomWord;
}
