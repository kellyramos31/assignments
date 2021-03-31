//GLOBAL DATA VARIABLE


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

/*
//DELETE BUTTON EVENT LISTENER
const takeAway = document.getElementsByClassName("delete-this-button")
takeAway.addEventListener("click", e => {
    for (let i = 0; i < dataArr.length; i++) {

    }
})
*/

//GET TODOS FROM DATABASE & FORMAT/ADD TO DOM
const formatToDos = (todos) => {
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
//CHECKBOX EVENT LISTENER
checkBox.addEventListener("change", () => {  //monitor checkbox for change & then update full todo list so stays on refresh
    if (checkBox.checked === true) {
        subject.style.textDecoration = "line-through";
        detail.style.textDecoration = "line-through";
        const updateToDo = {
            completed: true
        }

        axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, updateToDo)      //Axios UPDATE request (UPDATES a TODO in database)
            .then(response => {
                console.log(response.data)
                clearData();                                               //Function to clear out web page data w/o refresh
                getToDos();
            })
            .catch(error => console.log(error))

    } else if (checkBox.checked === false) {
        subject.style.textDecoration = "none";
        detail.style.textDecoration = "none";
        const updateToDo = {
            completed: false
        }

        axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, updateToDo)       //Axios UPDATE request (UPDATES a TODO in database)
            .then(response => {
                clearData();                                               //Function to clear out web page data w/o refresh
                getToDos();
                console.log(response.data)

            })
            .catch(error => console.log(error))
    }
})
*/

/*
//EDIT BUTTON & EDIT FORM EVENT LISTENERS / UPDATE DATABASE
const getFormDiv = document.getElementById("change-form")
editButton.addEventListener("click", () => {
    getFormDiv.style.display = "block"
    editForm.editTitle.value = response.data[i].title;
    editForm.editDescrip.value = response.data[i].description;
    editForm.editUrl.value = response.data[i].imgUrl;
    getList.prepend(editForm)
    window.scrollTo(0, 0)
    const getEditButton = editForm.saveEditsButton
    getEditButton.addEventListener("click", e => {
        e.preventDefault();
        const editToDo = {
            title: editForm.editTitle.value,
            description: editForm.editDescrip.value,
            imgUrl: editForm.editUrl.value,
            completed: false
        }

        axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, editToDo)
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
    */

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



/*
//DELETE A TO DO
function deleteToDo() {
    axios.delete(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`)
        .then(response => {
            console.log(response.data)
            clearData();                                                  //Function to clear out web page data w/o refresh
            getToDos();
        })
        .catch(error => console.log(error))
}
*/


//CLEAR DATA FROM WEB PAGE
function clearData() {
    const el = document.getElementById("list");
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}