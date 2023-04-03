let menuBtn = document.querySelector('.burger-btn')
let menu = document.querySelector('.mobile-menu')
menuBtn.addEventListener('click', function() {
	menuBtn.classList.toggle('active')
	menu.classList.toggle('active')
})

//фикс бага бургер меню при большой ширине
window.addEventListener('resize', () => {
	if (window.innerWidth > 1024 && menu.classList.contains('active')) {
		menuBtn.classList.remove('active')
		menu.classList.remove('active')
	}
})

window.addEventListener('scroll', () => {
	menuBtn.classList.remove('active')
	menu.classList.remove('active')
})