function animate(options) {
	let start = performance.now();
	requestAnimationFrame(function anime(time) {
		// timeFraction от 0 до 1
		let timeFraction = (time - start) / options.duration;
		if (timeFraction > 1) {
			timeFraction = 1;
		}
		// текущее состояние анимации
		let progress = options.timing(timeFraction);
		options.draw(progress);
		if (timeFraction < 1) {
			requestAnimationFrame(anime);
		}
	});
}

//Линейная
function linear(timeFraction) {
	return timeFraction;
}

//В степени n
//Увеличение степени влияет на ускорение.
function quad(progress) {
	return Math.pow(progress, 2);
}

//Дуга
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}

//Back: стреляем из лука. x - «коэффициентом упругости»
function back(x, timeFraction) {
	return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

//Отскок bounce
function bounce(timeFraction) {
	for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
		if (timeFraction >= (7 - 4 * a) / 11) {
			return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
		}
	}
}

//Упругая анимация. x - определяет начальный диапазон
function elastic(x, timeFraction) {
	return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction);
}

// преобразователь в easeOut
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	};
}

//easeInOut
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < 0.5) {
			return timing(2 * timeFraction) / 2;
		} else {
			return (2 - timing(2 * (1 - timeFraction))) / 2;
		}
	};
}