/*
//DONE -- PART 1 -- BE ABLE TO ADD NEW ITEMS TO LIST - A user will be able to add list items to the pre-built ul using the pre-built form
//New list items should have the same format as the li's that came with the git repo

//DONE -- PART 2 -- A user will be able to delete items using an items delete button
/*
DONE -- 1st EXTRA CREDIT:
A user will be able to click the "edit" button and see an input box appear
When the user clicks the "edit" button, a "save" button replace the "edit" button
The input box will automatically have the value of the list item
The user can edit and "save" the input box's value
On save, the input box will disappear, and the new value will appear
*/

/*NOTE:  ADDED CODE FOR THIS, but not sure if correct 2nd EXTRA CREDIT:
Use localStorage or sessionStorage to save the list in case the page is refreshed.*/

/*
const myForm = document.addItem;

myForm.addEventListener("submit", e => {
    e.preventDefault();
    var newInput = myForm.title.value                   //grab user input
    //console.log(newInput)                             //check what returns here--seems OK
    var listItem = document.createElement("li");          //create new li element
    var newDiv = document.createElement("div");         //create new div -- this is where user input (name = "title") will go
    var shopList = document.getElementById("list")         //grab entire ul element
    newDiv.textContent = newInput;                      //place the new user input into the newDiv
    //console.log(newDiv.textContent)                   //check what returns here
    var editButton = document.createElement("button")       //create edit button element
    editButton.textContent = "edit";                        //add text content "edit" to button
    var deleteButton = document.createElement("button");     //create delete button element
    deleteButton.textContent = "X";                         //add text content "X" to button
    listItem.appendChild(newDiv);                        //append the new div to the li
    shopList.appendChild(listItem);                     //append li to ul
    listItem.appendChild(editButton)                      //append delete button to li element
    listItem.appendChild(deleteButton)                      //append delete button to li element
    myForm.title.value = "";                            //clear form after submit/return
    //console.log(shopList);

    editButton.addEventListener("click", e => {
        e.preventDefault();
        editButton.textContent = "save";                    //change "edit" text to "save"
        var editBox = document.createElement("input");      //have input box appear with list item in it
        editBox.type = "text";                              //give input box type of text
        listItem.appendChild(editBox);                      //append new input box to the list item.
        if (editBox.text !== "") {
            editBox.addEventListener("change", e => {
                e.preventDefault();
                editButton.textContent = "edit";            //change button text back to "edit"
                newDiv.textContent = editBox.value;         //user can edit and "save" input box's value
                editBox.remove();                           //remove input box for list item
            })
        }
    })

    deleteButton.addEventListener("click", e => {           //delete list item if X button is clicked
        listItem.remove();
    })

    localStorage.setItem("list", "shopList");
    localStorage.getItem("list");
    console.log(list.textContent);
})
*/
//ASSIGNMENT -- INSTRUCTIONS:
/*
SETUP:
Use the following repo to start your project. This code will help you understand any patterns you should use when
completing this assignment.

Follow the instructions in the README.

The three items already there are to show how the rest should be structured, but should be removed or commented out
before moving on to part 2.

PARTS:
Each part is it's own task. It would be beneficial to have someone look at your code before moving from one part to the
next.

PART 1:
A user will be able to add list items to the pre-built ul using the pre-built form
New list items should have the same format as the li's that came with the git repo

PART 2:
Part 2--A user will be able to delete items using an items delete button


EXTRA CREDIT:
A user will be able to click the "edit" button and see an input box appear
When the user clicks the "edit" button, a "save" button replace the "edit" button
The input box will automatically have the value of the list item
The user can edit and "save" the input box's value
On save, the input box will disappear, and the new value will appear
Passing criteria: Demo to an instructor

An instructor or TA will sit with you for a demonstration of this project. They will be assessing your proficiency in
the following areas:

Difference between web app and web site
Build very basic web apps (site is functional and based on user interaction)
Understand JSON
Passing off this project completes the Web Applications, Level 1 branch of the skills tree.

EXTRA CREDIT:
Use localStorage or sessionStorage to save the list in case the page is refreshed.
*/

/*
const list = document.getElementById("list")
const items = form.title.value
// console.log(form.title.value)
const myList = document.createElement("li")
list.append(myList)
const div = document.createElement("div")
div.textContent = items
list.prepend(div)
const editButton = document.createElement("button")
editButton.textContent = "edit"
div.append(editButton)
const xButton = document.createElement("button")
xButton.textContent = "X"
div.append(xButton)
xButton.addEventListener("click", function () {
    list.remove(items)
})
*/
/* SHIRLEY'S CODE:
(NOTE:  also worked by changing list.prepend(div) to myList.prepend(div) and then changing the
xButton eventlistener code to list.removeChild(myList))


const form = document.addItem
form.addEventListener("submit", function (e) {
    e.preventDefault()
    const list = document.getElementById("list")
    const items = form.title.value
    // console.log(form.title.value)
    const myList = document.createElement("li")
    list.append(myList)
    const div = document.createElement("div")
    div.textContent = items
    myList.prepend(div)
    const editButton = document.createElement("button")
    editButton.textContent = "edit"
    div.append(editButton)
    const xButton = document.createElement("button")
    xButton.textContent = "X"
    div.append(xButton)
    xButton.addEventListener("click", function () {
        list.removeChild(myList);                                                        //list.removeChild(myList) //myList.items.removeChild()
    })
})
*/
