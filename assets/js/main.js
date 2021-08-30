$(document).ready(function () {
    // AOS
    AOS.init();
    // NAVBAR
    $('.dropdown-submenu a.dropdown-toggle').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $("button.navbar-toggler").click(function() {
        document.body.style.paddingRight = "0";
        document.body.style.overflowY = "initial";
        document.body.style.overflowX = "hidden";
        e.preventDefault();
	});
    document.getElementById("nav_about").onclick = function () {
        location.href = "about.html";
    };
    document.getElementById("nav_service").onclick = function () {
        location.href = "service.html";
    };
    $(window).scroll(function(){
        var sticky = $('.eu-header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 80) sticky.addClass('eu-header__fixed');
        else sticky.removeClass('eu-header__fixed');
    });
    // SLIDE TESTIMONI
    if ($(window).width() < 992) {
        startCarousel();
    } else {
        $('.eu-testi__slide').addClass('off');
    };
    // SLIDE - ACHIEVEMENTS
    $('.eu-achievement__slide').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            992: {
                items: 4
            },
        }
    });
    // SLIDE - HEADLINE BRAND TOP
    $('.eu-brand__slide-top').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 6
            },
        }
    });
    // SLIDE - HEADLINE BRAND BOTTOM
    $('.eu-brand__slide').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
            992: {
                items: 6
            },
        }
    });
    // SLIDE - TESTIMONIAL
});
$(window).resize(function () {
    if ($(window).width() < 992) {
        startCarousel();
    }
});

function startCarousel() {
    $('.eu-testi__slide').owlCarousel({
        margin: 10,
        dots: false,
        items: 2,
        loop: true,
        autoplay: true,
    });
}

function stopCarousel() {
    var owl = $('.eu-testi__slide');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}