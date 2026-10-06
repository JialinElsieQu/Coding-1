const words=["Grace","嘿嘿","芯芯","zyx","再见","你好","有意思","可以可以"];

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText = randomWord;
}
