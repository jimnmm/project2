$(document).ready(function () {
    for (let i = 1; i < 4; i++) {
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
});

$("#sideBtn").hide();
$(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop);
    if (scrollTop > 150) {
        $("#sideBtn").fadeIn(800);
    }
    else {
        $("#sideBtn").fadeOut(500);
    }
});
$("#sideBtn").click(function () {
    $("body , html").animate({
        scrollTop: 0
    }, 300);
});