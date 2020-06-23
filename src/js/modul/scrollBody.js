import  $  from  'jquery';

let funcScroll = () => {
    $(window).scroll(function() {
  
        var $window = $(window),
            $body = $('body'),
            $pin = $('.pin-spacer'),
            $panel = $('.panel')
        var scroll = $window.scrollTop() + ($window.height() / 3);

        if($(window).width() <= '1199'){
          $panel.each(function () {
            var $this = $(this);
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
              });
              $body.addClass('color-' + $(this).data('color'));
            }
          }); 
        }
        else {
          $pin.each(function () {
            var $this = $(this);
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
              });
              $body.addClass('color-' + $(this).data('color'));
            }
          });
        }
       
        
      }).scroll();
} 

export default funcScroll;