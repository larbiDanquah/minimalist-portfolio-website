const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', () => {
    // Hide the hamburger icon and show the close icon
    menu.style.display = "none";
    close.style.display = "block";

    // Show the menu
    navigation.style.display = "block";
});

close.addEventListener('click', () => {
    close.style.display = "none";
    menu.style.display = "block";

    // Hide the menu
    navigation.style.display = "none";
});

