/**
 * Created by ERIKA on 6/07/2017.
 */
'use strict';
$(_=>{
    $(".dropdown-button").dropdown({
        belowOrigin: true
    });
    $('.inicio').css({"height": $(window).height() + 'px'});
    $('ul.tabs').tabs();

    $('.scrollspy').scrollSpy();

    $(".button-collapse").sideNav();

    $('.descarga').on('click',_=>{
        document.location="https://drive.google.com/file/d/0B8DCWyMbksMoMEwwU1FSTDRaTkxpWHNkWW90S1NjLWVGSVcw/view?usp=sharing";
    })

    $('.btn-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.btn-up').slideDown(300);
        } else {
            $('.btn-up').slideUp(300);
        }
    });
})
