if (document.querySelector('.jsMobileMenuBtnToggle')) {

	const body = document.querySelector('body');
	const menuBtn = document.querySelector('.jsMobileMenuBtnToggle');
	const menu = document.querySelector('.mobile-menu');
	const menuLink = document.querySelectorAll('.menu-link');

	function closeMenu() {
		menuBtn.classList.remove('toggle');
		menu.classList.remove('toggle');
		body.classList.remove('toggle');
	}

	// Показать / скрыть мобильное меню
	function menuToggle() {
		if (menuBtn.classList.contains('toggle')) {
			menu.classList.add('toggle');
			body.classList.add('toggle');
		} else {
			menu.classList.remove('toggle');
			body.classList.remove('toggle');
		};

		window.addEventListener('resize', function () {
			closeMenu();
		}, true);
	};

	// Определяем высоту мобильного меню и размещаем под шапкой
	function positionMobileMenu() {
		const heightViewport = document.documentElement.clientHeight;
		const heightHeader = document.querySelector('.header').offsetHeight;
		const heightMenuOverlay = heightViewport - heightHeader;
		let posTop = window.pageYOffset;

		const menuActive = document.querySelector('.mobile-menu.toggle');

		if (menuActive) {
			menuActive.style.height = heightMenuOverlay + 'px';
			menuActive.style.top = posTop + heightHeader + 'px';
		};
	};

	// Закрываем мобильное меню по клику вне его
	function closeMobileMenu() {
		document.addEventListener("click", function (e) {
			const target = e.target;
			const its_menu = target == menu || menu.contains(target);
			const its_btnMenu = target == menuBtn;

			if (!its_menu && !its_btnMenu) {
				closeMenu();
			};
		});
	};

	menuBtn.addEventListener("click", menuToggle);
	menuBtn.addEventListener("click", positionMobileMenu);
	closeMobileMenu();

	menuLink.forEach(element => {
		element.addEventListener("click", closeMenu);
	});

};


