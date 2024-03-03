

$(document).ready(function(){
    $('#fullpage').fullpage({
      anchors: ['main_vis', 'main_sec', 'main_trd', 'main_fth', 'main_ffh', 'main_six', 'main_svt', 'main_eit'],
      css3: true,
      slidesNavigation: true,
      controlArrows: false,
      normalScrollElements: '.fullpage_normalScroll'
	});

  // $.fn.fullpage.destroy();

  $('.floor1 > li > a').on('mouseenter', function(){
    $('#header').addClass('main_nav_active');
  });
  $('#nav').on('mouseleave', function(){
    $('#header').removeClass('main_nav_active');
  });

  $('.fixed_menu_btn').on('click', function(){
    $('.main_fixed_menu').toggleClass('active');
  });

  $('.main_act_tab_btn').each(function(){
    $(this).children().find('li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.index();
      $(this).parents('.main_act_tab_btn').siblings('.main_act_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
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

  $('.result_wide_tab_scroll ul li a').each(function(){
    $(this).on('click', function(){
      $(this).parent('li').addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.parent().index();
      $('.result_wide_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
  });

  $('.main_slide_type1 .swiper-slide a').each(function(){
    var ir_text_ex = $(this).closest('.swiper-slide').find('.ss_desc span').text();
    $(this).find('.hidden_text').text(ir_text_ex + '\u00A0' + '새창 열기');
    // console.log(ir_text_ex);
  });


  $('.dr_table_tab_box table').each(function(){
    $('td.num').each(function(){
      var td_idx = $(this).parent('tr').index() + 1;
      $(this).text(td_idx);
    });

    $('.table_tab_btn').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.index();
      $(this).closest('.dr_table_tab_box').siblings('.dr_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
  });

  $('.dr_chart_tab_btn').each(function(){
    $(this).children().find('li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.index();
      $(this).parents('.dr_chart_tab_btn').siblings('.dr_chart_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
  });

  $('.pr_list_bot_tab_btn').each(function(){
    $(this).children().find('li').on('click', function(){
      $(this).addClass('active').siblings().removeClass('active');
      var tg = $(this);
      var idx = tg.index();
      $(this).parents('.pr_list_bot_tab_btn').siblings('.pr_list_bot_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
    });
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

  const swiper7 = new Swiper('.swiper7', {
    loop: true,
    speed: 700,
    autoplay: {
      delay: 3500,
    },

    navigation: {
      nextEl: '.mts_next7',
      prevEl: '.mts_prev7',
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
            // console.log(selectedDate);
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

      $('.result_wide_tab_scroll').mCustomScrollbar({

      });

      Chart.register(ChartDataLabels);

      var ctx = document.getElementById('chart1');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['찬성', '반대', '기권'],
          datasets: [{
            data: [174, 2, 6],
            backgroundColor: [
              'rgba(4, 180, 49, 1)', 
              'rgba(255, 0, 0, 1)', 
              'rgba(255, 255, 88, 1)'
            ],
            borderWidth: 0,
            

          }],
          
        },
        options: {
          plugins: {
            legend: false,
            datalabels: {
              display: false,
            },
          },
          animation: true,
          animationEasing : "easeOutSine",
        },

      });

      var ctx2 = document.getElementById('chart2');

      new Chart(ctx2, {
        type: 'pie',
        data: {
          labels: ['찬성', '반대', '기권'],
          datasets: [{
            data: [189, 1, 2],
            backgroundColor: [
              'rgba(4, 180, 49, 1)', 
              'rgba(255, 0, 0, 1)', 
              'rgba(255, 255, 88, 1)'
            ],
            borderWidth: 0,
            

          }],
          
        },
        options: {
          plugins: {
            legend: false,
            datalabels: {
              display: false,
            },
          },
          animation: true,
          animationEasing : "easeOutSine",
        },

      });

      var ctx3 = document.getElementById('chart3');

      new Chart(ctx3, {
        type: 'pie',
        data: {
          labels: ['찬성', '반대', '기권'],
          datasets: [{
            data: [193, 0, 2],
            backgroundColor: [
              'rgba(4, 180, 49, 1)', 
              'rgba(255, 0, 0, 1)', 
              'rgba(255, 255, 88, 1)'
            ],
            borderWidth: 0,
            

          }],
          
        },
        options: {
          plugins: {
            legend: false,
            datalabels: {
              display: false,
            },
          },
          animation: true,
          animationEasing : "easeOutSine",
        },
        

      });

      var ctx4 = document.getElementById('chart4');

      new Chart(ctx4, {
        type: 'pie',
        data: {
          labels: ['찬성', '반대', '기권'],
          datasets: [{
            data: [199, 0, 0],
            backgroundColor: [
              'rgba(4, 180, 49, 1)', 
              'rgba(255, 0, 0, 1)', 
              'rgba(255, 255, 88, 1)'
            ],
            borderWidth: 0,
            

          }],
          
        },
        options: {
          plugins: {
            legend: false,
            datalabels: {
              display: false,
            },
          },
          animation: true,
          animationEasing : "easeOutSine",
        },
        

      });

      var dr_chart_data1 = {
        labels: ["본회의", "운영위", "법사위", "정무위", "기재위", "교육위", "과방위", "외통위", "국방위", "행안위", "문체위", "농해수위", "산자중기위", "복지위", "환노위", "국토위", "정보위", "여가위", "예결위", "윤리특별위원회", "특위", "기타"],
        datasets: [
            {
                label: "제출건수",
                backgroundColor: '#86B1DB',
                data: [257, 475, 2166, 1959, 2379, 1191, 1050, 431, 606, 3615, 1036, 1547, 1566, 2830, 2170, 2338, 33, 436, 113, 50, 278, 42]
            },
            {
                label: "처리건수",
                backgroundColor: '#8FC41F',
                data: [246, 83, 483, 615, 968, 401, 393, 188, 265, 1349, 478, 688, 663, 1021, 663, 1018, 16, 104, 113, 0, 169, 33]
            }
        ]
    };



    var ctx5 = document.getElementById('dr_chart_1');
    var dr_chart_1 = new Chart(ctx5, {
      type: 'bar',
      data: dr_chart_data1,
      options: {
        plugins: {
          datalabels: {
            display: false,
          },
        },
        scales: {
          x: { 
            grid: {
              display: false,
            }

          },
          y: {
            grid: {
              drawOnChartArea: true,
            }
        }
      }
      }
      
});

var dr_chart_data2 = {
  labels: ["본회의", "운영위", "법사위", "정무위", "기재위", "교육위", "과방위", "외통위", "국방위", "행안위", "문체위", "농해수위", "산자중기위", "복지위", "환노위", "국토위", "정보위", "여가위", "예결위", "윤리특별위원회", "특위", "기타"],
  datasets: [
      {
          label: "처리율",
          backgroundColor: '#86B1DB',
          data: [95, 17, 22, 31, 40, 33, 37, 43, 43, 37, 46, 44, 42, 36, 30, 43, 48, 23, 100, 0, 60, 78],
      }
  ]
};

var ctx6 = document.getElementById('dr_chart_2');
    var dr_chart_2 = new Chart(ctx6, {
      type: 'bar',
      data: dr_chart_data2,

      options: {
        plugins: {
          datalabels: {
            display: false,
          },
        },
        scales: {
          x: { 
            grid: {
              display: false,
            }

          },
          y: {
            grid: {
              drawOnChartArea: true,
            },
            ticks: {
              min: 0,
              max: 100,
              callback: function(value){return value+ "%"}
           },
            scaleLabel: {
            display: true,
            labelString: "Percentage"
           }
        }
      },

      }
      
});

$('.pr_list_vote_bar span').each(function(){
  var bar_data = $(this).data('percent');
  $(this).css('width' , bar_data + '%' );
});


const swiper_sns = new Swiper('.swiper_sns', {
  loop: true,
  speed: 5000,
  autoplay: {
    delay: 0,
    stopOnLastSlide: true,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
 },
  observer: true, 
  observerParents: true,
  slidesPerView: "auto",
  spaceBetween: 14.66667,


});

$('.current_tab_btn').each(function(){
  $(this).children().find('li').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    var tg = $(this);
    var idx = tg.index();
    $(this).parents('.current_tab_btn').siblings('.current_tab_cont').eq(idx).addClass('active').siblings().removeClass('active');
  });
});

var ctc_chart_data1 = {
  labels: ["더불어민주당", "국민의 힘", "녹색정의당", "개혁신당", "새진보연합", "진보당", "새로운미래", "무소속"],
  datasets: [
      {
          backgroundColor: [
            'rgb(53, 127, 196)', 
            'rgb(220, 83, 86)', 
            'rgb(255, 237, 0)',
            'rgb(217, 8, 32)',
            'rgb(217, 8, 32)',
            'rgb(217, 8, 32)',
            'rgb(153, 153, 153)',
          ],
          data: [160, 113, 6, 4, 1, 1, 1, 11],
          borderWidth: 1,
      }
  ]
};

var ctc1 = document.getElementById('ctc_chart1');
    var dr_chart_2 = new Chart(ctc1, {

      type: 'doughnut',
      data: ctc_chart_data1,

      options: {
        rotation: -90,
        circumference: 180,
        responsive: true, 
        layout: {
          padding: {
            left: 50,
            right: 100,
            top: 100,
            bottom: 100,
          },
        },

        plugins: {
          legend: false,
            datalabels: {
              anchor: 'end',
              align: 'end',
              offset: function(context) {
                return (context.dataIndex < 2) ? 20 : 40;
              },
              color: '#000',
              font: {
                size: 8,
                weight: 800,
              },
              formatter: function(value, context) {
                var labels = context.chart.data.labels;
                var label = labels[context.dataIndex];
                if (context.dataIndex < 2) {
                  return label + '\n' + value;
                } else {
                  return label + ' ' + value;
                }
              },
          },
        },
      },
      
      
});

var ctc_chart_data1 = {
  labels: ["초선", "재선", "3선", "4선", "5선", "6선"],
  datasets: [
      {
          // label: "제출건수",
          backgroundColor: 'rgb(34, 146, 143)',
          data: [155, 69, 40, 20, 12, 1]
      },
  ]
};



var ctc2 = document.getElementById('ctc_chart2');
var ctc_chart2 = new Chart(ctc2, {
type: 'bar',
data: ctc_chart_data1,
options: {
  layout: {
    padding: {
      top: 30,
      bottom: 10,
    },
  },
  plugins: {
    legend: false,
    datalabels: {
      anchor: 'end',
      align: 'end',
      offset: 5,
      color: '#000',
      font: {
        weight: 600,
      },
      formatter: function(value, context) {
        return value + '명';
      },
    },
  },
  scales: {
    x: { 
      grid: {
        display: false,
      }

    },
    y: {
      grid: {
        drawOnChartArea: true,
      },
      min: 0, 
      max: 200,
      ticks: {
        stepSize: 50,
      },
    },
  },
}

});

var ctc_chart_data2 = {
  labels: ["30대", "40대", "50대", "60대", "70대"],
  datasets: [
      {
          // label: "제출건수",
          backgroundColor: [
            'rgb(124, 181, 236)',
            'rgb(67, 67, 72)',
            'rgb(144, 237, 125)',
            'rgb(247, 163, 92)',
            'rgb(128, 133, 233)',
          ],
          data: [7, 23, 116, 134, 17]
      },
  ]
};

var ctc3 = document.getElementById('ctc_chart3');
var ctc_chart3 = new Chart(ctc3, {
type: 'bar',
data: ctc_chart_data2,
options: {
  layout: {
    padding: {
      top: 30,
      bottom: 10,
    },
  },
  plugins: {
    legend: false,
    datalabels: {
      anchor: 'end',
      align: 'end',
      offset: 5,
      color: '#000',
      font: {
        weight: 600,
      },
      formatter: function(value, context) {
        return value + '명';
      },
    },
  },
  scales: {
    x: { 
      grid: {
        display: false,
      }

    },
    y: {
      grid: {
        drawOnChartArea: true,
      },
      ticks: {
        stepSize: 50,
      },
    },
  },
}

});

var ctc_chart_data3 = {
  labels: ["남", "여"],
  datasets: [
      {
          // label: "제출건수",
          backgroundColor: [
            '#0000ff',
            '#ff0000',
          ],
          data: [241, 56]
      },
  ]
};

var ctc4 = document.getElementById('ctc_chart4');
var ctc_chart4 = new Chart(ctc4, {
type: 'bar',
data: ctc_chart_data3,
options: {
  layout: {
    padding: {
      top: 30,
      bottom: 10,
    },
  },
  plugins: {
    legend: false,
    datalabels: {
      anchor: 'end',
      align: 'end',
      offset: 5,
      color: '#000',
      font: {
        weight: 600,
      },
      formatter: function(value, context) {
        return value + '명';
      },
    },
  },
  scales: {
    x: { 
      grid: {
        display: false,
      }

    },
    y: {
      grid: {
        drawOnChartArea: true,
      },
      min: 0,
      max: 300,
      ticks: {
        stepSize: 50,
      },
    },
  },
}

});




});