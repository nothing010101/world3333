const input = document.getElementById('input');
const send = document.getElementById('send');
const msgs = document.getElementById('messages');

send.onclick = async () => {
  const text = input.value;
  if (!text) return;
  addMessage("user", text);
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });
  const data = await res.json();
  addMessage("bot", data.reply);
  input.value = "";
};

function addMessage(who, text) {
  const div = document.createElement("div");
  div.className = "message " + who;
  div.textContent = `${who}: ${text}`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
