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

    if (window.innerWidth <= 744) {
        const swiper = new Swiper('.swiper', {
        loop: true,
        watchSlidesProdress: true,
        watchSlidesVisibility: true,
        slidesPerView: 'auto',
        spaceBetween: 12,
        grabCursor: true,
        centeredSlides: true,
        initialSlide: 1,
        });
        setTimeout(() => {
            swiper.update();
        
        }, 100);
    }
});

