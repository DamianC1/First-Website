const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__items');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelector('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavItems.forEach((item) => {
		allNavItems.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
	handleNavItemsAnimation();
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		//animation-delay .3s;
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navBtn.addEventListener('click', handleNav);
