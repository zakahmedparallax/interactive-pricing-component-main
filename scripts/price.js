var value = document.getElementById("value");
var input = document.getElementById("mainSlider").value;

value.textContent = input.value;
input.addEventListener("input", (event) => {
    value.textContent = event.target;
});