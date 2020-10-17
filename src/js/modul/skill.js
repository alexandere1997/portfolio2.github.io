import  $  from  'jquery';
import jQuery from "jquery"
let funcSkill = () => {
    var target = $('.skills');
    var targetPos = target.offset().top;
    var winHeight = $(window).height();
    var scrollToElem = targetPos - winHeight;
    $(window).scroll(function(){
    var winScrollTop = $(this).scrollTop();
    if(winScrollTop > scrollToElem){
        //сработает когда пользователь доскроллит к элементу с классом .elem
        jQuery(document).ready(function(){
        jQuery('.skills__clearfix').each(function(){
            jQuery(this).find('.skills__bar').animate({
            width:jQuery(this).attr('data-percent')
            },3000);
        });
        });
    }
    });
}


export default funcSkill;