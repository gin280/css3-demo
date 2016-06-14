$(document).ready(function () {
     $('.submit').click(function () {
        $('.mask').removeClass('mask-leave').addClass('mask-enter');
        $('.pop').fadeIn();
     });
     $('.to1').click(function () {
        $('.sec1').show()
        $('.sec2, .sec3, .sec4, .sec5').hide()
     });
     $('.to2').click(function () {
        $('.sec2').show()
        $('.sec1, .sec3, .sec4, .sec5').hide()
     });
     $('.to3').click(function () {
        $('.sec3').show()
        $('.sec2, .sec1, .sec4, .sec5').hide()
     });
     $('.to4').click(function () {
        $('.sec4').show()
        $('.sec2, .sec3, .sec1, .sec5').hide()
     });
     $('.to5').click(function () {
        $('.sec5').show()
        $('.sec2, .sec3, .sec4, .sec1').hide()
     });
     var total = 0;
     var count = 0;
     $('.questions li ').click(function () {
        $(this).addClass('questions-bg');
        $(this).siblings().removeClass('questions-bg');
        $(this).children('span').addClass('click-s');
        $(this).siblings().children('span').removeClass('click-s');
        if ($(this).text() == 'B糯米') {
            total += 20;
            count++;
        }
         if ($(this).text() == 'C香椿') {
            total += 20;
            count++;
        }
        if ($(this).text() == 'C草莓') {
            total += 20;
            count++;
        }
        if ($(this).text() == 'D腊肉') {
            total += 20;
            count++;
        }
        if ($(this).text() == 'B螃蟹') {
            total += 20;
            count++;
        }
        
        var countR = 5 - count;
        $('.count').text(count);
        $('.count-r').text(countR);
        $('.circle p').text(total);
        var circleText = $('.circle p').text();
        if (circleText < 9) {
            $('.circle p').css('padding-left', '12px')
        };
        if (circleText > 10 && circleText < 100) {
            $('.circle p').css('padding-left', '6px')
        };
        if (total == 100) {
            $('.change-text').text('亲，您真是控糖达人。请收下小编的膝盖！')
        }
        if (total == 80) {
            $('.change-text').text('你与控糖达人只有一道题的距离～继续加油')
        }
        if (total == 60) {
            $('.change-text').text('100分太满，60分刚好，及格万岁！')
        }
        if (total == 40) {
            $('.change-text').text('但是还要继续努力啊～')
        }
        if (total == 20) {
            $('.change-text').text('只答对了1道题！快来掌上糖医学习控糖知识。')
        }
        if (total == 0) {
            $('.change-text').text('竟然成功的避开了所有正确选项！快来掌上糖医学习控糖知识。')
        }
        console.log(total, count);
       
    });
     
   
   });