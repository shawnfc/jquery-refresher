$(document).ready(function () {

    var windowHeight = $(window).height();
    var windowScrollPosTop = $(window).scrollTop();
    var windowScrollPosBottom = windowHeight + windowScrollPosTop;

    $.fn.revealOnScroll = function () {
        return this.each(function () {

            var objectOffset = $(this).offset();
            var objectOffsetTop = objectOffset.top;

            if (!$(this).hasClass('hidden')) {
                $(this).css('opacity', 0).addClass('hidden');
            }
            $(this).css("opacity", 0);


            if (!$(this).hasClass('animation-complet')) {
                if (windowScrollPosBottom > objectOffsetTop) {
                    $(this).animate({ 'opacity': 1 }, 2000).addClass('animation-complete');
                }
            }

        })
    }

    $(window).scroll(function () {

        windowHeight = $(window).height();
        windowScrollPosTop = $(window).scrollTop();
        windowScrollPosBottom = windowHeight + windowScrollPosTop;

        $('.sidebar, ul li, .example-photo').revealOnScroll();
    });

    $('.sidebar').revealOnScroll();

});