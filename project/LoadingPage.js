const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.form-box.login');
const registerForm = document.querySelector('.form-box.register');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});
