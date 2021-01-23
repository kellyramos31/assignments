const colors = ["white", "red", "blue", "green"]

document.getElementById("add").addEventListener("click", function (e) {  //changed "onclick" to "click"
    e.preventDefault();
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown() {
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors.length; i++) {   //added .length to colors
        const option = document.createElement("option")  //added document. before createElement
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("change", function (e) {  //changed "onchange" to "change"
        e.preventDefault();
        e.target.parentNode.style.backgroundColor = e.target.value //Error: "uncaught type error; cannot set background color of undefined" changed .parent to .style
        //changing .parent to .style makes the dropdown turn color instead of the user input
        //changed to use both .parentNode and .style
    })
    return dropDown
}

function createSubItem(e) {
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue.value  //added .value to subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


