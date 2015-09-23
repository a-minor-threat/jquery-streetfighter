$(document).ready(function(){
    $('.hadouken').hide();
    $('.ryu').mouseenter(function(){
        $('.ryu-still').hide();
        $('.ryu-ready').show();
    })
    .mouseleave(function() {
        $('.ryu-still').show();
        $('.ryu-ready').hide();
    })
    .mousedown(function(){
        playHadouken();
        $('.ryu-ready').hide();
        $('.ryu-throwing').show();
        $('.hadouken').finish().show().animate(
            {'left': '1200px'},
            500,
            function(){
                $(this).hide();
                $(this).css('left', '520px');
            });
    })
    .mouseup(function(){
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
    });  
    $(window).keydown(function(event){
        if (event.which === 88) {
            console.log(event);
            showRyuCool();
        } 
    })
    $(window).keyup(function(event){
        if (event.which === 88) {
            console.log(event);
            hideRyuCool();
        }
    })


});

function playHadouken() {
        $('#hadouken-sound')[0].volume = 0.5;
        $('#hadouken-sound')[0].load();
        $('#hadouken-sound')[0].play();
    }

$(document).ready(function(){
    $('.instructions').hide();
    $('.sf-logo').delay(3000).fadeOut(1500);
    $('.instructions').delay(4000).fadeIn();
});

function showRyuCool() {
    console.log("function is being called");
    $('.ryu-throwing').hide();
    $('.ryu-still').hide();
    $('.ryu-throwing').hide();     
    $('.ryu-cool').show(); 
}
function hideRyuCool() {
    $('.ryu-cool').hide();
    $('.ryu-throwing').show();
    $('.ryu-still').show();
    $('.ryu-throwing').show();     
}
