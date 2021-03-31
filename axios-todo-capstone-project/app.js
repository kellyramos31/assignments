//GLOBAL DATA VARIABLE
class Todos {
    constructor(title, description, imgUrl, completed, _id) {
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.completed = completed;
        this.id = _id;
    }



}





//Axios POST request (ADDS new TODO to database)
const todoForm = document.todoForm
const editForm = document.editForm


//Axios GET request for Current To Do List

//GET TODO's AXIOS request from DATABASE:

const getAllToDos = () => {
    axios.get("https://api.vschool.io/kellyr/todo")
        .then(response => {
            console.log(response.data)
            const todos = response.data
            console.log(`GET LIST`, todos)
            formatToDos(todos)
        })
        .catch(error => console.log(error))
}

//CALL/RETRIEVE LIST OF TODOS
getAllToDos();


//GET TODOS FROM DATABASE & FORMAT/ADD TO DOM
function formatToDos(todos) {
    for (let i = 0; i < todos.length; i++) {
        const listItem = document.createElement("li")
        const subject = document.createElement("div");
        subject.style.fontWeight = "bold";
        subject.style.textTransform = "uppercase";
        subject.classList.add("title-entries")
        subject.textContent = todos[i].title;
        const detail = document.createElement("div")
        detail.classList.add("detail-entries")
        detail.textContent = todos[i].description;
        const imageInfo = document.createElement("img")
        imageInfo.src = todos[i].imgUrl;
        imageInfo.height = 95;
        imageInfo.width = 95;
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkbox");
        if (todos[i].completed === true) {
            subject.style.textDecoration = "line-through";
            detail.style.textDecoration = "line-through";
            checkBox.checked = "true"
        }
        checkBox.addEventListener("change", e => {
            if (checkBox.checked === true) {
                subject.style.textDecoration = "line-through";
                detail.style.textDecoration = "line-through";
                checkBox.checked = "true"
                updateCheckTrue(todos[i]._id);
            } else if (checkBox.checked === false) {
                subject.style.textDecoration = "none";
                detail.style.textDecoration = "none";
                checkBox.checked = "false"
                updateCheckFalse(todos[i]._id);
            }
        })

        const editButton = document.createElement("button")         //CREATE EDIT BUTTON
        editButton.textContent = "Edit";
        editButton.classList.add("edit-this-button")
        const deleteButton = document.createElement("button");      //CREATE DELETE BUTTON
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-this-button")
        const getList = document.getElementById("list");             //"list" is the <UL>
        getList.appendChild(listItem)                                //listItem is the <LI>
        listItem.appendChild(checkBox)
        listItem.appendChild(imageInfo)
        listItem.appendChild(subject)
        listItem.appendChild(detail)
        listItem.appendChild(editButton)
        listItem.appendChild(deleteButton)
    }
}

/*
document.querySelectorAll('.some-class').forEach(item => {
    item.addEventListener('click', event => {
        //Write your code hear
    })
})
*/



//DELETE BUTTONS -- ADD EVENT LISTENER
//const takeAway = [];
const getDeleteButtons = document.getElementsByClassName("delete-this-button")   //this works to get all the buttons into an array
//takeAway.push(getDeleteButtons)

getDeleteButtons.addEventListener("click", () => {

    this.remove(todo)

    /*for (let i = 0; i < takeAway.length; i++) {
        let deleteIndex = i;
        const deleteId = todos[deleteIndex]._id;
        console.log(deleteId)
        deleteToDo(deleteId)
    }*/
})

/*
//DELETE A TO DO
function deleteToDo(id) {
    axios.delete(`https://api.vschool.io/kellyr/todo/${id}`)
        .then(response => {
            console.log(response.data)
            clearData();                                                  //Function to clear out web page data w/o refresh
            getAllToDos();
        })
        .catch(error => console.log(error))
}
*/

/*
//EDIT BUTTON & EDIT FORM EVENT LISTENERS / UPDATE DATABASE
const getFormDiv = document.getElementById("change-form")
const getAllEditButtons = document.getElementsByClassName(".edit-this-button");
getAllEditButtons.addEventListener("click", () => {
    getFormDiv.style.display = "block"
    editForm.editTitle.value = todos[i].title;
    editForm.editDescrip.value = todos[i].description;
    editForm.editUrl.value = todos[i].imgUrl;
    let editId = todos[i]._id
    getList.prepend(editForm)
    window.scrollTo(0, 0)
    const getEditButton = editForm.saveEditsButton
    getEditButton.addEventListener("submit", e => {
        e.preventDefault();
        const editToDo = {
            title: editForm.editTitle.value,
            description: editForm.editDescrip.value,
            imgUrl: editForm.editUrl.value,
            completed: false
        }

        axios.put(`https://api.vschool.io/kellyr/todo/${editId}`, editToDo)
            .then(response => {
                console.log(response.data)
                getFormDiv.style.display = "none";            //Make form disappear
                editForm.editTitle.value = "";                //CLEAR out the edit form values
                editForm.editDescrip.value = "";
                editForm.editUrl.value = "";
                clearData();
                getToDos();
                formatToDos(databaseArr);
            })
            .catch(error => console.log(error))

    })
})
*/

//UPDATE CHECKBOX STATUS TO TRUE
function updateCheckTrue(id) {
    const updateToDo = {
        completed: true
    }

    axios.put(`https://api.vschool.io/kellyr/todo/${id}`, updateToDo)      //Axios UPDATE request (UPDATES a TODO in database)
        .then(response => {
            console.log(response.data)
            clearData();                                               //Function to clear out web page data w/o refresh
            getAllToDos();
        })
        .catch(error => console.log(error))
}

//UPDATE CHECKBOX STATUS TO FALSE
function updateCheckFalse(id) {
    const updateToDo = {
        completed: false
    }

    axios.put(`https://api.vschool.io/kellyr/todo/${id}`, updateToDo)       //Axios UPDATE request (UPDATES a TODO in database)
        .then(response => {
            clearData();                                               //Function to clear out web page data w/o refresh
            getAllToDos();
            console.log(response.data)

        })
        .catch(error => console.log(error))
}


//EVENT LISTENER TO ADD NEW TO DO
const addToList = todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const newtodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/kellyr/todo", newtodo)         //Axios POST request (ADDS new TODO to database)
        .then(response => {
            const newtodosAll = response.data;
            console.log(`POST: new todo is added`, newtodosAll)
            todoForm.title.value = "";                              //Clear out Add form
            todoForm.description.value = "";
            todoForm.imgUrl.value = "";
            clearData();                                   //Function to clear out web page data w/o refresh
            getAllToDos();                                         //Get full to do list again
        })
        .catch(error => console.log(error))
}
)


//CLEAR DATA FROM WEB PAGE
function clearData() {
    const el = document.getElementById("list");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}


/*
class Player {
    constructor(name, totalCoins, status, hasStar, gameActive) {
        this.name = name;
        this.totalCoins = totalCoins;
        this.status = status;
        this.hasStar = hasStar;
        this.gameActive = gameActive;
    }

    setName() {
        this.name
        this.randomStatus()
    }

    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
            this.gameActive = true;
            return this.status
        } else if (this.status === "Big") {
            this.status = "Small";
            this.gameActive = true;
            return this.status
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false;
            clearInterval(intervalId);
            gameOver = true;
            return this.status;
        }
    }

    gotPowerUp() {
        if (this.status === "Powered Up") {
            this.hasStar = true;
            return this.hasStar;
        } else if (this.status === "Small") {
            this.status = "Big";
            return this.status;
        } else if (this.status === "Big") {
            this.status = "Powered Up";
            return this.status;
        }

    }

    addCoin() {
        this.totalCoins += 1;
        return this.totalCoins
    }

    randomStatus() {
        const statusNumber = Math.floor(Math.random() * 3)
        console.log(statusNumber)
        if (statusNumber === 0) {
            this.gotHit()
            this.print()
        } else if (statusNumber === 1) {
            this.gotPowerUp()
            this.print()
        } else if (statusNumber === 2) {
            this.addCoin()
            this.print()
        }
    }

    print() {
        console.log(`Name:  ${this.name}`)
        console.log(`Status: ${this.status}`)
        console.log(`Total Coins:  ${this.totalCoins}`)
        console.log(`Has Star:  ${this.hasStar}`)
    }

}

let gameOver = false;

const namePicked = whichName();

function whichName() {
    const nameNumber = (Math.floor(Math.random() * 2));
    //console.log(nameNumber)
    if (nameNumber === 0) {
        const name = new Player("Mario", 0, "Powered Up", false, true);
        name.setName()
        //console.log(name)
        return name

    } else if (nameNumber === 1) {
        const name = new Player("Luigi", 0, "Powered Up", false, true)
        name.setName()
        //console.log(name)
        return name
    }
}

//console.log(namePicked)

const intervalId = setInterval(() => namePicked.randomStatus(), 1000);
*/