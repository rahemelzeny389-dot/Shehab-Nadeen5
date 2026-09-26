
   window.addEventListener('click', function() {
    document.getElementById("audio").play();
   }, { once: true });

  // 
  
  function openSite() {
    document.getElementById("intro").style.display = "none";
    document.querySelector("main").style.display = "block";
     
  }
 const intro = document.getElementById("intro");
const main = document.querySelector("main");

intro.addEventListener("click", function () {
  // 1. بدء تلاشي الـ intro (Fade Out)
  intro.style.opacity = "0";

  // 2. الانتظار ثانية حتى ينتهي التلاشي
  setTimeout(() => {
    intro.style.display = "none";  // إخفاء الـ intro تمامًا
    main.style.display = "block";  // إظهار الـ main في الـ DOM

    // 3. مهلة بسيطة جدًا لتفعيل تأثير الظهور (Fade In) للـ main
    setTimeout(() => {
      main.style.opacity = "1";
    }, 10);
  }, 300); // 1000ms = 1 ثانية (نفس مدة الـ transition في الـ CSS)
});


// //
const weddingDate = new Date("November 12, 2026 20:00:00").getTime();

function countdown() {
  const now = new Date().getTime();
  const difference = weddingDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

countdown();
setInterval(countdown, 1000);
