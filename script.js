// scripts/script.js

// Get elements
const modal = document.getElementById('modal');
const signupButton = document.getElementById('signup-button');
const closeModal = document.getElementById('close-modal');
const submitEmail = document.getElementById('submit-email');
const emailInput = document.getElementById('email-input');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Icons for light and dark modes
const sunIcon = `
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M12 4V2m0 20v-2m10-8h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414M18 12a6 6 0 11-12 0 6 6 0 0112 0z"
  />
`;

const moonIcon = `
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="2"
    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
  />
`;

// Check for saved theme in localStorage
let theme = localStorage.getItem('theme') || 'light';
setTheme(theme);

// Open modal
signupButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

// Close modal
closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

// Handle email submission
submitEmail.addEventListener('click', () => {
  const email = emailInput.value;
  if (validateEmail(email)) {
    alert('Thank you for signing up!');
    emailInput.value = '';
    modal.classList.add('hidden');
  } else {
    alert('Please enter a valid email address.');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Theme toggle
themeToggle.addEventListener('click', () => {
  theme = theme === 'light' ? 'dark' : 'light';
  setTheme(theme);
  localStorage.setItem('theme', theme);
});

function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    themeIcon.innerHTML = sunIcon;
  } else {
    document.documentElement.classList.remove('dark');
    themeIcon.innerHTML = moonIcon;
  }
}
