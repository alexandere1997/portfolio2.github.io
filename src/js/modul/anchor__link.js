let funcLinks = () => {
  $(document).ready(function (){
    $(".header__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  });
}

export default funcLinks;
