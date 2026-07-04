/**
 * Mobile navigation toggle.
 * External script — no inline JS for CSP compliance.
 */
const toggle = document.querySelector(".header__menu-toggle");
const menu = document.getElementById("nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    menu.classList.toggle("is-open");
  });

  // Close menu when clicking a link (mobile)
  menu.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
    });
  });

  // Close menu on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      toggle.setAttribute("aria-expanded", "false");
      menu.classList.remove("is-open");
      toggle.focus();
    }
  });
}
