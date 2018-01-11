'use strict';
window.onload = function mainPreMain() {
	document.querySelector('.sidebar__hide-list').onclick = function() {
		let firstClick = true;
		return function() {
			let nav = document.querySelector('.nav');
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