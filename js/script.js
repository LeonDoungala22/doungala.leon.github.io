$(document).ready(function () {
    // Smooth scrolling for anchor links
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navbarHeight = $(".navbar").outerHeight();
            $('html, body').animate({
                scrollTop: $(hash).offset().top - navbarHeight
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // Update the navbar position on window scroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var navbarHeight = $(".navbar").outerHeight();

        if (scroll > navbarHeight) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    });

    // Navbar-specific JavaScript code
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });
});
// Add this script to your page or include it in your existing JS file

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animation to the Programming Languages section
    const programmingSection = document.getElementById('programming');
    const programmingIcons = document.querySelector('.programming-icons');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        if (isInViewport(programmingSection)) {
            programmingIcons.style.opacity = 1;
            programmingIcons.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        } else {
            programmingIcons.style.opacity = 0;
            programmingIcons.style.transform = 'translateY(0)';
        }
    });

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
