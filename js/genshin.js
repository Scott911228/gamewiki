$(document).ready(function () {

    let dis = false;
    $('.introduction-list').click(function () {
        if (dis == false) {
            dis = true;
            $(this).children('.introduction-sublist').slideDown(500);
        }
        else {
            dis = false;
            $(this).children('.introduction-sublist').slideUp(500);
        }
    })

    $('.new-pic').click(function(){
        if(dis == false) {
            dis = true;
            $('.event ').fadeIn(500);
            $('.horizontal-line').fadeIn(500);
        }
        else {
            dis =false;
            $('.event ').fadeOut(500);
            $('.horizontal-line').fadeOut(500);
        }
    })

})
