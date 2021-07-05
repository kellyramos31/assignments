var form = document.getElementById("airline-form");   //fixed typo here (arline-form changed to airline-form) & fixed typo (getElementByID changed to getElementById)
const submit = document.getElementById("submit");         //fixed typo (getElementByID changed to getElementById) & put submit in quotes ("submit")
//var query = document.querySelector;                   //commented this out b/c don't think need it for anything.

function formAlert() {                                 //changed first curly braces to ()   
    var firstName = form.elements["first-name"].value;  //changed "firstName" to "first-name"
    var lastName = form.elements["last-name"].value;    //changed "lastName" to "last-name"
    var age = form.elements["age"].value;
    var gender = form.elements["gender"].value;
    var location = form.elements["travel-location"].value;
    var diet = [];                                   //changed curly braces to []
    if (form.elements['vegan'].checked) {
        diet.push(document.getElementById("vegan").value);   //changed diet.pop to diet.push  and took out "var" at beginning
    }
    if (form.elements['gluten'].checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.elements['paleo'].checked) {
        diet.push(document.getElementById('paleo').value);
    }
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}

submit.addEventListener("click", e => {
    formAlert();
})

//moved event listener out of function formAlert(); changed formalert in parentheses to e =>; 
//and moved parentheses to end of handler; called function formAlert() inside event handler curly braces

