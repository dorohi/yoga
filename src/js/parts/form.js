function form() {
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
}

module.exports = form;