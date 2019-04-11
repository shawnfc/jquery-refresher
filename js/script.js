$(document).ready(function () {

    $(".example-photo").css("opacity", 0);

    $(window).scroll(function () {

        var windowHeight = $(window).height();
        var windowScrollPosTop = $(window).scrollTop();
        var windowScrollPosBottom = windowHeight + windowScrollPosTop;


        var objectOffset = $('.example-photo').offset();
        var objectOffsetTop = objectOffset.top;

        $(".counter").html(objectOffsetTop);

        if (windowScrollPosBottom > objectOffsetTop) {
            $('.example-photo').animate({'opacity' : 1}, 3000);
        }

    });

});