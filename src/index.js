window.addEventListener('DOMContentLoaded', () => {
	'use strict';
	let tabs = require('./parts/tabs.js'),
		timer = require('./parts/timer.js'),
		scroll = require('./parts/scroll.js'),
		modal = require('./parts/modal.js'),
		maska = require('./parts/maska.js'),
		form = require('./parts/form.js'),
		slider = require('./parts/slider.js'),
		cost = require('./parts/cost.js');

	tabs();
	timer();
	scroll();
	modal();
	maska();
	form();
	slider();
	cost();	
});