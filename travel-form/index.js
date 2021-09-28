/*You just started your own airline, and you need to create a form to collect data about your passengers' upcoming travel plans so they can book their flight.

You should collect the following information from the user:

First name(text input)
Last name(text input)
Age(number input)
Gender(radio buttons with 2 or more options)
Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
Whether they have any dietary restrictions(check boxes for vegetarian, kosher, lactose free, etc.Include at least 3 options)
Each element of the form should be given a name attribute so you can access the data in JavaScript and do stuff with it.

There should also be a button at the end of the form to submit it.Upon pressing the button, an alert should pop up that looks like this:
*/

//EVENT LISTENER FOR TRAVEL FORM

const travelForm = document.passengerForm;

travelForm.addEventListener("submit", e => {
    e.preventDefault();
    const first = travelForm.firstName.value;
    const last = travelForm.lastName.value;
    const age = travelForm.age.value;
    const gender = travelForm.gender.value;
    const destination = travelForm.destination.value;
    const dietaryRestrictionsArr = [];
    for (let i = 0; i < travelForm.diet.length; i++) {
        if (travelForm.diet[i].checked) {
            dietaryRestrictionsArr.push(travelForm.diet[i].value)
        }
    } console.log(dietaryRestrictionsArr)

    passenger = {
        first: first,
        last: last,
        age: age,
        gender: gender,
        destination: destination,
        diet: dietaryRestrictionsArr
    }

    alert(`First Name: ${passenger.first}` + `\nLast Name: ${passenger.last}` + `\nAge:  ${passenger.age}` + `\nGender:  ${passenger.gender}` + `\nDestination:  ${passenger.destination}` + `\nDietary Restrictions:  ${passenger.diet}`)
})




//re-do the radio & checkbox inputs with this format:
/*<label class="name-input">
Name:
<input />
</label >
*/