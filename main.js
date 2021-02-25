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
function removeClass(name) {
  const $divSongs = document.querySelectorAll('.div-songs');
  $divSongs.forEach((div, i) => {
    if (name !== $divSongs[i].attributes.name.textContent) {
      div.childNodes[1].classList.remove('opacity-active');
      div.childNodes[1].classList.remove('listen-active-grayscale');
      div.childNodes[3].classList.remove('listen-active');
      div.childNodes[5].classList.remove('listen-active');
    }
  });
}

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
const $tablet = window.matchMedia('(max-width: 768px)');
if ($mobile.matches === true && $tablet.matches === true) {
  const $divSongs = document.querySelectorAll('.div-songs');
  $divSongs.forEach((div, i) => {
    div.addEventListener('click', () => {
      div.childNodes[1].classList.toggle('opacity-active');
      div.childNodes[1].classList.toggle('listen-active-grayscale');
      div.childNodes[3].classList.toggle('listen-active');
      div.childNodes[5].classList.toggle('listen-active');
      /* const name = $divSongs[i].attributes.name.textContent;
      removeClass(name); */
      const nameSong = $divSongs[i].attributes.name.textContent;
      removeClass(nameSong);
    });
  });
}
