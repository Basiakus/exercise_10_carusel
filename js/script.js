$(function() {

    var karuzela = $('.carusel ul');


    function moveFirstSlide() {
        var firstSlide = $(karuzela).find("li:first");
        var lastSlide = $(karuzela).find("li:last");
        lastSlide.after(firstSlide);
        karuzela.css({
            marginLeft: 0
        });
    };


    setInterval(function() {
        karuzela.animate({
            marginLeft: "-400px"
        }, 1500, moveFirstSlide)
    }, 3000);
});