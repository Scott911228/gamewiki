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



})