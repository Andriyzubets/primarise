window.onload = function() {
    scroll();
}
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
function scroll() {
    document.querySelector('.header .emp').style.height=parseInt(document.querySelector('.header .main-wrap').offsetHeight)+'px';
    scroll = document.body.scrollTop;
    window.addEventListener('scroll', function() {
        scroll = window.pageYOffset || document.documentElement.scroll;

        scr = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.header .main-wrap').classList.add('fixed') : document.querySelector('.header .main-wrap').classList.remove('fixed');
        scrt = scroll > parseInt(document.querySelector('.header .header-contact').offsetHeight) ? document.querySelector('.sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.main-wrap').offsetHeight) + 'px' : document.querySelector('.sandwich-right-bar .right-menu').style.top=parseInt(document.querySelector('.header').offsetHeight) + 'px';
    });
}
if(document.querySelector('.main .wrap .left .slider')) {
	person = document.querySelectorAll('.main .wrap .left .slider .item');
    slideWrapper = document.querySelector('.main .wrap .left .slider .wrapper');
    windowWidth = document.documentElement.clientWidth;
    step = Math.round(slideWrapper.offsetWidth / person.length);
    rightBut = document.querySelector('.main .wrap .left .slider .right');
    leftBut = document.querySelector('.main .wrap .left .slider .left');
    rightBut.onclick = function(){
        if(parseInt(slideWrapper.style.left) + parseInt(slideWrapper.offsetWidth) < windowWidth) {
            slideWrapper.style.left = '0px';

        }
        else {
            slideWrapper.style.left = parseInt(slideWrapper.style.left) -step + 'px';

        }
    }
    leftBut.onclick = function(){
        if(parseInt(slideWrapper.style.left) == 0) {
            slideWrapper.style.left = - Math.ceil((parseInt(slideWrapper.offsetWidth) - parseInt(windowWidth))/step) * step + 'px';
        }
        else {
            slideWrapper.style.left = parseInt(slideWrapper.style.left) + step + 'px';
        }
    }
    document.querySelector('.main .wrap .left .slider').style.minHeight=parseInt(slideWrapper.offsetHeight) + 10 + 'px';
}