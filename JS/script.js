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
    let mobileSwiper = null;
    const BREAKPOINT = 744;
    function handleMobileSwiper() {
        if (mobileSwiper === null && window.innerWidth <= BREAKPOINT) {
        mobileSwiper = new Swiper('.swiper', {
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
        }else if(mobileSwiper !== null && window.innerWidth > BREAKPOINT)  { 
            mobileSwiper.destroy(true, true);
            mobileSwiper = null;
        };
    };
    function debounce(func, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(func,delay);
        };
    };
    window.addEventListener('load', handleMobileSwiper);
    window.addEventListener('resize', handleMobileSwiper, 200);
});

