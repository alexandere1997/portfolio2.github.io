
let funcBtn = () => {
  $(document).ready(function(){
    $("#arroButton").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
  });
}

export default funcBtn;