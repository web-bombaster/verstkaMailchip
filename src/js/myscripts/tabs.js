// Табы имеют сложную верстку. При клике на кноку таба, у него будут меняться картинка, заголовок, описание, галерея. Причем эти элементы могут не лежать в одной обертке.
const tabsBtn = document.querySelectorAll('.tab-btn-item'); // кнопки табов
const tabsContentItem = document.querySelectorAll('.tabs-content-item'); // текст табов

// Перебираем кнопки табов, по которым можем щелкнуть
tabsBtn.forEach((btn, index) => {
	// Вешаем событие клика на каждую кнопку
	btn.addEventListener('click', function () {
		// Если у кнопки, по которой щелкнули, нет класса активности,
		if (!btn.classList.contains('toggle')) {

			// Пробегаемся по кнопкам
			tabsBtn.forEach(element => {
				// удаляем класс активности
				element.classList.remove('toggle');
				element.classList.add('btn--transparent');
			});

			// Добавляем класс активности на нажатую кнопку
			tabsBtn[index].classList.add('toggle');
			tabsBtn[index].classList.remove('btn--transparent');

			// Пробегаемся по текстам табов
			tabsContentItem.forEach(element => {
				// удаляем класс активности
				element.classList.remove('toggle');
			});

			// Добавляем класс активности на текст таба
			tabsContentItem[index].classList.add('toggle');

		};
	});
});