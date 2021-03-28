
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon/", true);

xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse(JSONdata);
        console.log(data.objects[0].pokemon)
        showOnPage(data.objects[0].pokemon)
    }
}

//function to show all Pokemon names on web page
function showOnPage(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h3 = document.createElement('h3');
        h3.textContent = arr[i].name;
        document.body.appendChild(h3);
    }
}

//function to show all Pokemon names on web page, but using .map() instead




/*
//function to show all Pokemon resource_uri info on web page -- not sure what other details are really here...
function showOnPage(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h3 = document.createElement('h3');
        h3.textContent = arr[i].resource_uri;
        document.body.appendChild(h3);
    }
}
*/