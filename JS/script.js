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
    let aboutSlider = null;
    let mobileSwiper = null;
    const BREAKPOINT = 744;
    function handleMobileSwiper() {
        if (mobileSwiper === null && window.innerWidth <= BREAKPOINT) {
            mobileSwiper = new Swiper('.membership', {
                loop: true,
                watchSlidesProdress: true,
                watchSlidesVisibility: true,
                slidesPerView: 'auto',
                spaceBetween: 12,
                grabCursor: true,
                centeredSlides: true,
                initialSlide: 1,
            });
            if(aboutSlider !== null) {
                aboutSlider.destroy(true, true);
            }
            aboutSlider = new Swiper ('.about-slider', {
                loop: true,
                pagination: false,
                spaceBetween: 12,
            })
        }else if(mobileSwiper !== null && window.innerWidth > BREAKPOINT)  { 
            mobileSwiper.destroy(true, true);
            mobileSwiper = null;
            
        }else if(window.innerWidth > BREAKPOINT) {
            if(aboutSlider !== null) {
                aboutSlider.destroy(true, true);
            }
            aboutSlider = new Swiper ('.about-slider', {
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
            })
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

