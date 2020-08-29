$(document).ready(function (){
    $('#mycarousel').carousel({interval:2000});
    $('#carouselButton').click(function(){
        if($('#carouselButton').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if($('#carouselButton').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
    // Reserve Table Modal Scripts
    $('#reserve_button').click(function (){
        $('#reservetableModal').modal('show');
    });
    $('#button_close_reserve').click(function(){
        $('#reservetableModal').modal('hide');
    });
    $('#button_cancel_reserve').click(function(){
        $('#reservetableModal').modal('hide');
    });

    // login modal script
    $('#button_login').click(function (){
        $('#loginModal').modal('show');
    });
    $('#button_cancel_login').click(function(){
        $("#loginModal").modal('hide');
    });
    $('#closeLoginModal').click(function(){
        $('#loginModal').modal('hide');
    });
});