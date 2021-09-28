

document.getElementById("click-here").addEventListener("click", typedStuff)

function typedStuff() {
    var userTypedThis = document.getElementById("user-input");
    console.log(userTypedThis.value)
    var onPage = document.getElementById("para-this");
    onPage.textContent = userTypedThis.value;
}

