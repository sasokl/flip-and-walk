
const rootPath = window.location.protocol + "//" + window.location.host;
const loginPage = document.querySelector('.login-page__resolution-wrapper');

const loginTemplate = document.querySelector('#login-template').content;
const signInNode = loginTemplate.querySelector('.signin').cloneNode(true);
const signInForm = signInNode.querySelector('#signin-form');
const signupLink = signInNode.querySelector('#signup-link');
const forgotLink = signInNode.querySelector('.form__forgot-text');

const signUpNode = loginTemplate.querySelector('.signup').cloneNode(true);
//const signUpButton = signUpNode.querySelector('#signup-button');

loginPage.append(signInNode);



signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = rootPath + "/flip-and-walk/pages/flips/flips.html";
});
signupLink.addEventListener('click', () => {
    loginPage.replaceChild(signUpNode, signInNode);
});


