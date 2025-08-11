document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = navLinks.querySelectorAll("a");

  menuToggle.addEventListener("click", function () {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Закрываем меню при клике на любой пункт
  navItems.forEach(function (link) {
    link.addEventListener("click", function () {
      // Только если меню видно (т.е. активен мобильный режим)
      if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});
