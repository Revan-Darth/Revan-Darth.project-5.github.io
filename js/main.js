$(document).ready(function(){
	$('.friends__inner').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: false,
		waitForAnimate: false,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.pet__tabs-link').click(function(tabs){ // кнопки на которые будем нажимать
		tabs.preventDefault();
		$('.pet__tabs-link').removeClass('pet__tabs-link--active');
		$('.pet__inner').removeClass('pet__inner--active');
	$(this).addClass('pet__tabs-link--active');
		$($(this).attr('href')).addClass('pet__inner--active');
	});
		$('.pet__tabs-link:first').click();

	const modalCall = $("[data-modal]");
	const modalClose = $("[data-close]");
	modalCall.on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let modalId = $this.data('modal');

		$(modalId).addClass('show');
	});

	modalClose.on("click", function(event){
		event.preventDefault();

		let $this = $(this);
		let modalParent = $this.parents('#poppup');

		modalParent.removeClass('show');
	});

	$('.header__burger').click(function(event){
		$('.header__burger, .header__list').toggleClass('active');
	});
});