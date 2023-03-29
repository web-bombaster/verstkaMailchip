if (document.querySelector('.js-calc-one')) {

	const jsCalcOne = document.querySelector('.js-calc-one');
	const labels = jsCalcOne.querySelectorAll('label');

	let time, subscribers;

	// из лейблов с классом toogle получаем значения в переменные time и subscribers из дочерних элементов из параметров value
	function valueInit() {
		const labelsToogle = jsCalcOne.querySelectorAll('.toogle');

		for (let index = 0; index < labelsToogle.length; index++) {

			const childrenEl = labelsToogle[index].querySelector('input');
			const childrenElName = childrenEl.getAttribute('name');

			if (childrenElName == 'time') {
				time = childrenEl.getAttribute('value');
			};

			if (childrenElName == 'subscribers') {
				subscribers = childrenEl.getAttribute('value');
			};

		};

		console.log(time + ' - ' + subscribers);
	};

	valueInit();

	// при клике на любой label у соседей убираем класс активности, а у самого элемента добавляем класс активности
	for (let index = 0; index < labels.length; index++) {
		labels[index].addEventListener("click", function(e) {
			const childrenEl = e.target.querySelector('input');
			const childrenElName = childrenEl.getAttribute('name');
			console.log(childrenElName);

			for (let index = 0; index < labels.length; index++) {
				if (labels[index].querySelector('input').getAttribute('name') == childrenElName) {
					labels[index].classList.remove('toogle');
				}
			};

			e.target.classList.add('toogle');
			valueInit();
		});
	};

	// window.addEventListener("resize", btnBurgerToggleClassRemove);
	// element.addEventListener("click", btnBurgerToggle);


	// Открыть / закрыть бургер по клику на него
	// function btnBurgerToggle(e) {
	//     e.target.classList.toggle('toggle');
	// }

	// При ресайзе возвращаем кнопки в исходное состояние
	// function btnBurgerToggleClassRemove() {
	//     btnBurger.forEach(element => {
	//         element.classList.remove('toggle');
	//     });
	// }


	// у всех соседей убрать класс активности
	// у элемента добавить класс активности
	// в зависимости от name дочернего элемента записать в переменную time или subscribers значение из
};