$(function () {
    
    "use strict";
    
    

    //=======BANNER SLIDER======
    $('.tf__banner_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        dots: false,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });

    

});
