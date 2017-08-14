import 'slick-carousel';

$(() => {
	$('.accordion__text').hide().first().show();
	$('.accordion__toggle').on('click', e => {
		$(e.target).closest('.accordion__toggle')
		.parent()
		.next()
		.slideDown()
		.parent()
		.siblings()
		.addClass('accordion__item_closed')
		.find('.accordion__text')
		.slideUp()		
	});
	$('.slider').slick();
})