document.querySelector('.nav-list-item:nth-child(2) .nav-list-link').onclick = function() {
    alert('Ouch! Stop poking me!');
}

let mainpic=document.querySelector('.mainpic div');


console.log(mainpic);
mainpic.addEventListener("wheel",function(event){
    

    event.preventDefault;
    mainpic.scrollLeft = event.deltaY;


});