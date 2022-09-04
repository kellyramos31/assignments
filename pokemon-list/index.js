const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon/", true);

xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data.objects[0].pokemon);
    showOnPage(data.objects[0].pokemon);
  }
};

//function to show all Pokemon names on web page
function showOnPage(arr) {
  for (let i = 0; i < arr.length; i++) {
    const h3 = document.createElement("h3");
    h3.textContent = arr[i].name;
    document.body.appendChild(h3);
  }
}

//TRY function to show all Pokemon names on web page, but using .map() instead

/*
//EXTRA CREDIT --
//???function to show all Pokemon resource_uri info on web page -- not sure what other details are really here?????...
function showOnPage(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h3 = document.createElement('h3');
        h3.textContent = arr[i].resource_uri;
        document.body.appendChild(h3);
    }
}
*/

//BELOW--get it to run in node (note: added npm package for xhr2 to enable)
// const XMLHttpRequest = require("xhr2");

// var xhr = new XMLHttpRequest();
// // method  // url                     // async?
// xhr.open("GET", "https://swapi.dev/api/people/1/", true);
// xhr.send();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const JSONdata = xhr.responseText;
//     const data = JSON.parse(JSONdata);
//     console.log(data);
//   }
// };
