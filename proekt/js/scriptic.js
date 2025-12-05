// Простой скрипт для лабы по веб-технологиям

document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайт «Учёба без паники» загружен.");
  
    // Подсвечиваем текущую ссылку в меню
    var path = window.location.pathname;
    var navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      // Если путь заканчивается на href (index.html, tips.html, tools.html) — добавляем класс
      if (path.endsWith(href) || (href === "index.html" && (path === "/" || path.endsWith("/")))) {
        link.classList.add("active");
      }
    });
  });