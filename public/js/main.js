/**
 * Created by ERIKA on 6/07/2017.
 */
'use strict';
$(_=>{
    $(".dropdown-button").dropdown({
        belowOrigin: true
    });

    $(".button-collapse").sideNav();

    $('.modal').modal();

    /*boton up*/

    $('.btn-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(_=>{
        if( $(this).scrollTop() > 100 ){
            $('.btn-up').slideDown(300);
        } else {
            $('.btn-up').slideUp(300);
        }
        if($(this).scrollTop>=355){
            $('.logo-hide').removeClass('hide');
        }else{
            $('.logo-hide').addClass('hide');
        }
    });
})
