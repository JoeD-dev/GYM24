const burgerButton = document.querySelector('.burger');
const navigationMenu = document.querySelector('.navigation');
const navigationList = document.querySelector('.nav-list');
const menuLink = navigationList.querySelectorAll('a');
const allLinks = document.querySelectorAll('a');
let aboutSlider1 = null;
let aboutSlider2 = null;
let mobileSwiper = null;
let mobileSwiper2 = null;
const BREAKPOINT = 744;
const BREAKPOINT2 = 1000;
let focusableElements;

const getFocusableElements = (container) => {
    return container.querySelectorAll('a[href], button:not(disabled), input:not(disabled), select, textarea, [tabindex]:not([tabindex="-1"])'
    );
};

allLinks.forEach(element => {
    let linkHref =element.getAttribute('href');
    if (!linkHref) {
        linkHref = '#';
    }
    if (linkHref === '#') {
        element.addEventListener('click', (event) => {
        event.preventDefault();
    })
    }
})
const trapFocus = (window) => {
     focusableElements= getFocusableElements(window);
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
            focusableElements = [];
            setTimeout(() => {
                navigationList.classList.toggle('removed');
            },600)
        }
    });
    menuLink.forEach(element => {
        element.addEventListener('click', () => {
            navigationList.classList.add('unvisible');
            document.body.style.overflow = 'auto';
            setTimeout(() => {
                navigationList.classList.add('removed');
            },600)
        })
    });
    function handleMobileSwiper() {
        if (mobileSwiper === null && window.innerWidth <= BREAKPOINT) {
            mobileSwiper = new Splide('.membership', {
                type: 'loop', 
                focus: 'center', 
                gap: '12px', 
                start: 1,
                perPage:1,
                flickMaxPages: 1,
                flickPower: 100,
                fixedWidth: 275, 
                keyboard: 'global', 
                accessibility: true, 
                drag: true, 
                arrows: false,
                pagination: false,
                trimSpace: false,
            }).mount();
        }else if(mobileSwiper !== null && window.innerWidth > BREAKPOINT)  { 
            mobileSwiper.destroy();
            mobileSwiper = null;
            const slides = document.querySelectorAll('.splide__slide');
            console.log(slides);
            slides.forEach( slide => {
                const focusable = getFocusableElements(slide);
                console.log(focusable)
                focusable.forEach(element => {
                    element.removeAttribute('tabindex');
                })
            })
            
        }
        if (mobileSwiper2 === null && window.innerWidth < BREAKPOINT2) {
          
            mobileSwiper2 = new Splide('.trainers', {
                type: 'loop',
                perPage:1,
                flickMaxPages: 1,
                flickPower: 100,
                fixedWidth: 275,
                focus: 'center', 
                gap: '35px', 
                keyboard: 'global', 
                accessibility: true, 
                drag: true, 
                arrows: false,
                pagination: false,
                trimSpace: false,
                breakpoints: {
                  744: {
                    gap: '12px',
                  }
                },
            }).mount();
        }else if (mobileSwiper2 !== null && window.innerWidth >= BREAKPOINT2) {
            mobileSwiper2.destroy();
            mobileSwiper2 = null;
            
        }
        if(window.innerWidth <= BREAKPOINT2) {
            if(aboutSlider2 !== null) {
                aboutSlider2.destroy();
                aboutSlider2 = null;
            };
            if(aboutSlider1 === null) {
                aboutSlider1 = new Splide('.about-slider', {
                    type: 'loop',
                    perPage:1,
                    flickMaxPages: 1,
                    flickPower: 100,
                    fixedWidth: 275, 
                    focus: 'center', 
                    gap: '12px',  
                    keyboard: 'global', 
                    accessibility: true, 
                    drag: true, 
                    arrows: false,
                    pagination: false,
                    trimSpace: false,
               }).mount();
            };
            
        }else if(window.innerWidth > BREAKPOINT2) {
            if(aboutSlider1 !== null) {
                aboutSlider1.destroy();
                aboutSlider1 = null;
            }; 
            if(aboutSlider2 === null) {
                aboutSlider2 = new Splide('.about-slider', {
                    type: 'loop',
                    perPage: 1, 
                    focus: 'center', 
                    gap: '5px', 
                    keyboard: 'global', 
                    accessibility: true, 
                    drag: false,
                    arrows: false,
                    pagination: true, 
                    trimSpace: false,
                }).mount();
                document.querySelector('.prev').addEventListener('click', ()=> {
                    aboutSlider2.go('<');
                });
                document.querySelector('.next').addEventListener('click', ()=> {
                    aboutSlider2.go('>');
                });
                const pagination = document.querySelector('.splide__pagination');
                const paginationContainer = document.querySelector('.pagination');
                paginationContainer.appendChild(pagination);
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
    window.addEventListener('load', () => {
        handleMobileSwiper();
    });
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
    

