var backdrop = document.querySelector(".backdrop");
var planButtons = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative")
var sideNavButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

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
    mobileNav.classList.add("open");
    closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
    //backdrop.style.display = "none";
    //modal.style.display = "none";
    modal.classList.remove("open");
    backdrop.classList.remove("open");
}

sideNavButton.addEventListener("click", function() {
    //mobileNav.style.display = "block";
    //backdrop.style.display = "block";
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
});