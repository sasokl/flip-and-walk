
const flipsPage = document.querySelector('.flips-page__resolution-wrapper');

const flipsTemplate = document.querySelector('#flips-template').content;
const flipNode = flipsTemplate.querySelector('.flip').cloneNode(true);
let subscribed = false;
let liked = false;

flipsPage.append(flipNode);
const videoBG = flipsPage.querySelector('#video-bg');
videoBG.setAttribute('src', "../../videos/Flip2.svg");
console.log(videoBG.src);
const videoFlip = flipsPage.querySelector('#video-flip');

const subscriptionButton = flipsPage.querySelector('#subscription-button');
const likeButton = flipsPage.querySelector('#like-button');

flipsPage.addEventListener('click',() => {
    flipsPage.querySelector('.flip').classList.toggle('flip_visible');
    flipsPage.querySelector('.flip__back-logo').classList.toggle('flip__back-logo_hidden');
});

flipsPage.addEventListener('swiped-up',(e)=>{
    videoBG.src = "../../videos/Flip2.svg";
    videoFlip.src = "../../videos/Flip2.svg";
});

subscriptionButton.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(subscribed) subscriptionButton.querySelector('.icon').src = "../../images/subscription.svg";
    else subscriptionButton.querySelector('.icon').src = "../../images/subscription-clicked.svg";

    subscribed = !subscribed;
});

likeButton.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(liked) likeButton.querySelector('.icon').src = "../../images/heart.svg";
    else likeButton.querySelector('.icon').src = "../../images/heart-clicked.svg";

    liked = !liked;
});