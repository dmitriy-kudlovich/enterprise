$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    pagination: true,
    stagePadding: 50,
    responsiveClass: true,
    dotsEach: 3,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 3,
      },
    },
  });
});
