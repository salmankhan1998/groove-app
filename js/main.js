
var myNavbar = document.getElementById("myTopNav");
var hamburger = document.getElementById("burger-icon");
var closeBtn = document.getElementById("close-btn");

hamburger.addEventListener('click', ()=> {

    myNavbar.classList.toggle("show");
    myNavbar.classList.toggle("close");
    closeBtn.classList.toggle("show");
    // closeBtn.classList.toggle("close");
});

closeBtn.addEventListener('click', ()=> {
    myNavbar.classList.toggle("show");
    myNavbar.classList.toggle("close");
    closeBtn.classList.toggle("show");
});