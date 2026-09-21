(() => {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const siteNav = document.querySelector("#site-nav");
  const currentYear = document.querySelector("#current-year");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  if (menuToggle && siteNav) {
    const closeMenu = () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu");
      siteNav.classList.remove("is-open");
    };

    const openMenu = () => {
      menuToggle.setAttribute("aria-expanded", "true");
      menuToggle.setAttribute("aria-label", "Tutup menu");
      siteNav.classList.add("is-open");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen =
        menuToggle.getAttribute("aria-expanded") === "true";

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    siteNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (
        siteNav.classList.contains("is-open") &&
        !siteNav.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 760) {
        closeMenu();
      }
    });
  }
})();