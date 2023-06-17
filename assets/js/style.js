$(".slick-slider").slick({
    slidesToShow: 6,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,


    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,

            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
                infinite: true,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 600,

            }
        }

    ]


});

$(".slick-slider-2").slick({
    slidesToShow: 4,
    infinite: true,
    centerMode: true,
    centerPadding: "-20px",
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 600,
    dots: true,
});


var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});
