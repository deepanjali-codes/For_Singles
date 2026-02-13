const collage = document.getElementById("heartCollage");
const heartEmojis = ["💖", "💗", "💘", "💞", "😍", "💓", "💝", "😘"];

const totalTime = 5000;
const totalHearts = 150;
const minDistance = 80; // controls overlap (px)

const placed = [];

function isTooClose(x, y) {
  return placed.some((p) => {
    const dx = p.x - x;
    const dy = p.y - y;
    return Math.sqrt(dx * dx + dy * dy) < minDistance;
  });
}

for (let i = 0; i < totalHearts; i++) {
  let x,
    y,
    tries = 0;

  do {
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;
    tries++;
  } while (isTooClose(x, y) && tries < 20);

  placed.push({ x, y });

  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent =
    heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.style.transform = `rotate(${Math.random() * 16 - 8}deg) scale(${0.9 + Math.random() * 0.4})`;

  collage.appendChild(heart);
}

const hearts = document.querySelectorAll(".heart");
const interval = totalTime / hearts.length;

hearts.forEach((heart, index) => {
  setTimeout(() => {
    heart.style.opacity = "0.95";
  }, interval * index);
});

setTimeout(() => {
  window.location.href = "next.html";
}, totalTime);
