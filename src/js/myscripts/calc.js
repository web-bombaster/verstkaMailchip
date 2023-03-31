if (document.querySelector('.js-calc-one')) {

	const jsCalcOne = document.querySelector('.js-calc-one');
	const calcFormBtns = jsCalcOne.querySelectorAll('.calc-form__btn');

	let time, subscribers;

	// из кнопок с классом toogle получаем значения в переменные time и subscribers из дата-элементов
	function valueInit() {
		const calcFormBtnToogle = jsCalcOne.querySelectorAll('.toogle');

		for (let index = 0; index < calcFormBtnToogle.length; index++) {

			if (calcFormBtnToogle[index].getAttribute('data-type') == "time") {
				time = calcFormBtnToogle[index].getAttribute('data-value');
			};

			if (calcFormBtnToogle[index].getAttribute('data-type') == "subscribers") {
				subscribers = calcFormBtnToogle[index].getAttribute('data-value');
			};

		};
	};

	valueInit();

	// показываем стоимость в зависимости от значений полученных переменных
	function showCost() {
		let price;
		const calcTarifsItem = 'time-' + time + '-subscribers-' + subscribers;
		price = document.querySelector('[data-value="' + calcTarifsItem + '"]').getAttribute('data-price');
		price += '₽';
		document.querySelector('.js-price-subscribers').textContent = price;
	};

	// при клике на любой label у соседей убираем класс активности, а у самого элемента добавляем класс активности
	for (let i = 0; i < calcFormBtns.length; i++) {
		calcFormBtns[i].addEventListener("click", function(e) {
			const dataType = e.target.getAttribute('data-type');

			for (let j = 0; j < calcFormBtns.length; j++) {
				if (calcFormBtns[j].getAttribute('data-type') == dataType) {
					calcFormBtns[j].classList.remove('toogle');
				}
			};

			e.target.classList.add('toogle');
			valueInit();
			showCost();
		});
	};

};

if (document.querySelector('.js-calc-two')) {

	const jsCalcTwo = document.querySelector('.js-calc-two');
	const calcFormBtns = jsCalcTwo.querySelectorAll('.calc-form__btn');

	let dataPrice, time, subscribers;

	// из кнопок с классом toogle получаем значения в переменные time и subscribers из дата-элементов
	function valueInit() {
		const calcFormBtnToogle = jsCalcTwo.querySelector('.toogle');

		dataPrice = calcFormBtnToogle.getAttribute('data-price');
	};

	valueInit();

	// показываем стоимость в зависимости от значений полученных переменных
	function showCost() {
		let price;

		price = dataPrice + ' ₽';
		document.querySelector('.js-price-letters').textContent = price;
	};

	// при клике на любой label у соседей убираем класс активности, а у самого элемента добавляем класс активности
	for (let i = 0; i < calcFormBtns.length; i++) {
		calcFormBtns[i].addEventListener("click", function(e) {
			const dataType = e.target.getAttribute('data-type');

			for (let j = 0; j < calcFormBtns.length; j++) {
				if (calcFormBtns[j].getAttribute('data-type') == dataType) {
					calcFormBtns[j].classList.remove('toogle');
				}
			};

			e.target.classList.add('toogle');
			valueInit();
			showCost();
		});
	};

};