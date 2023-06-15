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