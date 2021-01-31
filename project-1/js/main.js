$(document).ready(function () {



    // Header

    $(".header__box-menu ul li").on("click", function (event) {

        event.preventDefault();
        var $this = $(this);
        $(".header__box-menu ul li").removeClass("active");
        $this.addClass("active");

    });

    // Section Projects
    $(".project__menu ul li").on("click", function (event) {

        event.preventDefault();
        var $this = $(this);
        $(".project__menu ul li").removeClass("active");
        $this.addClass("active");

    });


    $('.project-item').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
        },

        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (item) {
                return item.el.attr('title')// + '<small>by Marsel Van Oosten</small>';
            }
        },


    });

    $('.nav-1').click(function () {

        $('.project-item').removeClass('active');
        $('.all__works').addClass('active');

    });

    $('.nav-2').click(function () {

        $('.project-item').removeClass('active');
        $('.games').addClass('active');

    });
    $('.nav-3').click(function () {

        $('.project-item').removeClass('active');
        $('.applications').addClass('active');

    });
    $('.nav-4').click(function () {

        $('.project-item').removeClass('active');
        $('.content__dev').addClass('active');

    });


    // $('.project__content').slick({
    //     infinite: true,
    //     fade: true,
    //     prevArrow: '<img class="slider-arrows slider-arrows-left img-svg" src="img/arrows-left.svg" alt="">',
    //     nextArrow: '<img class="slider-arrows slider-arrows-right img-svg" src="img/arrows-right.svg" alt="">',

    // });


    // $(function () {
    //     $('.slider-arrows-left').click(function (e) {

    //         var $current = $('.project__menu ul li.active');
    //         $current.removeClass('active');
    //         $current.prev('.project__menu ul li').addClass('active');


    //     });

    //     $('.slider-arrows-right').click(function (e) {

    //         var $current = $('.project__menu ul li.active');
    //         $current.removeClass('active');
    //         $current.next('.project__menu ul li').addClass('active');

    //     });

    // });

    // Section Testimonials
    $('.testimonials__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });


    // Section Blogs
    $(function () {

        $(".blogs__list ul li").on("click", function (event) {
            event.preventDefault();
            var $this = $(this);
            $(".blogs__list ul li").removeClass("active");
            $this.addClass("active");

        });

        $('.latest__post-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.latest__post').addClass('active');

        });

        $('.app__design-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.app__design').addClass('active');

        });

        $('.app__development-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.app__development').addClass('active');

        });

        $('.design__solutions-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.design__solutions').addClass('active');

        });

        $('.quality__assurance-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.quality__assurance').addClass('active');

        });

        $('.development__mode-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.development__mode').addClass('active');

        });

        $('.whats__out__there-nav').click(function () {

            $('.blogs__rightpart').removeClass('active');
            $('.whats__out__there').addClass('active');

        });

    });


    // Scroll 

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrolloffset = $(window).scrollTop();



    /* SmoothScroll*/

    $("[data-scroll]").on("click", function (event) {

        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockoffset = $(blockId).offset().top;

        $("#nav li").removeClass("active");

        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockoffset
        }, 500);

    });

    // back-to-top btn
    (function () {
        'use strict';

        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = document.documentElement.clientHeight;

            if (scrolled > coords) {
                goTopBtn.classList.add('back_to_top-show');
            }
            if (scrolled < coords) {
                goTopBtn.classList.remove('back_to_top-show');
            }
        }

        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -80);
                setTimeout(backToTop, 0);
            }
        }

        var goTopBtn = document.querySelector('.back_to_top');

        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);
    })();


    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 500,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    new WOW().init();

});

