function tabs(){
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
}

module.exports = tabs;