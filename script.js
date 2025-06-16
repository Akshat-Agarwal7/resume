// ============================
// Mobile Navbar Toggle
// ============================

const navToggleBtn = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggleBtn && navLinks) {
  navToggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ============================
// Scroll Animations (AOS)
// ============================

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
});

// ============================
// Smooth Scroll for Anchor Links
// ============================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ============================
// Resume Download Button
// ============================

const resumeBtn = document.getElementById("download-resume");

if (resumeBtn) {
  resumeBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "Akshat_Agarwal_Resume.pdf"; // Replace with your file name
    link.download = "Akshat_Agarwal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}

// ============================
// Optional: Back To Top Button
// ============================

const backToTop = document.createElement("button");
backToTop.innerText = "⬆️";
backToTop.className = "back-to-top";
document.body.appendChild(backToTop);

backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 16px;
  font-size: 1.2rem;
  background-color: #0077ff;
  color: white;
  border: none;
  border-radius: 8px;
  display: none;
  z-index: 999;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
