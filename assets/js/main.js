/* ===== MOBILE MENU TOGGLE ===== */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/* ===== CLOSE MOBILE MENU WHEN LINK CLICKED ===== */
const navLinks = document.querySelectorAll(".nav__link");
const navMenu = document.getElementById("nav-menu");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/* ===== ACTIVE LINK ON SCROLL ===== */
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`,
    );

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
};

window.addEventListener("scroll", scrollActive);

/* ===== SCROLL REVEAL ===== */
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".home__data, .about__img");
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__item", {
  delay: 400,
});
sr.reveal(".home__social-icon, .skills__icon, .projects__data", {
  interval: 200,
});
sr.reveal(".experience__container, .projects__card, .contact__input", {
  interval: 200,
});
