'use strict';
window.onload = function mainPreMain() {
	[].forEach.call(document.querySelectorAll('.logIN') , function(value) {
		let bg = document.querySelector('.pop-up-meny');
		value.onclick = function () {
			bg.style.display = 'block';
			document.querySelector('.pop-up__bg').onclick = function () {
				bg.style.display = 'none';
			};
		};
	});
	document.querySelector('.sidebar__hide-list').onclick = function() {
		let firstClick = true;
		let nav = document.querySelector('.nav');
		return function() {
			if (firstClick) {
				let sidebar = document.querySelector('.sidebar__tops');
				sidebar.appendChild(nav);
				firstClick = false;
			}
			if(nav.style.display === 'flex')
				nav.style.display = 'none';
			else
				nav.style.display = 'flex';
		}
	}();
};