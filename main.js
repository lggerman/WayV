/* eslint-disable linebreak-style */
const $burgerButton = document.querySelector('.menu-burger');
const $navBar = document.querySelector('.nav-bar');

$burgerButton.addEventListener('click', () => {
  $burgerButton.classList.toggle('open');
  $navBar.classList.toggle('active');
});
const $divSongs = document.querySelectorAll('.div-songs');
console.log($divSongs);

$divSongs.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.childNodes[1].classList.toggle('opacity-active');
    div.childNodes[3].classList.toggle('listen-active');
    div.childNodes[5].classList.toggle('listen-active');
  });
});
$divSongs.forEach((div) => {
  div.addEventListener('mouseout', () => {
    div.childNodes[1].classList.toggle('opacity-active');
    div.childNodes[3].classList.toggle('listen-active');
    div.childNodes[5].classList.toggle('listen-active');
  });
});
