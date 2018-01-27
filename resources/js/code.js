'use strict';
window.onload = function mainPreMain() {
	[].forEach.call(document.querySelectorAll('.logIN') , (value) => {
		let bg = document.querySelector('.pop-up-meny');
		value.onclick = () => {
			bg.style.display = 'block';
			document.querySelector('.pop-up__bg').onclick = () => {
				bg.style.display = 'none';
			};
		};
	});
	document.querySelector('.sidebar__hide-list').onclick = function() {
		let nav = document.querySelector('.nav2');
		return function() {
			if(nav.style.display === 'flex')
				nav.style.display = 'none';
			else
				nav.style.display = 'flex';
		};
	}();
};