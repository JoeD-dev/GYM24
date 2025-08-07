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
    let aboutSlider1 = null;
    let aboutSlider2 = null;
    let mobileSwiper = null;
    let mobileSwiper2 = null;
    const BREAKPOINT = 744;
    const BREAKPOINT2 = 1000;
    function handleMobileSwiper() {
        if (mobileSwiper === null && window.innerWidth <= BREAKPOINT) {
            mobileSwiper = new Swiper('.membership', {
                loop: true,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                slidesPerView: 'auto',
                spaceBetween: 12,
                grabCursor: true,
                centeredSlides: true,
                initialSlide: 1,
            });
        }else if(mobileSwiper !== null && window.innerWidth > BREAKPOINT)  { 
            mobileSwiper.destroy(true, true);
            mobileSwiper = null;
            
        }
        if (mobileSwiper2 === null && window.innerWidth < BREAKPOINT2) {
          
            mobileSwiper2 = new Swiper('.trainers', {
                loop: true,
                watchSlidesProdress: true,
                watchSlidesVisibility: true,
                slidesPerView: 'auto',
                spaceBetween: 12,
                grabCursor: true,
                centeredSlides: true,
                breakpoints: {
                    744: {
                        spaceBetween: 35,
                    },
                }
            });
        }else if (mobileSwiper2 !== null && window.innerWidth >= BREAKPOINT2) {
            mobileSwiper2.destroy(true, true);
            mobileSwiper2 = null;
            
        }
        if(window.innerWidth <= BREAKPOINT2) {
            if(aboutSlider2 !== null) {
                aboutSlider2.destroy(true, true);
                aboutSlider2 = null;
            };
            if(aboutSlider1 === null) {
                aboutSlider1 = new Swiper ('.about-slider', {
                loop: true,
                pagination: false,
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                slidesPerView: 'auto',
                spaceBetween: 12,
                centeredSlides: true,
            });
            };
            
        }else if(window.innerWidth > BREAKPOINT2) {
            if(aboutSlider1 !== null) {
                aboutSlider1.destroy(true, true);
                aboutSlider1 = null;
            }; 
            if(aboutSlider2 === null) {
                aboutSlider2 = new Swiper ('.about-slider', {
                loop: true,
                spaceBetween: 12,
                slidesPerView: 1,
                pagination: {
                    el: '.pagination',
                },
                navigation: {
                    nextEl: '.next',
                    prevEl: '.prev'
                }
            });
            };
            
        }
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

