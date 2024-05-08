//----------------------Menu-item---------------
const header = document.querySelector("header")
window.addEventListener("scroll", function () {
    x = window.pageYOffset
    if (x > 0) {
        header.classList.add("sticky")
    }
    else {
        header.classList.remove("sticky")
    }
})

//-------------------------Menu-Slider-Bar------------------------
const itemsliderbar = document.querySelectorAll(".category-left-li")
itemsliderbar.forEach(function (menu, index) {
    menu.addEventListener("click", function () {
        menu.classList.toggle("block")
    })
})