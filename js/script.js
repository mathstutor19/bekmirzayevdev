// Mobile menu toggle
const menuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Project filtering
const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

// boshlang‘ich animatsiya classlari
cards.forEach((card) => {
  card.classList.add(
    "transition-all",
    "duration-500",
    "ease-out",
    "opacity-100",
    "translate-y-0"
  );
});

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // active button
    buttons.forEach((b) => {
      b.classList.remove("bg-orange-500", "text-white");
      b.classList.add("bg-white/10");
    });
    btn.classList.add("bg-orange-500", "text-white");
    btn.classList.remove("bg-white/10");

    // filter + animation
    cards.forEach((card, index) => {
      const match = filter === "all" || card.dataset.category === filter;

      if (match) {
        card.classList.remove("hidden");
        card.classList.add("opacity-0", "translate-y-6");

        // stagger animation
        setTimeout(() => {
          card.classList.remove("opacity-0", "translate-y-6");
          card.classList.add("opacity-100", "translate-y-0");
        }, index * 80);
      } else {
        card.classList.remove("opacity-100", "translate-y-0");
        card.classList.add("opacity-0", "translate-y-6");

        setTimeout(() => {
          card.classList.add("hidden");
        }, 300);
      }
    });
  });
});

// Telegram form submission
const TOKEN = "8443547411:AAG5KCZvrJ2s2Tbi0w5onrY8BuXGkCvAex4";
const CHAT_ID = "1936584321";

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  const text = `
📩 *Yangi Contact Xabar*
👤 *Ism:* ${formData.get("name")}
📧 *Email:* ${formData.get("email")}
📞 *Telefon:* ${formData.get("phone")}
🛠 *Xizmat:* ${formData.get("service")}
📝 *Loyiha tafsilotlari:*
${formData.get("message")}
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
      text,
      parse_mode: "Markdown",
    }),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Xabar yuborildi ✅");
      form.reset();
    })
    .catch((err) => {
      console.error(err);
      alert("Xatolik ❌");
    });
};
