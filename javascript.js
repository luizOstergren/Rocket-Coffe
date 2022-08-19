let menu = document.querySelector(".toggle");
let header = document.querySelector(".header-mobile");
let show = document.querySelector(".menu-open");

menu.onclick = function () {
    header.classList.toggle("open");
    show.classList.toggle("open");
    console.log("click")
}