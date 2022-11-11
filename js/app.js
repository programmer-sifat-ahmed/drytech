$(document).ready(function () {
    $(".about-wrapper > .col > .video > .thumb").click(function () {
        $(this).addClass("active");
        $(this).next().attr("controls", "");
    });





    // slider
    $('.slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
    });
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
    });
});