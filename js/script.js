const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// أقصى مسافة يتحرك فيها الزر من مكانه الحالي
const maxMove = 100;

function moveNoButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // المكان الحالي للزر
  const currentX = noBtn.offsetLeft;
  const currentY = noBtn.offsetTop;

  // تغيير عشوائي قريب من المكان الحالي
  let randomX = currentX + (Math.random() * maxMove * 2 - maxMove);
  let randomY = currentY + (Math.random() * maxMove * 2 - maxMove);

  // تأكيد أن الزر يبقى جوه الشاشة
  const minX = 0;
  const minY = 0;
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  randomX = Math.max(minX, Math.min(randomX, maxX));
  randomY = Math.max(minY, Math.min(randomY, maxY));

  // تطبيق الحركة
  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// للماوس – الحركة أسرع
noBtn.addEventListener("mouseenter", () => {
  moveNoButton();
  // استدعاء الحركة بشكل متكرر لزيادة السرعة
  let count = 0;
  const interval = setInterval(() => {
    moveNoButton();
    count++;
    if (count > 5) clearInterval(interval); // يتحرك 5 مرات سريعة
  }, 30); // كل 50ms يتحرك
});

// للتاتش (موبايل)
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
  let count = 0;
  const interval = setInterval(() => {
    moveNoButton();
    count++;
    if (count > 5) clearInterval(interval);
  }, 50);
});

// زر yes
yesBtn.addEventListener("click", () => {
  window.location.href = "love.html";
});
