document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  const navLinks = [...document.querySelectorAll(".nav a[href^='#']")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  if (sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { threshold: 0.42 });

    sections.forEach((section) => navObserver.observe(section));
  }

  const focusButton = document.querySelector("[data-focus-toggle]");
  if (focusButton) {
    const toggle = () => {
      document.body.classList.toggle("focus");
      focusButton.textContent = document.body.classList.contains("focus") ? "退出专注" : "专注模式";
    };

    focusButton.addEventListener("click", toggle);
    document.addEventListener("keydown", (event) => {
      if (event.key.toLowerCase() === "f" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
        toggle();
      }
    });
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy");
      if (!text) return;
      try {
        await navigator.clipboard.writeText(text);
        const original = button.textContent;
        button.textContent = "已复制";
        setTimeout(() => {
          button.textContent = original;
        }, 1500);
      } catch (error) {
        button.textContent = "复制失败";
      }
    });
  });
});
