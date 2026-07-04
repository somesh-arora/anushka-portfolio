/**
 * Intersection Observer for scroll-triggered animations.
 * Mouse-tracking glow effect for cards.
 * External script — no inline JS for CSP compliance.
 */

/* ===== Scroll Animations ===== */
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }
  },
  {
    threshold: 0.08,
    rootMargin: "0px 0px -60px 0px",
  }
);

document.querySelectorAll(".fade-in, .scale-in, .stagger-children").forEach((el) => {
  observer.observe(el);
});

/* ===== Mouse-Tracking Card Glow ===== */
function initGlowCards() {
  const cards = document.querySelectorAll("[data-glow]");
  if (!cards.length) return;

  // Update card glow positions on mouse move
  document.addEventListener("mousemove", (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--glow-x", `${x}px`);
      card.style.setProperty("--glow-y", `${y}px`);
    }
  });
}

initGlowCards();

/* ===== Counter Animation ===== */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-count"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const prefix = el.getAttribute("data-prefix") || "";
          const duration = 1500;
          const startTime = performance.now();

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString() + suffix;
            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      }
    },
    { threshold: 0.3 }
  );

  counters.forEach((el) => counterObserver.observe(el));
}

initCounters();
