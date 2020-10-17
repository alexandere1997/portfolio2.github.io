let navActive = () => {
  $(function(){  
    $('.header__items').mouseover(function(){
        $('.header__items').removeClass('header__items_active').addClass('header__items_NoActive');
        $(this).removeClass('header__items_NoActive').addClass('header__items_active'); 
        return false;
    });
  });
}
export default navActive;