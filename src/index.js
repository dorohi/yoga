window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	let tabs = require('./js/parts/tabs.js'),
		timer = require('./js/parts/timer.js'),
		scroll = require('./js/parts/scroll.js'),
		modal = require('./js/parts/modal.js'),
		maska = require('./js/parts/maska.js'),
		form = require('./js/parts/form.js'),
		slider = require('./js/parts/slider.js'),
		cost = require('./js/parts/cost.js'),
		anime = require('./js/parts/anime.js');

	tabs();
	timer();
	scroll();
	modal();
	maska();
	form();
	slider();
	cost();
	anime();
});