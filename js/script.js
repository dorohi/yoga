//window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	const info = document.querySelector('.info-header'),
		tabs = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	hideTabContent(1);

	function hideTabContent(key) {
		for (let i = key; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	function showTabContent(key) {
		if (tabContent[key].classList.contains('hide')) {
			tabContent[key].classList.remove('hide');
			tabContent[key].classList.add('show');
		}
	}

	info.addEventListener('click', (event) => {
		const target = event.target;
		if (target && target.classList.contains('info-header-tab')) {
			for (let i = 0; i < tabs.length; i++) {
				if (tabs[i] == target) {
					hideTabContent(0);
					showTabContent(i);
					break;
				}
			}
		}
	});

	//TIMER
	const deadLine = '2019-03-23';

	function getTimeRemaining(endTime) {
		let t = Date.parse(endTime) - Date.parse(new Date());
		t = t <= 0 ? t = 0 : t;
		let seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)));
		return {
			'total': t,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function setClock(id, endTime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector('.hours'),
			minutes = timer.querySelector('.minutes'),
			seconds = timer.querySelector('.seconds'),
			timeInterval = setInterval(update, 1000);

		function update() {
			let t = getTimeRemaining(endTime);
			hours.textContent = getNormal(t.hours);
			minutes.textContent = getNormal(t.minutes);
			seconds.textContent = getNormal(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
		return '';
	}
	setClock('timer', deadLine);

	//SCROLL
	const nav = document.querySelectorAll('a'),
		speed = 1 / 2; // Чем меньше дробь, тем быстрее прокрутка
	nav.forEach((item) => {
		item.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target,
				curent = window.pageYOffset,
				hash = target.href.replace(/[^#]*(.*)/, '$1'),
				top = document.querySelector(hash).getBoundingClientRect().top,
				start = null;
			console.log(curent);
			requestAnimationFrame(function step(time) {
				if (start === null) {
					start = time;
				}
				let progress = time - start,
					positions = (top < 0 ? Math.max(curent - progress / speed, curent + top) : Math.min(curent + progress / speed, curent + top));
				window.scrollTo(0, positions);
				if (positions != curent + top) {
					requestAnimationFrame(step);
				} else {
					location.hash = hash;
				}
			});
		});
	});

	//MODAL
	const more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		descriptionBtn = document.querySelectorAll('.description-btn');

	more.addEventListener('click', function () {
		overlay.style.display = 'block';
		this.classList.add('more-splash');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', () => {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
	});

	descriptionBtn.forEach((element) => {
		element.addEventListener('click', () => {
			overlay.style.display = 'block';
			if (!isMobile()) {
				console.log(`Animations ON`);
				if (isIE()) {
					console.log(`isIE = ${isIE()} animations`);
					element.classList.add('more-splash');
				} else {
					overlay.classList.remove('fade');
					console.log(`isMobile = ${isMobile()} and isIE = ${isIE()} - JS animations`);
					//Что бы не загружать код, подключил дополнительный файл с ф-циями анимации
					animate({
						duration: 3000,
						timing: makeEaseOut(bounce),
						draw: (progress) => {
							overlay.style.opacity = progress;
						}
					});
				}

			} else {
				overlay.classList.remove('fade');
				console.log(`isMobele = ${isMobile()} Animations OFF`);
			}
			document.body.style.overflow = 'hidden';
		});
	});

	//Mask on phone numbers
	let phones = document.querySelectorAll('input');
	phones.forEach(element => {
		if (element.getAttribute('type') === 'tel') {
			element.addEventListener("focus", mask);
			element.addEventListener("input", mask);
			element.addEventListener("blur", mask);
		}
	});

	//FORMS

	let message = {
		loading: 'Загрузка . . .',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	let forms = document.querySelectorAll('form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

	forms.forEach(form => {
		form.addEventListener('submit', function (event) {
			event.preventDefault();
			this.appendChild(statusMessage);
			let formData = new FormData(this);
			statusMessage.classList.add('status');
			if (!this.classList.contains('main-form')) {
				statusMessage.classList.add('form-contact');
			}
			statusMessage.classList.remove('status');
			statusMessage.innerHTML = `<img src="img/ajax-loader.gif" alt="loader" style="margin-top: 20px;">`;

			function postData(data) {
				return new Promise(function (resolve, reject) {
					let request = new XMLHttpRequest();
					request.open('POST', 'server.php');
					request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');

					let json = formDataToJSON(data);
					console.log(data);
					console.log(this);

					request.onreadystatechange = () => {
						if (request.status == 200) {
							resolve();
						} else {
							reject();
						}
					};
					request.send(json);
				});
			}

			function formDataToJSON(formData) {
				let obj = {};
				formData.forEach(function (value, key) {
					obj[key] = value;
				});
				return JSON.stringify(obj);
			}

			function clearInput() {
				for (let i = 0; i < input.length; i++) {
					input[i].value = '';
				}
			}
			postData(formData)
				.then(() => {
					statusMessage.classList.add('status');
					statusMessage.innerHTML = message.success;
				})
				.catch(() => {
					statusMessage.classList.add('status');
					statusMessage.innerHTML = message.failure;
				})
				.then(clearInput);
		});
	});

	// SLIDER

	const slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');
	let sliderIndex = 1,
		width = slides[sliderIndex].clientWidth;
	slideShow(sliderIndex);
	//const body = body.style.overflowX = 'hidden';

	function slideShow(index, move) {
		if (index > slides.length) {
			sliderIndex = 1;
		};
		if (index < 1) {
			sliderIndex = slides.length;
		}
		slides.forEach(item => {
			item.style.display = 'none';
			item.style.marginLeft = width;
		});
		dots.forEach(item => item.classList.remove('dot-active'));

		slides[sliderIndex - 1].classList.remove('fade');
		slides[sliderIndex - 1].style.display = 'block';
		const img1 = slides[sliderIndex - 1].querySelector('img');
		document.body.style.overflowX = 'hidden';
		animate({
			duration: 1000,
			timing: makeEaseOut(bounce),
			draw: (progress) => {
				if (move>0){
					img1.style.marginLeft = (progress - 1) * width + "px";
				} else {
					img1.style.marginLeft = width - progress * width + "px";
				}
			}
		});
		animate({
			duration: 1500,
			timing: linear,
			draw: (progress) => {
				img1.style.opacity = progress;
			}
		});
		dots[sliderIndex - 1].classList.add('dot-active');
	}

	function slideMove(index) {
		slideShow(sliderIndex += index, index);
	}

	function slideCurent(index) {
		slideShow(sliderIndex = index, index);
	}

	prev.addEventListener('click', () => slideMove(-1));
	next.addEventListener('click', () => slideMove(1));
	dotsWrap.addEventListener('click', event => {
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
				slideCurent(i);
			}
		}
	});

	//CALC

	const persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total');

	let personsSum = 0,
		daysSum = 0,
		placeKoef = place.options[place.selectedIndex].value,
		total = 0;

	totalValue.textContent = 0;

	persons.addEventListener('keyup', function () {
		this.value = this.value.replace(/[^0-9]+/g, '');
		persons.textContent = this.value;
	});

	restDays.addEventListener('keyup', function () {
		this.value = this.value.replace(/[^0-9]+/g, '');
		restDays.textContent = this.value;
	});

	persons.addEventListener('input', function () {
		personsSum = +this.value;
		total = (daysSum * personsSum * placeKoef) * 4000;
		if (restDays == '') {
			totalValue.textContent = 0;
		} else {
			animateNumbers();
		}
	});

	restDays.addEventListener('input', function () {
		daysSum = +this.value;
		total = (daysSum * personsSum * placeKoef) * 4000;
		if (persons == '') {
			totalValue.textContent = 0;
		} else {
			animateNumbers();
		}
	});

	place.addEventListener('change', function () {
		placeKoef = +this.options[this.selectedIndex].value;
		total = (daysSum * personsSum * placeKoef) * 4000;
		if (restDays == '' || persons == '') {
			totalValue.textContent = 0;
		} else {
			animateNumbers();
		}
	});

	function animateNumbers() {
		animate({
			duration: 2000,
			timing: makeEaseInOut(circ),
			draw: (progress) => {
				totalValue.textContent = (progress * total).toFixed();
			}
		});
	}
//});

function getNormal(number) {
	return number < 10 ? '0' + number : number;
}

// Отображение анимации в зависимости от браузера и устройства
function isIE() {
	return /edge/.test(navigator.userAgent.toLowerCase()) || /Internet Explorer/.test(navigator.userAgent.toLowerCase());
}

function isMobile() {
	return (/ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase()));
}

function mask(event) {
	let matrix = "+38 (0__) ___-__-__",
		curentSimvol = 0,
		onlyNumbers = matrix.replace(/\D/g, ""),
		value = this.value.replace(/\D/g, "");
	if (onlyNumbers.length >= value.length) {
		value = onlyNumbers;
	}
	this.value = matrix.replace(/./g, a => {
		if (/[_\d]/.test(a) && curentSimvol < value.length) {
			return value.charAt(curentSimvol++);
		} else if (curentSimvol >= value.length) {
			return '';
		} else {
			return a;
		}
	});
	if (event.type == "blur") {
		if (this.value.length == 6) {
			this.value = "";
		}
	}
}

function sleep(miliseconds) {
	var currentTime = new Date().getTime();
	while (currentTime + miliseconds >= new Date().getTime()) {}
}