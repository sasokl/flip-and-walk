
const rootPath = window.location.protocol + "//" + window.location.host;
const loginPage = document.querySelector('.login-page__resolution-wrapper');

const loginTemplate = document.querySelector('#login-template').content;
const signNode = loginTemplate.querySelector('.sign').cloneNode(true);
const recoveryNode = loginTemplate.querySelector('.recovery').cloneNode(true);

const signInNode = loginTemplate.querySelector('#signin').cloneNode(true);
const signInForm = signInNode.querySelector('#signin-form');
const signupLink = signInNode.querySelector('#signup-link'); // the link that opens signUp
const forgotLink = signInNode.querySelector('.form__forgot-text');

const signUpNode = loginTemplate.querySelector('#signup').cloneNode(true);
const signUpForm = signUpNode.querySelector('#signup-form');
const signinLink = signUpNode.querySelector('#signin-link'); // the link that opens signIn

const backButton = recoveryNode.querySelector('#back-button');


loginPage.prepend(signNode);
signNode.appendChild(signInNode);

signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = rootPath + "/flip-and-walk/pages/flips/flips.html";
});

signupLink.addEventListener('click', () => {
    signNode.replaceChild(signUpNode, signInNode);
});

signinLink.addEventListener('click', () => {
    signNode.replaceChild(signInNode, signUpNode);
});

forgotLink.addEventListener('click', () => {
    loginPage.replaceChild(recoveryNode,signNode);
});

backButton.addEventListener('click',() => {
    loginPage.replaceChild(signNode,recoveryNode);
});


