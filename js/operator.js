$(document).ready(function () {
    $('.operator1_item_link').mouseenter(function () {
        var title = $(this).parent('div').data('title');
        var content = $(this).parent('div').data('content');
        if (!$(this).children('div').length) {
            $(this).append('<div class="overlay"></div>');
        }
        var overlay = $(this).children('.overlay');
        overlay.html('<h2>' + title + '</h2><p>');
        overlay.fadeIn(500);
    });
    $('.operator1_item_link ').mouseleave(function () {
        var overlay = $(this).children('.overlay');
        overlay.fadeOut(400);
    });
})
