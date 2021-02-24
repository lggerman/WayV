/* eslint-disable linebreak-style */
const $burgerButton = document.querySelector('.menu-burger');
const $navBar = document.querySelector('.nav-bar');

$burgerButton.addEventListener('click', () => {
  $burgerButton.classList.toggle('open');
  $navBar.classList.toggle('active');
});

// MediaQueries
//
//
const $desktop = window.matchMedia('(min-width: 1024px)');
if ($desktop.matches === true) {
  const $divSongs = document.querySelectorAll('.div-songs');

  $divSongs.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.childNodes[1].classList.toggle('opacity-active');
      div.childNodes[1].classList.toggle('listen-active-grayscale');
      div.childNodes[3].classList.toggle('listen-active');
      div.childNodes[5].classList.toggle('listen-active');
    });
  });
  $divSongs.forEach((div) => {
    div.addEventListener('mouseout', () => {
      div.childNodes[1].classList.toggle('opacity-active');
      div.childNodes[1].classList.toggle('listen-active-grayscale');
      div.childNodes[3].classList.toggle('listen-active');
      div.childNodes[5].classList.toggle('listen-active');
    });
  });
}

const $mobile = window.matchMedia('(min-width: 320px)');
if ($mobile.matches === true) {
  const $divSongs = document.querySelectorAll('.div-songs');

  $divSongs.forEach((div) => {
    div.addEventListener('touchend', () => {
      div.childNodes[1].classList.toggle('opacity-active');
      div.childNodes[1].classList.toggle('listen-active-grayscale');
      div.childNodes[3].classList.toggle('listen-active');
      div.childNodes[5].classList.toggle('listen-active');
    });
  });
  /* $divSongs.forEach((div) => {
    div.addEventListener('touch', () => {
      div.childNodes[1].classList.toggle('opacity-active');
      div.childNodes[1].classList.toggle('listen-active-grayscale');
      div.childNodes[3].classList.toggle('listen-active');
      div.childNodes[5].classList.toggle('listen-active');
    });
  }); */
}
