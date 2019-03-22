function modal(){
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

	function isIE() {
		return /edge/.test(navigator.userAgent.toLowerCase()) || /Internet Explorer/.test(navigator.userAgent.toLowerCase());
	}

	function isMobile() {
		return (/ipad|iphone|ipod|android|blackberry|webos|windows phone/i.test(navigator.userAgent.toLowerCase()));
	}
}

module.exports = modal;