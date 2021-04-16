const square = document.getElementById("square-box");

square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "blue";
})

square.addEventListener("mousedown", function () {
    square.style.backgroundColor = "red";
})

square.addEventListener("mouseup", function () {
    square.style.backgroundColor = "yellow";
})

square.addEventListener("dblclick", function () {
    square.style.backgroundColor = "green";
})

window.addEventListener("scroll", function () {
    square.style.backgroundColor = "orange";
})

window.addEventListener("keydown", (event) => {
    if (event.key == "b") {
        square.style.backgroundColor = "blue";
    } else if (event.key == "r") {
        square.style.backgroundColor = "red";
    } else if (event.key == "y") {
        square.style.backgroundColor = "yellow";
    } else if (event.key == "g") {
        square.style.backgroundColor = "green";
    } else if (event.key == "o") {
        square.style.backgroundColor = "orange";
    }
})

