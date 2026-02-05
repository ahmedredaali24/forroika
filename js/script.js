const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// حركة الهروب (ماوس + تاتش)
function moveNoButton() {
  const container = document.querySelector(".container");

  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}


// للماوس
noBtn.addEventListener("mouseenter", moveNoButton);

// للتاتش (موبايل)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});

// زر yes
yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});
