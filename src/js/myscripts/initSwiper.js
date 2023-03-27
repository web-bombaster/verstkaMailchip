// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.jsReviewsSlider')) {
		const jsReviewsSlider = new Swiper('.jsReviewsSlider', {
			spaceBetween: 20,
			slidesPerView: 2,
			loop: true,

			navigation: {
				nextEl: ".reviews__next",
				prevEl: ".reviews__prev",
			},
		});
	};
};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	initSwiper();
});

initSwiper();


