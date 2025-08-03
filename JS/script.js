const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.navigation')

document.addEventListener('DOMContentLoaded', () => {
    burgerButton.addEventListener('click', () => {
        if(navigationMenu.classList.contains('unvisible')) {
            navigationMenu.classList.toggle('removed');
        setTimeout(() => {
            navigationMenu.classList.toggle('unvisible');
        },100)
        }else{
            navigationMenu.classList.toggle('unvisible');
        setTimeout(() => {
            navigationMenu.classList.toggle('removed');
        },600)
        }
        
    });
});