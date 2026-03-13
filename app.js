
// UI Elements
const menu = document.querySelector('.menu'),
    toggleOpen = document.querySelector('.toggle_button_menu'),
    toggleClose = document.querySelector('.toggle_button_close');

// click Event
toggleOpen.addEventListener('click', ToggleMenue);

// Open menu function
function ToggleMenue() {
    menu.classList.add("show-menu");
}

toggleClose.addEventListener('click', Toggle);

// Close menu function
function Toggle() {
    menu.classList.remove("show-menu");
}