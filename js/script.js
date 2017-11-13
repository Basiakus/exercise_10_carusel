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

    function moveLastSlide() {
        var firstSlide = $(karuzela).find("li:first");
        var lastSlide = $(karuzela).find("li:last");
        firstSlide.before(lastSlide);
        karuzela.css({
            marginLeft: -400
        });
    };

    var interval = setInterval(function() {
        karuzela.animate({
            marginLeft: "-400px"
        }, 1500, moveFirstSlide)
    }, 3000);


    function afterBreak() {
        setInterval(function() {
            karuzela.animate({
                marginLeft: "-400px"
            }, 1500, moveFirstSlide)
        }, 3000)
    };

    $('#right').click(function() {
        clearInterval(interval);
        karuzela.animate({
            marginLeft: "-400px"
        }, 500, moveFirstSlide);
        setTimeout(afterBreak, 4000);
    });
   
    $('#left').click(function() {
        clearInterval(interval);
        karuzela.animate({
            marginLeft: "0"
        }, 500, moveLastSlide);
        setTimeout(afterBreak, 4000);
    });




});