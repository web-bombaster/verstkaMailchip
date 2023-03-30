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
		switch(time) {
			case '1':
				switch(subscribers) {
					case '1000':
						price = 450;
						break;

					case '1500':
						price = 660;
						break;

					case '2000':
						price = 800;
						break;

					case '3000':
						price = 900;
						break;

					case '4000':
						price = 1120;
						break;

					case '5000':
						price = 1300;
						break;

					case '6000':
						price = 1440;
						break;
				};
				break;

			case '3':
				switch(subscribers) {
					case '1000':
						price = 1215;
						break;

					case '1500':
						price = 1782;
						break;

					case '2000':
						price = 2160;
						break;

					case '3000':
						price = 2430;
						break;

					case '4000':
						price = 3024;
						break;

					case '5000':
						price = 3510;
						break;

					case '6000':
						price = 3888;
						break;
				};
				break;

			case '6':
				switch(subscribers) {
					case '1000':
						price = 2160;
						break;

					case '1500':
						price = 3168;
						break;

					case '2000':
						price = 3840;
						break;

					case '3000':
						price = 4320;
						break;

					case '4000':
						price = 5376;
						break;

					case '5000':
						price = 6240;
						break;

					case '6000':
						price = 6912;
						break;
				};
				break;

			case '12':
				switch(subscribers) {
					case '1000':
						price = 3780;
						break;

					case '1500':
						price = 5544;
						break;

					case '2000':
						price = 6720;
						break;

					case '3000':
						price = 7560;
						break;

					case '4000':
						price = 9408;
						break;

					case '5000':
						price = 10920;
						break;

					case '6000':
						price = 12096;
						break;
				};
				break;

		};
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