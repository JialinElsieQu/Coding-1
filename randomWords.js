const words=["太棒了","嘿嘿","哈哈","侬好","再见","你好","有意思","可以可以","行"];

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText = randomWord;
}
