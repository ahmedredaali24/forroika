const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// حركة الهروب (ماوس + تاتش)
function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 10; // مسافة أمان من أطراف الشاشة

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  let randomX = Math.random() * maxX;
  let randomY = Math.random() * maxY;

  // تأكيد إنه جوه الشاشة
  randomX = Math.max(padding, randomX);
  randomY = Math.max(padding, randomY);

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

