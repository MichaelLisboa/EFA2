// STYLES AND ACTIONS FOR MOBILE NAV
$('ul.navbar-nav li a').click(function(e) {
	var $this = $(this);
	$this.parent().siblings().removeClass('active').end().addClass('active');

	if ($('#topNavbarResponsive').css('display') != 'hide') {
		$('#topNavbarResponsive').trigger("click");

		setTimeout(function() {
			$('.navbar-collapse').collapse('hide');
		}, 200);
	}
	e.preventDefault();
});

// RESET MODAL STYLES FOR FULL SCREEN
$('.modal').on('shown.bs.modal', function() {
	$(".modal-body").css("margin", '0px');
	$(".modal-dialog").css({
		'position': 'relative',
		'display': 'table',
		'overflow-y': 'auto',
		'overflow-x': 'auto',
		'width': 'auto',
		'min-width': '10px'
	});
});

// TOUCH SWIPE CAROUSEL FOR MOBILE
$(".carousel").on("touchstart", function(event) {
	var xClick = event.originalEvent.touches[0].pageX;
	$(this).one("touchmove", function(event) {
		var xMove = event.originalEvent.touches[0].pageX;
		if (Math.floor(xClick - xMove) > 5) {
			$(this).carousel('next');
		} else if (Math.floor(xClick - xMove) < -5) {
			$(this).carousel('prev');
		}
	});
	$(".carousel").on("touchend", function() {
		$(this).off("touchmove");
	});
});
