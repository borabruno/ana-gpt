
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function anaReply(input) {
  const text = input.toLowerCase();
  if (text.includes("oi") || text.includes("olá")) {
    return "Oi! Eu sou a Ana, sua assistente virtual 💗";
  }
  if (text.includes("como você está")) {
    return "Estou ótima, obrigada por perguntar! E você?";
  }
  if (text.includes("quem é você")) {
    return "Sou a Ana, uma inteligência artificial feita para conversar com você 😄";
  }
  if (text.includes("qual seu nome")) {
    return "Meu nome é Ana, prazer em te conhecer!";
  }
  if (text.includes("obrigado") || text.includes("valeu")) {
    return "De nada! Estou aqui sempre que precisar 💕";
  }
  if (text.includes("tchau") || text.includes("adeus")) {
    return "Até logo! Foi ótimo conversar com você 😊";
  }
  if (text.includes("tempo") || text.includes("clima")) {
    return "Eu ainda não vejo o tempo real, mas espero que esteja um dia lindo aí!";
  }
  if (text.includes("piada")) {
    return "Claro! Por que o computador foi ao médico? Porque ele estava com um vírus! 😄";
  }

  // Resposta genérica
  const replies = [
    "Hmm... me conta mais sobre isso!",
    "Interessante, pode explicar melhor?",
    "Adorei saber disso 💬",
    "Me parece algo importante. Quer continuar falando sobre isso?",
    "Legal! E o que mais você pensa sobre isso?"
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;
  appendMessage(text, "user");
  const response = anaReply(text);
  setTimeout(() => appendMessage(response, "ana"), 600);
  userInput.value = "";
}

userInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") sendMessage();
});
