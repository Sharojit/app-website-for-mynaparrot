$(document).ready(function () {
    'use strict';

    //For Header Area
    $("#header").height($(window).height());
    $(window).resize(function () {
        $("#header").height($(window).height());
    });

    //Menu top fixed
    $('.menu-area').affix({
        offset: {
            top: $("#header").height()
        }
    });

    //scrolling
    $('a.page-scroll').click(function () {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1200);
        event.preventDefault();
    });

    //nav
    $('body').scrollspy({
        target: '.navbar',
        offset: 51
    })
    
    //tooltip
    $('[data-toggle="tooltip"]').tooltip()
});