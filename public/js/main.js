/**
 * Created by ERIKA on 6/07/2017.
 */
'use strict';
$(_=>{
    $(".dropdown-button").dropdown({
        belowOrigin: true
    });
    /*alto de banner*/
    $('.inicio').css({"height": $(window).height() + 'px'});

    $(".button-collapse").sideNav();

    /*animacion logo*/

    /* descarga de cv*/

    $('.descarga').on('click',_=>{
        document.location="https://drive.google.com/file/d/0B8DCWyMbksMoMEwwU1FSTDRaTkxpWHNkWW90S1NjLWVGSVcw/view?usp=sharing";
    })

    /*boton up*/

    $('.btn-up').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(_=>{
        console.log($(this).scrollTop());
        if( $(this).scrollTop() > 100 ){
            $('.btn-up').slideDown(300);
            if($(this).scrollTop()>=383){
                $('.logo-up').addClass("open");
            }
        } else {
            $('.btn-up').slideUp(300);
        }
    });
    $('.target').pushpin({
        top: 0,
        bottom: 1000,
        offset: 0
    });
})

/*pushpin*/

$('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
});