document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section");

  // Highlight active section link on scroll
  window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll <= sectionBottom) {
        navLinks.forEach((link) => link.classList.remove("active"));
        navLinks[index].classList.add("active");
      }
    });
  });

  // Add smooth scrolling to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: "smooth",
      });
    });
  });

  // Animations on scroll
  window.addEventListener("scroll", handleScroll);

  function handleScroll() {
    const scrolledElements = document.querySelectorAll("section");
    scrolledElements.forEach((el) => {
      if (isElementVisible(el)) {
        el.classList.add("animate");
      }
    });
  }

  function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute("href"));
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Preloader
  const preloader = document.querySelector(".preloader");
  setTimeout(() => {
    preloader.style.display = "none";
  }, 1500);
});

