let funcForm = () => {
	$(document).ready(function() {

		$(".work__form").submit(function() {
			$.ajax({
				type: "POST",
				url: "/static/php/action_ajax_form.php",
				data: $(this).serialize()
			}).done(function() {
				$(this).find(".info").val("");
				$(".work__messeg").css("display", "block");
				$(".work__off").on( "click", function() {
					$(".work__messeg").css("display", "none")
				});
				$(".work__form").trigger("reset");
			});
			return false;
		});
		
	});
}
export default funcForm;