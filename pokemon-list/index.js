
const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true);

xhr.send()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText;
        const data = JSON.parse;
        console.log(data)
    }


}