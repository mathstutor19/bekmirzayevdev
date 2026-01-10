let TOKEN = "8443547411:AAG5KCZvrJ2s2Tbi0w5onrY8BuXGkCvAex4";

let CHAT_ID = "1936584321";

// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(form);
  let text = `
  *Yangi Contact Xabar*
  *Ism:* ${formData.get("name")}
    *Email:* ${formData.get("email")}
    *Telefon* ${formData.get("phone")}
    *Xizmat* ${formData.get("service")}
    *Loyiha tafsiloti* ${formData.get("message")}
  `;
  sendToTelegram(text);
});
const sendToTelegram = (text) => {
  fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: text,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Xabaringiz yuborildi!");
      form.reset();
    })
    .catch((err) => {
      alert("Xabaringiz yuborildi!");
      console.error(err.message);
    });
};
