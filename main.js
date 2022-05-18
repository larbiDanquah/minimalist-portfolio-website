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

// Form Logic
const submitButton = document.getElementById('send');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get the form data
    let nameValue = nameField.value;
    let emailValue = emailField.value;
    let messageValue = messageField.value;

    // Name field
    if (!nameValue) {
        // If the name field is empty, enable the error
        nameField.classList.add('error');
        document.querySelector('.nameError').style.display = "block";
    } else {
        nameField.classList.remove('error');
        document.querySelector('.nameError').style.display = "none";
    }

    // Email field
    if (!emailValue) {
        // If the name field is empty, enable the error
        emailField.classList.add('error');
        document.querySelector('.emailValidation').style.display = "none";
        document.querySelector('.emailError').style.display = "block";
    } else if (!emailValue.toLowerCase().match(emailRegex)) {
        emailField.classList.add('error');
        document.querySelector('.emailError').style.display = "none";
        document.querySelector('.emailValidation').style.display = "block";
    } else {
        emailField.classList.remove('error');
        document.querySelector('.emailError').style.display = "none";
    }

    // Message Field
    if (!messageValue) {
        // If the name field is empty, enable the error
        messageField.classList.add('error');
        document.querySelector('.messageError').style.display = "block";
    } else {
        messageField.classList.remove('error');
        document.querySelector('.messageError').style.display = "none";
    }
});