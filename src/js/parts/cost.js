function cost() {
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
}

module.exports = cost;