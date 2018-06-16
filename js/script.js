if (document.querySelector('.sandwich-right-bar .nav-toggle')) {
	sandwichButton = document.querySelector('.sandwich-right-bar .nav-toggle');
	sandFullMenu = document.querySelector('.sandwich-right-bar .right-menu');
	sandFullMenu.style.top=parseInt(document.querySelector('.header').offsetHeight) + 'px';
	sandwichButton.onclick = function() {
		if(sandwichButton.classList.contains('active')){
			sandwichButton.classList.remove('active');
			sandFullMenu.classList.remove('active')
		}else{
			sandwichButton.classList.add('active');
			sandFullMenu.classList.add('active');
		}
	}
}