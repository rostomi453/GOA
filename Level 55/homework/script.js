const passwordInput = document.getElementById('passwordInput');
const validateBtn = document.getElementById('validateBtn');
const generateBtn = document.getElementById('generateBtn');
const validationMessage = document.getElementById('validationMessage');
const generatedPassword = document.getElementById('generatedPassword');

const validatePassword = (password) => {
  if (password.length < 4 || password.length > 12) {
    return 'პაროლი უნდა იყოს 4-დან 12-მდე სიმბოლო.';
  }
  if (/\s/.test(password)) {
    return 'პაროლი არ უნდა შეიცავდეს ცარიელ ადგილებს.';
  }
  if (!/^[a-zA-Z0-9\-_\.]+$/.test(password)) {
    return 'პაროლი უნდა შეიცავდეს მხოლოდ ასოებს, ციფრებს, "-", ".", ან "_".';
  }
  return 'valid';
};

validateBtn.addEventListener('click', () => {
  const password = passwordInput.value;
  const validationResult = validatePassword(password);

  if (validationResult === 'valid') {
    validationMessage.textContent = 'პაროლი არის ვალიდური!';
    validationMessage.className = 'valid';
  } else {
    validationMessage.textContent = validationResult;
    validationMessage.className = 'invalid';
  }
});

generateBtn.addEventListener('click', () => {
  const length = Math.floor(Math.random() * 9) + 4; // 4-დან 12-მდე
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.';
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  generatedPassword.textContent = `შემთხვევითი პაროლი: ${password}`;
  passwordInput.value = password;
});
