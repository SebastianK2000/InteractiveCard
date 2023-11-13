// Update card details in real-time

const cardNumberInput = document.querySelector('input[name="number"]');
const cardNumberDisplay = document.querySelector('.cardnumber');

cardNumberInput.addEventListener('input', function() {
  cardNumberDisplay.textContent = this.value || '0000 0000 0000 0000';
});

