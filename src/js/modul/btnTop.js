

let btnFuncTop = () => {
	var amountScrolled = 300;

	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('.work__arrow').fadeIn('slow');
		} else {
			$('.work__arrow').fadeOut('slow');
		}
	});

	$('.work__arrow').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 900);
		return false;
	});
}

export default btnFuncTop;