const $burgerButton = document.querySelector('.menu-burger');
const $navBar= document.querySelector('.nav-bar')

$burgerButton.addEventListener('click', () =>{
    $burgerButton.classList.toggle('open');
    $navBar.classList.toggle('active')
})