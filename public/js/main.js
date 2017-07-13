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
})
