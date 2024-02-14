
window.addEventListener('DOMContentLoaded', event => {
    
    // Nav Shrink
    const nav = document.getElementById('mainNav')
    window.addEventListener('scroll', fixNav)

    function fixNav() {
        if(window.scrollY > nav.offsetHeight) {
            nav.classList.add('navbar-shrink')
        } else {
            nav.classList.remove('navbar-shrink')
        }
    }

    // ScrollSpy
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
        });
    };

    // Menu mobile fecha sozinho após o click
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {

        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Back to top button
    const backtotop = document.getElementById('backToTop')
    window.addEventListener('scroll', toggleBacktotop)

    function toggleBacktotop() {
        if(window.scrollY > 400) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }

});
