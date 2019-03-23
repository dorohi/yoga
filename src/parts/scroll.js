function scroll(){
	'use strict';
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
}

module.exports = scroll;