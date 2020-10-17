let navFixed = () => {
  $(window).scroll(function(){
    $('.header__nav').toggleClass('header__fixed', $(this).scrollTop() > 0);
    $('.header__cross').toggleClass('header__cross_add', $(this).scrollTop() > 0);
  });
}


export default navFixed;