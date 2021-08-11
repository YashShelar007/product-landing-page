var backdrop = document.querySelector(".backdrop");
var planButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative")
var sideNavButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var hostButton = document.querySelector('.main-nav__item--cta')

for(let i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener("click",function() {
        //modal.style.display = "block";
        //backdrop.style.display = "block"; 
        modal.classList.add("open");
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function() {
    //mobileNav.style.display = "none";
    mobileNav.classList.remove("open");
    closeModal();
});

if(modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //backdrop.style.display = "none";
    //modal.style.display = "none";
    if (modalNoButton) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
}

sideNavButton.addEventListener("click", function() {
    //mobileNav.style.display = "block";
    //backdrop.style.display = "block";
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});

hostButton.addEventListener('animationstart', function(event) {
    console.log("Animation started", event);
});

hostButton.addEventListener('animationend', function(event) {
    console.log("animation ended", event);
});

hostButton.addEventListener('animationiteration', function(event) {
    console.log("animation iterating", event);
});