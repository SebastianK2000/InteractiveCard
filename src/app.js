// Update card details in real-time

// Number

const cardNumberInput = document.querySelector('input[name="number"]');
const cardNumberDisplay = document.querySelector('.cardnumber');

cardNumberInput.addEventListener('input', function() {
  const inputValue = this.value.slice(0,19);
  cardNumberDisplay.textContent = inputValue || '0000 0000 0000 0000';
  this.value = inputValue;
});

//Name

const cardNameInput = document.querySelector('input[name="name"]');
const cardNameDisplay = document.querySelector('.fullname');

cardNameInput.addEventListener('input',function() {
  const inputValue = this.value.slice(0,20);
  cardNameDisplay.textContent = inputValue || 'Jane Appleseed';

  this.value = inputValue;
});

// CVC

const cvcCardInput = document.querySelector('input[name="cvc"]');
const cvcCardDisplay = document.querySelector('.cvccard');

cvcCardInput.addEventListener('input',function() {
  // ograniczamy do 3 liczb w polu CVC
  const inputValue = this.value.slice(0,3);
  cvcCardDisplay.textContent = inputValue || '000';

  this.value = inputValue;
});


// month

const dateCardInput = document.querySelector('input[name="month"]');
const dateCardDisplay = document.querySelector('.datecard');

dateCardInput.addEventListener('input',function() {
  const inputValue = this.value.slice(0,2);
  dateCardDisplay.textContent = inputValue || '00';

  this.value = inputValue;
});

// year

const dateCard2Input = document.querySelector('input[name="year"]');
const dateCard2Display = document.querySelector('.datecard2');

dateCard2Input.addEventListener('input',function() {
  const inputValue = this.value.slice(0,2);

  dateCard2Display.textContent = inputValue || '00';
  this.value = inputValue;
});


// Confirm button

const confirmButton = document.querySelector('.btn');

confirmButton.addEventListener('click', function(event) {

  event.preventDefault();

  // Przejdź do innego dokumentu HTML
  window.location.href = 'ThankYou.html';
});
