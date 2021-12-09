// Due pulsanti diversi, quindi due click diversi 

const openButtonHTML = document.querySelector('.fa-bars');

const closeButtonHTML = document.querySelector('.fa-times');

const menuHTML = document.querySelector('.hamburger-menu');

openButtonHTML.addEventListener("click", function() {
    menuHTML.style.display = "block";
});

closeButtonHTML.addEventListener("click", function() {
    menuHTML.style.display = "none";
});
