function slider(){
	'use strict';
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
		}
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
}

module.exports = slider;