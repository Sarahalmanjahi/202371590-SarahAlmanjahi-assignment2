// Dynamic Greeting
const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
  greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
  greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
  greeting.textContent = "Good evening! Welcome to my portfolio.";
}

/* Project Filtering */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll("#projects-list article");
const emptyMessage = document.getElementById("projects-empty");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      const isSelected = filterButton === button;
      filterButton.setAttribute("aria-pressed", String(isSelected));
    });

    projectCards.forEach((project) => {
      const matchesCategory =
        selectedCategory === "all" ||
        project.dataset.category === selectedCategory;

      project.hidden = !matchesCategory;

      if (matchesCategory) {
        visibleCount++;
      }
    });

    if (emptyMessage) {
      emptyMessage.hidden = visibleCount > 0;
    }
  });
});

/* Contact Form Validation */
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

if (contactForm && formFeedback) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      formFeedback.textContent = "Please fill in all fields.";
      formFeedback.className = "error";
    } else if (!emailPattern.test(email)) {
      formFeedback.textContent = "Please enter a valid email address.";
      formFeedback.className = "error";
    } else {
      formFeedback.textContent =
        "Form validated successfully! This demo does not send messages.";
      formFeedback.className = "success";

      contactForm.reset();
    }
  });
}
