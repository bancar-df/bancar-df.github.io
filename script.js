// =============================
// EDITAR AQUI (dados da loja)
// Exemplos de formato:
// whatsappUrl: "https://wa.me/5500000000000"
// instagramUrl: "https://instagram.com/seuinstagram"
// phoneDisplay: "(00) 00000-0000"
// =============================
const CONTACT_DATA = {
  whatsappUrl: "https://wa.me/5561981397819",
  whatsappMessage: "Olá! Quero um orçamento para revestimento automotivo.",
  instagramUrl: "https://instagram.com/bancar_couro",
  instagramHandle: "@bancar_couro",
  email: "romaoamorim@hotmail.com",
  phoneDisplay: "(61) 98139-7819",
  addressShort: "Praça 04 Setor Sul",
  addressFull: "Praça 04 Setor Sul, Brasília - DF",
  city: "Brasília - DF",
  businessHours: "Segunda a sábado, 08h às 18h",
};

function buildWhatsappLink(baseUrl, message) {
  const hasQuery = baseUrl.includes("?");
  const separator = hasQuery ? "&" : "?";
  return `${baseUrl}${separator}text=${encodeURIComponent(message)}`;
}

function fillContactData() {
  const whatsappHref = buildWhatsappLink(CONTACT_DATA.whatsappUrl, CONTACT_DATA.whatsappMessage);

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappHref;
  });

  document.querySelectorAll("[data-instagram-link]").forEach((link) => {
    link.href = CONTACT_DATA.instagramUrl;
  });

  document.querySelectorAll("[data-instagram-handle]").forEach((el) => {
    el.textContent = CONTACT_DATA.instagramHandle;
  });

  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = CONTACT_DATA.email;
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.href = `mailto:${CONTACT_DATA.email}`;
  });

  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = CONTACT_DATA.phoneDisplay;
  });

  document.querySelectorAll("[data-address-short]").forEach((el) => {
    el.textContent = CONTACT_DATA.addressShort;
  });

  document.querySelectorAll("[data-address-full]").forEach((el) => {
    el.textContent = CONTACT_DATA.addressFull;
  });

  document.querySelectorAll("[data-city]").forEach((el) => {
    el.textContent = CONTACT_DATA.city;
  });

  document.querySelectorAll("[data-hours]").forEach((el) => {
    el.textContent = CONTACT_DATA.businessHours;
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".site-nav");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 980) {
        menu.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function setupReveal() {
  const items = document.querySelectorAll("[data-reveal]");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}

function setCurrentYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  fillContactData();
  setupMobileMenu();
  setupReveal();
  setCurrentYear();
});
