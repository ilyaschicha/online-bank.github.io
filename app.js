const navToggler = () => {
  const nav = document.querySelector('.nav-items');
  const toggler = document.querySelector('#toogler');
  const togglerImg = document.querySelector('#toogler img');
  const image = togglerImg.src;
  toogler.addEventListener('click', () => {
    togglerImg.src = (togglerImg.src === image) ? "images/icon-close.svg" : "images/icon-hamburger.svg";
    nav.classList.toggle('nav-active');
  });
}
navToggler();
let introImg  = document.querySelector('.intro img');
let imageSize = () => {
  introImg.src = (screen.width <= 375) ? "images/bg-intro-mobile.svg" : "images/bg-intro-desktop.svg";
}
imageSize();
window.addEventListener('resize', () => {
  if (screen.width <= 375) {
         introImg.src = "images/bg-intro-mobile.svg";
       } else {
         introImg.src = "images/bg-intro-desktop.svg";
       }
});
