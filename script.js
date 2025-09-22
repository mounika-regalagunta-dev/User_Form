const form = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const genderInput = document.getElementById('gender');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const genderError = document.getElementById('genderError');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let valid = true;

  // Reset messages
  nameError.style.display = 'none';
  emailError.style.display = 'none';
  genderError.style.display = 'none';
  successMsg.style.display = 'none';

  if(nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    valid = false;
  }
  if(emailInput.value.trim() === '') {
    emailError.style.display = 'block';
    valid = false;
  }
  if(genderInput.value === '') {
    genderError.style.display = 'block';
    valid = false;
  }

  if(valid) {
    successMsg.style.display = 'block';
    form.reset();
  }
});
