const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.navigation');
const navigationList = document.querySelector('.nav-list');
let aboutSlider1 = null;
let aboutSlider2 = null;
let mobileSwiper = null;
let mobileSwiper2 = null;
const BREAKPOINT = 744;
const BREAKPOINT2 = 1000;

const getFocusableElements = (container) => {
    return container.querySelectorAll('a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
};

const trapFocus = (window) => {
    const focusableElements = getFocusableElements(window);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (element) => {
        if(element.key === 'Tab') {
            if(focusableElements.length === 0) return;
            if(element.shiftKey) {
                if (document.activeElement === firstElement) {
                    element.preventDefault();
                    lastElement.focus();
                };
            }else{
                if(document.activeElement === lastElement) {
                    element.preventDefault();
                    firstElement.focus();
                };
            };
        };
    };
    window.addEventListener('keydown',handleKeyDown);
    setTimeout(() => firstElement?.focus(),0);
};

document.addEventListener('DOMContentLoaded', () => {
    burgerButton.addEventListener('click', () => {
        if(navigationList.classList.contains('unvisible')) {
            navigationList.classList.toggle('removed');
            document.body.style.overflow = 'hidden';
            trapFocus(navigationMenu);
            setTimeout(() => {
                navigationList.classList.toggle('unvisible');
            },100)
        }else{
            navigationList.classList.toggle('unvisible');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                navigationList.classList.toggle('removed');
            },600)
        }
    });
    function handleMobileSwiper() {
        if (mobileSwiper === null && window.innerWidth <= BREAKPOINT) {
            mobileSwiper = new Swiper('.membership', {
                loop: true,
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
                },
                a11y: false,
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

    const closeModal = document.querySelectorAll('.close, .modal-overlay');
    const modal = document.querySelector('.modal');
    const openModal = document.querySelectorAll('.plan-button');
    closeModal.forEach(element => {
        element.addEventListener('click',() => {
        modal.classList.add('removed');
        document.body.style.overflow = 'auto';
    });
    });
    openModal.forEach(element => {
        element.addEventListener('click', () => {
            modal.classList.remove('removed');
            document.body.style.overflow = 'hidden';
            trapFocus(modal);
        });
    });
    
});

