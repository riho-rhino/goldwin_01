import $ from "jquery"
opning();
function tick(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve()
        }, time)
    })
}
async function opning() {
  await tick(300);
  $('.mv_avobe').addClass('mv-start');
  $('.mv_under').addClass('mv-start');
  await tick(1700);
  $('.mv_staff').addClass('show');
  $('.mv_favorite').addClass('show');
  await tick(900);
  $('.mv_itemofstaff').addClass('show');
  await tick(1000);
  $('.mv_date').addClass('show');

}


$(function () {
  $(window).on({
    'scroll': function () {
      scrollFadeIn();
      scrollActivr();
    },
  });

})


function scrollActivr() {
  $('.active').each(function () {
    var elementTop = $(this).offset().top;
    var viewportBottom = $(window).scrollTop() + $(window).height() * 0.8;

    if (elementTop < viewportBottom) {
      $(this).addClass('move');
    }
  });
}

function scrollFadeIn() {
  $('.fadein').each(function () {
    var elementTop = $(this).offset().top;
    var viewportBottom = $(window).scrollTop() + $(window).height() * 0.8;

    if (elementTop < viewportBottom) {
      $(this).addClass('in');
    }
  });
}





const swiper = new Swiper(".recommend-swiper", {
    loop: true,  
    slidesPerView: 1, 
    spaceBetween: 40, 
    pagination: {
      el: ".swiper-pagination",
      type: "fraction", 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  


const sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 3, 
});
const recommendSwiper = new Swiper(".recommend2-swiper", {
  loop: true,  
  slidesPerView: 1, 
  centeredSlides: true, 
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: sliderThumbnail,
  },
  
  
});

const sliderThumbnail3 = new Swiper(".slider-thumbnail3", {
  slidesPerView: 3, 
});
const recommendSwiper3 = new Swiper(".recommend3-swiper", {
  loop: true,  
  slidesPerView: 1, 
  centeredSlides: true, 
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  thumbs: {
      swiper: sliderThumbnail3,
  },
  
});


const articleSwiper = new Swiper(".article_swiper", {
    loop: false, 
    slidesPerView: 1, 
    spaceBetween: 40, 
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


const articleSwiper2 = new Swiper(".article_swiper2", {
    loop: false, 
    slidesPerView: 1, 
    spaceBetween: 40, 
    pagination: {
        el: ".swiper-pagination",
        type: "fraction", 
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});




// アンカーリンク
$(window).on('load', function () {
  $('.anchor_list a[href*="#"]').on('click', function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('html, body').animate({ scrollTop: pos }, 700);
    return false;
  });
});
// アンカーリンク
$(window).on('load', function () {
  $('.pc-anchor_list a[href*="#"]').on('click', function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top;
    $('html, body').animate({ scrollTop: pos }, 700);
    return false;
  });
});


$(window).on('scroll', function() {
  var windowHeight = $(window).height();
  var lead = $('.lead');
    var staffIntaviewWrapper = $('.staff_intaview-wrapper');
    var leadPosition = lead[0].getBoundingClientRect().top;
    var windowHeight = $(window).height(); 
    if (leadPosition < windowHeight / 2) {
        staffIntaviewWrapper.addClass('pc-hidden');
    } else {
        staffIntaviewWrapper.removeClass('pc-hidden');
    }
});

