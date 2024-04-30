document.addEventListener("DOMContentLoaded", function () {
  // Cache elements
  const messageElement = document.getElementById("message");
  const listElement = document.getElementById("list");

  // Use parent-child-sibling relationship
  const containerElement = listElement.parentNode;

  // Iterate over a collection of elements
  for (let i = 1; i <= 5; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = `Rice ${i}`;
    listElement.appendChild(listItem);
  }

  // Event listener and handler function to modify content
  document
    .getElementById("changeButton")
    .addEventListener("click", function () {
      messageElement.textContent = "Message changed by user interaction!";
    });

  // Modify style in response to user interaction
  messageElement.addEventListener("mouseover", function () {
    this.style.color = "blue";
  });

  // Modify attribute in response to user interaction
  messageElement.addEventListener("mouseout", function () {
    this.style.color = "red";
  });

  // Browser Object Model properties/methods
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Form input with HTML attribute validation
  const emailInput = document.getElementById("email");
  emailInput.addEventListener("input", function () {
    if (!this.validity.valid) {
      this.setCustomValidity("Please enter a valid email address");
    } else {
      this.setCustomValidity("");
    }
  });

  // Form input with DOM event-based validation
  const passwordInput = document.getElementById("password");
  passwordInput.addEventListener("blur", function () {
    if (this.value.length < 6) {
      this.setCustomValidity("Password must be at least 6 characters long");
    } else {
      this.setCustomValidity("");
    }
  });
});
