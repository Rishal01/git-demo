// Mobile navigation
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}


// Booking form
const bookingForm = document.getElementById("bookingForm");
const message = document.getElementById("message");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const guests = document.getElementById("guests").value;

  message.textContent =
    `Thank you, ${name}! Your booking request for ${guests} guest(s) on ${date} has been received.`;

  bookingForm.reset();
});


// Set minimum booking date to today
const dateInput = document.getElementById("date");

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;
