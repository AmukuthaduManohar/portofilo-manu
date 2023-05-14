document.addEventListener("DOMContentLoaded", function () {
  var textElements = document.querySelectorAll(".animate-text");
  var btnElement = document.querySelector(".animate-btn");

  function animateElements() {
    for (var i = 0; i < textElements.length; i++) {
      textElements[i].classList.add("show");
    }
    btnElement.classList.add("show");
  }

  animateElements();
});
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Perform form validation (you can add your own validation logic here)

    // Send form data to the server (you need to implement the server-side code to handle the form submission)
    // For demonstration purposes, we'll just display a success message
    var successMessage = document.getElementById("success-message");
    successMessage.textContent = "Message sent successfully!";
  });

function navigateTo(pageId) {
  // Get all page elements
  var pageElements = document.getElementsByClassName("page");

  // Hide all pages
  for (var i = 0; i < pageElements.length; i++) {
    pageElements[i].classList.remove("active");
  }

  // Show the selected page
  var selectedPage = document.getElementById(pageId);
  selectedPage.classList.add("active");
}
