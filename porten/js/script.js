function toggleMainMenu() {
	$('.bottom-header__burger, .bottom-header__menu, .bottom-header__burger_span, .bottom-header__overlay').toggleClass('active');
	$('body').toggleClass('lock');
}

$('.bottom-header__burger').on('click', function (event) {
	toggleMainMenu();
});

$(document).on('click', '.bottom-header__overlay.active', function (event) {
	toggleMainMenu();
});


function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

$(window).on("load resize", function () {
	let width = $(document).width();

	if (width > 768) {
		$('.new-goods__block, .new-collection__block').slick('unslick');
	} else {
		$('.new-goods__block, .new-collection__block').not('.slick-initialized').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 2000,
			waitForAnimate: false,
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
					}
				}]
		});
	}
});


