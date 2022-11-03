
$(document).ready(function(){


    $('.gallery2_item-link ').mouseenter(function(){

        var title = $(this).parent('li').data('title');
        if(!$(this).children('div').length){
            $(this).append('<div class="overlay"></div>');
        }

        var overlay = $(this).children('.overlay');

        overlay.html( title );

        overlay.fadeIn(500);
    });

    $('.gallery2_item-link ').mouseleave(function(){
        var overlay = $(this).children('.overlay');

        overlay.fadeOut(400);
    });



})