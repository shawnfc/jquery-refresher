$(document).ready(function () {
    $('#menu-trigger').click(function () {
        if ($(window).width() < 480) {
            $('#main-menu').slideToggle(400);
        } else {
            $('#main-menu').css('display', 'block');
        }
    });
});