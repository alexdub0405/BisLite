$(function () {
  $(".slider__inner").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});

$(function () {
  $(".works__inner").slick({
    // arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-2/slide-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/slider-2/slide-right.svg" alt=""></button>'
  });
});
