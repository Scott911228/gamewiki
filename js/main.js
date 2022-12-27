$(document).ready(function(){


    $('.gallery_item-link ').mouseenter(function(){

        var title = $(this).parent('li').data('title');
        var company = $(this).parent('li').data('company');
        if(!$(this).children('div').length){
            $(this).append('<div class="overlay"></div>');
        }

        var overlay = $(this).children('.overlay');

        overlay.html('<h2>' + title + '</h2><p>' + company + '</p>');

        overlay.fadeIn(500);
    });

    $('.gallery_item-link ').mouseleave(function(){
        var overlay = $(this).children('.overlay');

        overlay.fadeOut(400);
    })

    let dis = false
    $('.nav_menu').click(function(){
        if(dis == false) {
            dis = true;
            $('.nav_list').slideDown(500);
        }
        else {
            dis =false;
            $('.nav_list').slideUp(500);
            
        }
    })
});

