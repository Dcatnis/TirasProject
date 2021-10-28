let burgerBtn = document.getElementById("burgerbtn")
let burgerMenu = document.getElementById("burgermenu")
let chatBtn = document.getElementById("chatbtn")
let sideBtns = document.getElementById("sidebtns")
let closesidebtn = document.getElementById("closebtn")


burgerBtn.addEventListener("click", function () {
    burgerMenu.classList.toggle("active")
})

chatBtn.addEventListener("click", function () {
    sideBtns.classList.toggle("side-btns-active")
})
closesidebtn.addEventListener("click", function () {
    sideBtns.classList.remove("side-btns-active")
})