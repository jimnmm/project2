$(document).ready(function () {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    for (let i = 1; i < 4; i++) {
        // $(`.wp${i}`).css("opacity","0");
        // $(`.wp${i}.animated`).css("opacity","1");

        $(`.wp${i}`).waypoint(function () {
            $(`.wp${i}`).addClass("animated zoomIn");
        },
            {
                offset: "60%"
            });
        $(`.wa${i}`).waypoint(function () {
            $(`.wa${i}`).addClass("animated fadeInUp");
        },
            {
                offset: "60%"
            });
    }
    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();
        if (scrollTop >= 600) {
            $(".logo").show()
        } else {
            $(".logo").hide()
        }
    });
});