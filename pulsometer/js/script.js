$(document).ready(function() {

	function ibg() {

		$.each($('._ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}

	ibg();

	$('.carusel__body').slick({
		infinite: true,
		// autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		adaptiveHeight: true
	});

	$('.catalog__category').on('click', 'li:not(.catalog__tab_active)', function () {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('.catalog__body').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide (item) {
		$(item).each( function (i) {
			$(this).on('click', function () {
				$('.catalog__wrapper').eq(i).toggleClass('catalog__wrapper_active');
				$('.catalog__list').eq(i).toggleClass('catalog__list_active');
				$('.catalog__link').eq(i).toggleClass('catalog__link_active');
				$('.catalog__back').eq(i).toggleClass('catalog__back_active');
			})
		})
	};

		toggleSlide ('.catalog__link');
		toggleSlide ('.catalog__back');

		//popup

		$('[data-modal=consultation]').on('click', function() {
			$('.overlay, .modul, #consultation').fadeIn('400');
			$('body').addClass('lock');
		});

		$('.popup__close, .overlay').on('click', function() {
			$('.overlay, .modul, #consultation, #thanks, #order').fadeOut('300');
			$('body').removeClass('lock');
		});

		$('.catalog__btn').each(function (i) {
			$(this).on('click', function () {
				$('#order .popup__descr').text($('.catalog__subtitle').eq(i).text());
				$('.overlay, .modul, #order').fadeIn('400');
				$('body').addClass('lock');
			});
		});

		$('[data-modal=thanks]').on('click', function () {
			$('#consultation, #order').fadeOut();
			$('.overlay, .modul, #thanks').fadeIn('400');
			$('body').addClass('lock');
		});
});


