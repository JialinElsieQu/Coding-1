const chatbotResponses= {
"hello":"你好啊亲括号瘆人的微笑括号",
"how are you":"嗯嗯比你好",
"bye":"诶呀呀你终于走了我解脱了括号微笑微笑括号",
"default":"你是不是有病说一些我听不懂的话"
  
};

function handleUserInput(event) {
  if(event.key=="Enter"){
    const userInput=document.getElementById("userInput").value;
    const chat=document.getElementById("chat");

    document.getElemenyById("userInput").value="";
    chat.innerHTML += `<p><strong>You:</strong> ${userInput} </p>`;
    const response = chatbotResponses[userInput.toLowerCase()] || chatbotResponses["default"];
    chat.innerHTML += `<p><strong>服务器:</strong> ${response}</p>`;
    }


}
