// -----------------------------
// Part 1: Event Handling Example
// -----------------------------
document.getElementById("clickMe").addEventListener("click", function () {
  document.getElementById("message").textContent = "Button was clicked!";
});

// -----------------------------
// Part 2: Interactive Elements
// -----------------------------
// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Example
let count = 0;
document.getElementById("increment").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("decrement").addEventListener("click", function () {
  count--;
  document.getElementById("counter").textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(question => {
  question.addEventListener("click", function () {
    const answer = this.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
  });
});

// -----------------------------
// Part 3: Form Validation
// -----------------------------
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // prevent form submission if validation fails

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Final validation
  if (isValid) {
    document.getElementById("formMessage").textContent = "✅ Form submitted successfully!";
  } else {
    document.getElementById("formMessage").textContent = "❌ Please fix the errors above.";
  }
});
