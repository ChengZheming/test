/**
 * Created by dell on 2018/1/31.
 */
$('.news-left').hide();
$('.news-right').hide();
$('.video-left').hide();
$('.video-right').hide();
$('.partner').hide();
$('.bottom-contents').hide();
$('.copyrights').hide();
$(function(){
    function myFn() {
        var sT;
        sT = $(window).scrollTop();
        if (sT >= $('.news').offset().top-480) {
            $('.news-left').animate({'left': '15%'},1500);           
            $('.news-right').animate({'right': '15%'},1500);
        }
        if (sT >= $('.video').offset().top-575) {
            $('.video-left').animate({'left': '9.5%'},1500);
            $('.video-right').animate({'right': '9.5%'},1500);
        }
        if (sT >= $('.partner').offset().top-760) {
            $('.partner h3').animate({'top': '-72px'},1500);
            $('.partner p img').animate({'top': '-72px'},1500);  
        }
       /* if (sT >= $('#bottoms').offset().top-1100) {
            $('.bottom-contents').animate({'top': '-72px'},1500);
            $('.bottom-copyrights').animate({'top': '-72px'},1500);
        }*/
    }
    $(function () {
        $(window).scroll(function () {
            $('.news-left').show();
            $('.news-right').show();
            $('.video-left').show();
            $('.video-right').show();
            $('.partner').show();
            $('.bottom-contents').show();
            $('.copyrights').show();
            myFn();
        });
    });
});

