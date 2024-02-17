$(document).ready(function(){
    $('#fullpage').fullpage({
      anchors: ['main_vis', 'main_sec', 'main_trd', 'main_fth'],
      css3: true,
      slidesNavigation: true,
      controlArrows: false,
	});

  $('.floor1 > li > a').on('mouseenter', function(){
    $('#header').addClass('main_nav_active');
  });
  $('#nav').on('mouseleave', function(){
    $('#header').removeClass('main_nav_active');
  });

  $('.main_tab_menu').each(function(){
    $(this).children().find('li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.index();
      $(this).closest('.main_tab_menu').siblings('.main_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
  });

  $('.main_slide_type1 .swiper-slide a').each(function(){
    var ir_text_ex = $(this).closest('.swiper-slide').find('.ss_desc span').text();
    $(this).find('.hidden_text').text(ir_text_ex + '\u00A0' + '새창 열기');
    // console.log(ir_text_ex);
  });

  const swiper1 = new Swiper('.swiper1', {
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
    },
    observer: true, 
    observerParents: true,

    navigation: {
      nextEl: '.mts_next1',
      prevEl: '.mts_prev1',
    },

  });

  const swiper2 = new Swiper('.swiper2', {
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
    },
    observer: true, 
    observerParents: true,

    navigation: {
      nextEl: '.mts_next2',
      prevEl: '.mts_prev2',
    },

  });

  const swiper3 = new Swiper('.swiper3', {
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
    },
    observer: true, 
    observerParents: true,

    navigation: {
      nextEl: '.mts_next3',
      prevEl: '.mts_prev3',
    },

  });

  const swiper4 = new Swiper('.swiper4', {
    effect: 'fade',
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
    },
    observer: true, 
    observerParents: true,

    navigation: {
      nextEl: '.mts_next4',
      prevEl: '.mts_prev4',
    },

  });

});