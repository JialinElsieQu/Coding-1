const words=["太棒了","嘿嘿","哈哈","侬好","再见","你好","有意思","如果忽远忽近的洒脱是你要的自由～","没遇到同屏的人真的没关系～","不需要勉强强求刻意的靠近～","孬","我～不知为何","若不是你忽然闯进我生活～"];

function generateRandomWord() {
  const randomIndex = Math.floor(Math.random()*words.length);
  const randomWord = words[randomIndex];
  document.getElementById("wordDisplay").innerText = randomWord;
}
