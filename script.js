// Get modal element
const modal = document.getElementById("bookingModal");
const closeBtn = document.getElementsByClassName("close")[0];

// Get booking buttons and table rows
const bookBtns = document.querySelectorAll(".bookBtn");
const parkingSlots = document.querySelectorAll("#parkingSlots tbody tr");

// Add event listeners to booking buttons
bookBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        modal.style.display = "block";
        // Store the index of the slot being booked
        modal.setAttribute("data-slot-index", index);
    });
});

// Close modal when close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside of the modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Handle booking form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const slotIndex = modal.getAttribute("data-slot-index");
    const slotRow = parkingSlots[slotIndex];
    const statusCell = slotRow.querySelector(".status");

    // Update the slot status and disable the booking button
    statusCell.textContent = "Booked";
    slotRow.querySelector(".bookBtn").disabled = true;

    // Close the modal
    modal.style.display = "none";
    alert("Booking Confirmed!");
});

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
