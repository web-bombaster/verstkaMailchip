// let modalBg = document.querySelector('.modal'); // оверлей с затемнением для попап окна
let modalInner = 'modal__inner'; // Класс подложки модального окна, по которой при щелчке будет закрываться окно
let closeModalButton = 'close-modal'; // Класс кнопок для скрытия окна
let noScroll = 'no-scroll'; // Класс no-scroll, который мы добавляем или скрываем у body при  открытии модалки


// Добавляем кнопки закрытия модалок в их разметку
const btnCloseModal = () => {
	// Если  модальные окна есть в разметке
	if (document.querySelectorAll('.modal__content').length > 0) {
		const modalContent = document.querySelectorAll('.modal__content'); // Все модальные окна

		// для каждого окна
		modalContent.forEach(element => {
			// добавляем в разметку span.close-modal
			let closeButton = document.createElement('span');
			closeButton.className = closeModalButton;
			element.prepend(closeButton);
		});
	};
};

btnCloseModal();


// Функция closeModal закрытия модального окна при клике на фон или кнопку закрытия окна
const closeModal = () => {
	// Вешаем обработчик на весь документ
	document.addEventListener('click', (e) => {
		// Если содержит класс modal__inner или close-modal
		if ((e.target.classList.contains(modalInner)) || (e.target.classList.contains(closeModalButton))) {
			e.target.closest('.modal').classList.remove('show'); // Убираем активный класс с фона
			document.body.classList.remove(noScroll);
		}
	});
};

// Функция openModal открытия модального окна
const openModal = () => {
	// Если кнопки вызова модалок существуют
	if (document.querySelectorAll('.open-modal').length > 0) {
		// отслеживаем клики по ним
		// Вешаем обработчик на весь документ
		document.addEventListener('click', (e) => {
			// специально не сделано через forEach, т.к. если элементы генерируются динамически, например, в слайдере, то forEach не отследит такие элементы
			const openModalButtons = 'open-modal'; // Кнопки для показа модальных окон

			// Если содержит класс open-modal
			if (e.target.classList.contains(openModalButtons)) {
				e.preventDefault(); // Предотвращаем дефолтное поведение браузера
				// в modalID записываем значение из href без решетки
				const modalID = e.target.getAttribute('href').replace('#', '');
				// отображаем модалку с найденным id
				document.getElementById(modalID).classList.add('show');
				document.body.classList.add(noScroll);

				closeModal(); // запускаем отслеживание закрытия только после открытия модалки
			}

		});
	};
};

openModal();





// document.addEventListener('click', (e) => {
// 	console.log(e.target);
// });
