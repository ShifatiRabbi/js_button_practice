var clickHandler = document.querySelector(".click");
var paragraphHandler = document.querySelector("p");

clickHandler.addEventListener('click', () => {
    paragraphHandler.innerHTML = "The button is clicked"
});
setInterval(function () {
    paragraphHandler.innerHTML = ""
}, 3000);


