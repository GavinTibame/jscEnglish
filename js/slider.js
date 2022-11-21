$(document).ready(function () {
    $('.feedback__group').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                    , dots: true
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.3,
                    slidesToScroll: 1,
                    infinite: true
                    , dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                    infinite: true, autoplaySpeed: 3000
                    , dots: true

                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true, autoplaySpeed: 4000
                    , dots: true

                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true, autoplaySpeed: 5000
                    , dots: true

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});