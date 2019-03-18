window.addEventListener('DOMContentLoaded', () => {
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
	const deadLine = '2019-03-19';

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

	//FORMS

	let message = {
		loading: 'Загрузка . . .',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	let form = document.querySelector('.main-form'),
		contactForm = document.querySelector('#form'),
		input = form.getElementsByTagName('input'),
		inputContact = contactForm.getElementsByTagName('input'),
		statusMessage = document.createElement('div'),
		statusContact = document.createElement('div'),
		phones = document.querySelectorAll('input');

	phones.forEach(element => {
		if (element.getAttribute('type') === 'tel') {
			element.addEventListener("focus", mask);
			element.addEventListener("input", mask);
			element.addEventListener("blur", mask);
		}
	});

	form.addEventListener('submit', (event) => {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();

		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');

		let formData = new FormData(form);
		let obj = {};
		formData.forEach(function (value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);
		request.onreadystatechange = () => {
			console.log(request.status);
			console.log(request.readyState);
			statusMessage.classList.add('status');
			if (request.readyState == 2) {
				statusMessage.innerHTML = message.loading;
				//sleep(2000);
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			}
		};
		request.send(json);
		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	//Form contact
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault();
		contactForm.appendChild(statusContact);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');

		let formData = new FormData(contactForm);
		let obj = {};
		formData.forEach(function (value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);
		request.addEventListener('readystatechange', () => {
			statusContact.classList.add('status');
			statusContact.classList.add('form-contact');
			if (request.readyState < 3) {
				console.log(request.status);
				statusContact.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				console.log(request.status);
				statusContact.innerHTML = message.success;
			}
		});

		for (let i = 0; i < inputContact.length; i++) {
			inputContact[i].value = '';

		}
	});
});

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