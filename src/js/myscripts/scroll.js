// Плавный скролл до блока с учетом высоты фисированной шапки
document.querySelectorAll('a.menu-link[href^="#"]').forEach(link => {

	link.addEventListener('click', function (e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		// Будем учитывать высоту шапки сайта при прокрутке на медиа <= 992, когда шапка фиксируется
		let heightHeader;
		if (document.documentElement.clientWidth <= 992) {
			heightHeader = document.querySelector('.header').offsetHeight;
		} else {
			heightHeader = 0;
		}

		const scrollTarget = document.getElementById(href);
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - heightHeader;

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
	});
});