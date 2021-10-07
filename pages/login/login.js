
const loginPage = document.querySelector('.login-page');

const loginTemplate = document.querySelector('#login-template').content;
const signInNode = loginTemplate.querySelector('.signin').cloneNode(true);
const signInButton = signInNode.querySelector('#signin-button');

const signUpNode = loginTemplate.querySelector('.signup').cloneNode(true);
const signUpButton = signUpNode.querySelector('#signup-button');

loginPage.prepend(signInNode);

signInButton.addEventListener('click', () => {
    loginPage.replaceChild(signUpNode,signInNode);
});

signUpButton.addEventListener('click', () => {
    loginPage.replaceChild(signInNode,signUpNode);
});

