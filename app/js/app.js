$(function () {

  $(".gallery__btn").on("click", function () {
    $(this).parent().addClass("open");
  });


  // if ($(window).width() <= 767) {}
  $(".header__btn").on("click", function () {
    $(this).toggleClass("active-btn");
    $(".menu").toggleClass("open");
    $(".search-menu").removeClass("open");

    var body = $('body');

    if ($(this).hasClass('active-btn')) {
      body.addClass('lock');
    } else {
      body.removeClass('lock');
    }
  });

  $(".header__search").on("click", function () {
    $(".search-menu").addClass("open");
    $("body").addClass("lock");
    $(".menu").removeClass("open"); +
    $(".header__btn").removeClass("active-btn");

  });

  $(".search-menu__close").on("click", function () {
    $(".search-menu").removeClass("open");
    $("body").removeClass("lock");
  });


  if ($(window).width() <= 767) {
    $(".header__search").on("click", function () {
      $(".header__btn").addClass("active-btn");
      $(".menu").addClass("open");
    });

    $('.active-btn').on("click", function () {
      $('.search-menu, .menu').removeClass('open');
    });
  }

  $(".resalt-search__filter").on("click", function () {
    $('.category-list').addClass('active');
    $("body").addClass("lock2");
  });

  $(".category-list__close").on("click", function () {
    $('.category-list').removeClass('active');
    $("body").removeClass("lock2");
  });

  $(".slider-reviews__more").on("click", function () {
    $(this).prev().addClass("open");

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
        // container.find('.tabs a').removeClass('active');
        // items.removeClass('active');
        $(this).toggleClass('active');
        container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
      });

    }
  }

  /* end tabs on desktop accordion on mobile*/




  $(".type").select2({
    placeholder: "Сортування",
    minimumResultsForSearch: -1
  });

  $(".city").select2({
    // placeholder: "Сортування",
    minimumResultsForSearch: -1
  });

  $(".num").select2({
    // placeholder: "Сортування",
    minimumResultsForSearch: -1
  });



  $('.history__item-one').hover(
    function () {
      $('.history__img').addClass('active');
    },
    function () {
      $('.history__img').removeClass('active');
    }
  );

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 5000,
    from: 100,
    postfix: "₴"
  });

  $('[data-fancybox]').fancybox({
    afterShow: function(instance, current) {
        if (current.$trigger.hasClass('modal')) {
            var swiper = new Swiper('.swiper', {
                // Налаштування Swiper
            });
        }
    }
});


});

//header
const navOffset = $(".header").offset().top + 200;
$(window).scroll(function () {

  const scrolled = $(this).scrollTop();

  if (scrolled > navOffset) {
    $('header').addClass("sticky animate__animated animate__fadeInDown");
    $('header').next().addClass("margin-top");
  } else if (scrolled < navOffset) {
    $('header').removeClass("sticky animate__animated animate__fadeInDown");
    $('header').next().removeClass("margin-top");
  }
});




var swiper = new Swiper(".swiper-intro", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-intro-about", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
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
      spaceBetween: 39,
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

var swiper = new Swiper(".swiper-components", {
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


var swiper = new Swiper(".quality-slider1", {
  // loop: true,
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,

});
var swiper2 = new Swiper(".quality-slider2", {
  effect: "fade",
  // loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

var mySwiper = new Swiper(".swiper-progres", {
  autoHeight: true,

  speed: 500,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination1",
    type: "progressbar"
  },
  loop: false,
  effect: "slide",
  spaceBetween: 30,
  on: {
    init: function () {
      $(".swiper-pagination-custom1 .swiper-pagination-switch1").removeClass("active");
      $(".swiper-pagination-custom1 .swiper-pagination-switch1").eq(0).addClass("active");
    },
    slideChangeTransitionStart: function () {
      $(".swiper-pagination-custom1 .swiper-pagination-switch1").removeClass("active");
      $(".swiper-pagination-custom1 .swiper-pagination-switch1").eq(mySwiper.realIndex).addClass("active");
    }
  }
});
$(".swiper-pagination-custom1 .swiper-pagination-switch1").click(function () {
  mySwiper.slideTo($(this).index());
  $(".swiper-pagination-custom1 .swiper-pagination-switch1").removeClass("active");
  $(this).addClass("active");
});

var swiper = new Swiper(".slider-card1", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".slider-card2", {
  spaceBetween: 10,
  allowTouchMove: false,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


var swiper = new Swiper(".slider-reviews", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
      grid: {
        rows: 1,
      },

    },
    576: {
      spaceBetween: 30,
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 1,
      grid: {
        rows: 3,
      },

    },
  }
});

var swiper = new Swiper(".slider-modal", {
  // slidesPerView: 5,
  spaceBetween: 30,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 2,
    },

    800: {
      spaceBetween: 30,
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }

});