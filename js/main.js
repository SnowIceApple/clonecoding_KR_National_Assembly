$(document).ready(function(){
    $('#fullpage').fullpage({
      anchors: ['main_vis', 'main_sec', 'main_trd', 'main_fth'],
      css3: true,
      slidesNavigation: true,
      controlArrows: false,
      normalScrollElements: '.fullpage_normalScroll'
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
      $(this).closest('.main_tab_menu').siblings().find('.main_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
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

  const swiper5 = new Swiper('.swiper5', {
    effect: 'fade',
    loop: true,
    speed: 2000,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 6000,
    },

    navigation: {
      nextEl: '.mts_next5',
      prevEl: '.mts_prev5',
    },

  });

  const swiper6 = new Swiper('.swiper6', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3500,
    },

    navigation: {
      nextEl: '.mts_next6',
      prevEl: '.mts_prev6',
    },

  });

  var today = today_ymd();

  function today_ymd(){
    var date = new Date();
    var weekday = ['일', '월', '화', '수', '목', '금', '토'][date.getDay()];
    return date.getFullYear() + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." + ("0"+date.getDate()).slice(-2) + "(" + weekday + ")";
}

var today2 = today_ymd2();

function today_ymd2(){
  var date = new Date();
  return date.getFullYear() + "." + ("0"+(date.getMonth()+1)).slice(-2) + "." + ("0"+date.getDate()).slice(-2);
}

$('.tid_tit h3').text(today2);

  $('.calendar_desc_tit strong').text(today_ymd);

  var currentDate = new Date();
      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();
      
      function renderCalendar(month, year) {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDayOfMonth = new Date(year, month, 1).getDay();
        var table = $("<table>");
        var tbody = $("<tbody>");
        var tr = $("<tr>");
        var dayOfWeek = 0;
        
        var days = ['일', '월', '화', '수', '목', '금', '토'];
        for (var i = 0; i < days.length; i++) {
          tr.append($("<th>").text(days[i]).addClass(i === 0 ? "sun" : i === 6 ? "sat" : ""));
        }
        tbody.append(tr);
        
        tr = $("<tr>");
        for (var i = 0; i < firstDayOfMonth; i++) {
          tr.append($("<td>").html("&nbsp;").addClass("sun"));
          dayOfWeek++;
        }
        for (var day = 1; day <= daysInMonth; day++) {
          if (dayOfWeek == 7) {
            tbody.append(tr);
            tr = $("<tr>");
            dayOfWeek = 0;
          }
          var td = $("<td>").addClass(dayOfWeek === 0 ? "sun" : dayOfWeek === 6 ? "sat" : "");
          var a = $("<a>").append($("<span>").text(day));
          if (year === currentDate.getFullYear() && month === currentDate.getMonth() && day === currentDate.getDate()) {
            a.addClass("today");
          }

          a.click(function() {
            var selectedDate = year + "_" + (month + 1).toString().padStart(2, '0') + "_" + $(this).text().padStart(2, '0');
            var selectedDate2 = year + "." + (month + 1).toString().padStart(2, '0') + "." + $(this).text().padStart(2, '0');
            var dateObject = new Date(year, month, $(this).text());
            var dayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][dateObject.getDay()]; 
            selectedDate2 += "(" + dayOfWeek + ")";
            $(this).addClass(selectedDate).parents('table').find('td').children('a').not($(this)).removeClass();
            $(this).addClass('active');
            console.log(selectedDate);
            $('.calendar_desc_tit strong').text(selectedDate2);
          });
          td.append(a);
          tr.append(td);
          dayOfWeek++;
        }

        for (var i = dayOfWeek; i < 7; i++) {
          tr.append($("<td>").html("&nbsp;").addClass("sun"));
        }
        tbody.append(tr);
        
        table.append(tbody);
        $("#calendar").html(table);
        $("#currentMonthYear").text(year + "." + (month + 1).toString().padStart(2, '0'));
      }
      
      $("#prevMonth").click(function() {
        currentMonth--;
        if (currentMonth < 0) {
          currentMonth = 11;
          currentYear--;
        }
        renderCalendar(currentMonth, currentYear);
      });
      
      $("#nextMonth").click(function() {
        currentMonth++;
        if (currentMonth > 11) {
          currentMonth = 0;
          currentYear++;
        }
        renderCalendar(currentMonth, currentYear);
      });
      
      renderCalendar(currentMonth, currentYear);


});