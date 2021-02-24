$(function () {


  {/* <script src="https://kit.fontawesome.com/0e09aa4923.js" crossorigin="anonymous"></script> */ }

  $(function () {
    // Получить элемент, к которому необходимо добавить маску
    $(".phone-template").mask("+7(999) 999-9999");
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

  $('.gallery').magnificPopup({
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

});