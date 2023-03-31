// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.jsReviewsSlider')) {
		const jsReviewsSlider = new Swiper('.jsReviewsSlider', {
			spaceBetween: 10,
			slidesPerView: 1,
			autoHeight: false,
			loop: true,

			breakpoints: {
				769: {
					slidesPerView: 2,
					spaceBetween: 20,
					loop: true,
				},
			},

			pagination: {
				el: ".reviews-pagination",
			},

			navigation: {
				nextEl: ".reviews__next",
				prevEl: ".reviews__prev",
			},
		});
	};

	if (document.querySelector('.jsAdvantagesSlider')) {
		const jsReviewsSlider = new Swiper('.jsAdvantagesSlider', {
			spaceBetween: 20,
			slidesPerView: 1,
			autoHeight: false,
			loop: true,

			breakpoints: {
				993: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: false,
				},
			},

			pagination: {
				el: ".advantages-pagination",
			},

			navigation: {
				nextEl: ".advantages__next",
				prevEl: ".advantages__prev",
			},
		});
	};
};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	initSwiper();
});

initSwiper();


