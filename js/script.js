// Get reference
var modals = document.querySelectorAll(".modal");
var triggers = document.querySelectorAll(".trigger");

// Open modal when trigger is clicked
function openModal(e) {
  var index = Array.from(triggers).indexOf(e.target);
  var modal = Array.from(modals)[index];
  modal.classList.add("active");
}

// Close modal when black overlay is clicked
function closeModal(e) {
  e.target.classList.remove("active");
}

// Wiring up
triggers.forEach(trigger => {
  // You can iterate over a list of elements like this
  trigger.addEventListener("click", openModal);
});

modals.forEach(modal => {
  modal.addEventListener("click", closeModal);
});
