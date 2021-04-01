//GLOBAL DATA VARIABLE
let todos
let editId

//Axios POST request (ADDS new TODO to database)
const todoForm = document.todoForm
const editForm = document.editForm


//GET TODO's AXIOS request from DATABASE:

function getAllToDos() {
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
        editButton.addEventListener("click", () => {
            const getFormDiv = document.getElementById("change-form")
            getFormDiv.style.display = "block"
            console.log(todos[i].title)
            editForm.editTitle.value = todos[i].title;
            editForm.editDescrip.value = todos[i].description;
            editForm.editUrl.value = todos[i].imgUrl;
            getList.prepend(editForm)
            window.scrollTo(0, 0)
            //console.log(todos[i]._id)
            editId = todos[i]._id
            //console.log(editId)
            return editId
        })

        const deleteButton = document.createElement("button");      //CREATE DELETE BUTTON
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-this-button")
        deleteButton.addEventListener("click", () => {
            let deleteId = todos[i]._id;
            //console.log(deleteId)
            deleteToDo(deleteId)
        })

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


//DELETE A TO DO
function deleteToDo(deleteId) {
    axios.delete(`https://api.vschool.io/kellyr/todo/${deleteId}`)
        .then(response => {
            console.log(response.data)
            clearData();                                                  //Function to clear out web page data w/o refresh
            getAllToDos();
        })
        .catch(error => console.log(error))
}

/*
//DELETE BUTTON EVENT LISTENER  -- have not been able to get this to work this way with the class/outside of for loop; ERROR:  "Uncaught TypeError: takeAway.addEventListener is not a function"
const takeAway = document.getElementsByClassName("delete-this-button")
takeAway.addEventListener("click", () => {
    for (let i = 0; i < todos.length; i++) {
        let deleteId = todos[i]._id
        console.log(deleteId)
        deleteToDo(deleteId)
    }
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


//EDIT FORM EVENT LISTENER

const editTheList = editForm.addEventListener("submit", e => {

    e.preventDefault()
    console.log(editId)

    const editToDo = {
        title: editForm.editTitle.value,
        description: editForm.editDescrip.value,
        imgUrl: editForm.editUrl.value,
        completed: false
    }

    axios.put(`https://api.vschool.io/kellyr/todo/${editId}`, editToDo)
        .then(response => {
            console.log(response.data)
            const getFormDiv = document.getElementById("change-form")
            getFormDiv.style.display = "none";            //Make form disappear
            editForm.editTitle.value = "";                //CLEAR out the edit form values
            editForm.editDescrip.value = "";
            editForm.editUrl.value = "";
            clearData();
            getAllToDos();
        })
        .catch(error => console.log(error))
})

//CLEAR DATA FROM WEB PAGE

function clearData() {
    const el = document.getElementById("list");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}