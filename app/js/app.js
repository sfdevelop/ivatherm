$(function () {
  $(".gallery__btn").on("click", function () {
    $(this).parent().addClass("open");
  });

  $(".header__btn").on("click", function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("open");
    $("body").toggleClass("lock");
  });


  /* start tabs on desktop accordion on mobile*/
  tabControl();

  var resizeTimer;
  $(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      tabControl();
    }, 250);
  });

  function tabControl() {
    var tabs = $('.tabbed-content').find('.tabs');
    if (tabs.is(':visible')) {
      tabs.find('a').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href'),
          tabs = $(this).parents('.tabs'),
          buttons = tabs.find('a'),
          item = tabs.parents('.tabbed-content').find('.item');
        buttons.removeClass('active');
        item.removeClass('active');
        $(this).addClass('active');
        $(target).addClass('active');
      });
    } else {
      $('.item').on('click', function () {
        var container = $(this).parents('.tabbed-content'),
          currId = $(this).attr('id'),
          items = container.find('.item');
        container.find('.tabs a').removeClass('active');
        items.removeClass('active');
        $(this).addClass('active');
        container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
      });
    }
  }
  /* end tabs on desktop accordion on mobile*/
});

var swiper = new Swiper(".swiper-intro", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-products", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      loop: true,
    },
    576: {
      slidesPerView: 2,
    },
    800: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 4,
    },
  }
});

var swiper = new Swiper(".swiper-img", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiper-skins", {
  spaceBetween: 25,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2.5,
      loop: true,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 4,
    },

    1200: {
      slidesPerView: 6,
    },
  }
});

var swiper = new Swiper(".swiper-videos", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".swiper-blog", {
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
      loop: true,
    },
    576: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  }
});

var swiper = new Swiper(".swiper-gallery", {
  loop: true,
  spaceBetween: 30,
  speed: 4000,
  loop: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    576: {
      slidesPerView: 3,
    },

    1200: {
      slidesPerView: 6,
    },
  },
  on: {
    afterInit() {
      this.allowSlidePrev = this.realIndex !== 0;
    },
    slideChange() {
      this.allowSlidePrev = this.realIndex !== 0;
    }
  }
});