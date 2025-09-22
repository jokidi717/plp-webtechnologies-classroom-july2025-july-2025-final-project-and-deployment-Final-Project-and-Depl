function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Example: Handle contact form submit
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      form.reset();
    });
  }
});
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevents page refresh

    // Get form values
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    // Simple validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      form.reset(); // Clear the form
    } else {
      alert("Please fill out all fields before sending.");
    }
  });
});
// script.js for About page

document.addEventListener("DOMContentLoaded", () => {
  const badges = document.querySelectorAll(".badge");

  badges.forEach((badge, index) => {
    // Delay each badge for a staggered animation
    setTimeout(() => {
      badge.style.opacity = "1";
      badge.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
const bio = document.querySelector(".content p");

window.addEventListener("scroll", () => {
  const bioTop = bio.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (bioTop < windowHeight - 100) {
    bio.style.opacity = "1";
    bio.style.transform = "translateY(0)";
  }
});
