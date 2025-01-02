$(document).ready(function () {
    // Smooth scrolling for anchor links using jQuery
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var navbarHeight = $(".navbar").outerHeight();
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - navbarHeight,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Toggle fixed navbar on scroll using jQuery
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var navbarHeight = $(".navbar").outerHeight();

        if (scroll > navbarHeight) {
            $(".navbar").addClass("fixed");
        } else {
            $(".navbar").removeClass("fixed");
        }
    });

    // Scroll animations for sections using GSAP
    const sectionsToAnimate = document.querySelectorAll(".animate-section");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        sectionsToAnimate.forEach((section, index) => {
            if (isInViewport(section)) {
                const animationProps = window.innerWidth < 768
                    ? { opacity: 1, y: 0, duration: 1, ease: "power2.inOut", delay: index * 0.3 }
                    : { opacity: 1, y: Math.sin(scrollPosition * 0.01 + index) * 50, duration: 1, ease: "power2.inOut", delay: index * 0.3 };
                
                gsap.to(section, animationProps);
            } else {
                const animationProps = window.innerWidth < 768
                    ? { opacity: 0, y: 0, duration: 0.5, ease: "power2.inOut" }
                    : { opacity: 0, y: 20, duration: 0.5, ease: "power2.inOut" };

                gsap.to(section, animationProps);
            }
        });
    });

    // Helper function to check if an element is in the viewport
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

// Vanilla JavaScript equivalent for fixed navbar
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("fixed");
    } else {
        navbar.classList.remove("fixed");
    }
});

// Vanilla JavaScript smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
