$(document).ready(function () {
    var $owl = $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        pagination: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 }
        }
    });

    // Wire custom buttons to trigger Owl actions
    $('.custom-next').on('click', function () { $('.owl-carousel').trigger('next.owl.carousel'); });
    $('.custom-prev').on('click', function () { $('.owl-carousel').trigger('prev.owl.carousel'); });
});