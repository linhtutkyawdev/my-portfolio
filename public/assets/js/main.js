(function ($) {
  "use strict";
  //===== Prealoder
  $(window).on("load", function (event) {
    $(".preloader").delay(500).fadeOut(500);
  });

  //===== Mobile Menu
  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== close navbar-collapse when a  clicked
  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  //===== Sticky
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 10) {
      $(".navigation").removeClass("sticky");
    } else {
      $(".navigation").addClass("sticky");
    }
  });

  //===== Section Menu Active
  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  // Parallaxmouse js
  function parallaxMouse() {
    if ($("#parallax").length) {
      var scene = document.getElementById("parallax");
      var parallax = new Parallax(scene);
    }
  }
  parallaxMouse();

  //===== Progress Bar
  if ($(".progress-line").length) {
    $(".progress-line").appear(
      function () {
        var el = $(this);
        var percent = el.data("width");
        $(el).css("width", percent + "%");
      },
      { accY: 0 }
    );
  }
  $("#scrollbar").scroll(() => {
    if ($(".progress-line").length) {
      $(".progress-line").appear(
        function () {
          var el = $(this);
          var percent = el.data("width");
          $(el).css("width", percent + "%");
        },
        { accY: 0 }
      );
    }
  });
  //===== Counter Up
  $(".counter").counterUp({
    delay: 10,
    time: 1600,
  });

  //===== Magnific Popup
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  //===== Back to top
  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });
  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  //=====
})(jQuery);

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("bGL8sWKUTx4liRTYo");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs
        .sendForm("service_my_portfolio", "template_my_portfolio", this)
        .then(
          function () {
            alert(
              "Successfully sent email! Check Your email for automatic reply!"
            );
          },
          function (error) {
            alert("Unexpected error occred");
            console.log("error", error);
          }
        );
    });
};
