const page = document.querySelector('body');
const radioAndButtons = document.querySelectorAll('.header__item');
const selects = document.querySelector('.header__selects');

const updateControls = (theme) => {
	selects.value = theme;

	if (selects.value == 'light-theme') {
		radioAndButtons[0].checked = true;
	} else if (selects.value == 'dark-theme') {
		radioAndButtons[1].checked = true;
	} else {
		radioAndButtons[2].checked = true;
	}
}

const selectTheme = (theme) => {
	page.setAttribute('class', '');
	page.classList.add(theme);
	updateControls(theme);
}

radioAndButtons.forEach((el) => {
	el.addEventListener('click', (e) => {
		const theme = e.target.dataset.theme;
		selectTheme(theme);
	})
})

selects.addEventListener('change', (e) => {
	const target = e.target;
	const theme = target[target.selectedIndex].value;
	selectTheme(theme);
})