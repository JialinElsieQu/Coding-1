const words=["Elsie","Fransisco","Gustsaw","Alex","Dragos","Hakan"]

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText = randomWord;
}
