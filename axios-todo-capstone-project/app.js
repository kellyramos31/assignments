//Axios GET request for Current To Do List
getToDos();

//Axios POST request (ADDS new TODO to database)
const todoForm = document.todoForm

todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const newtodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        completed: false
    }

    const addToDo = document.createElement("div");
    const addDescrip = document.createElement("li");
    const addImage = document.createElement("img");
    const addCheckBox = document.createElement("input");      //CHECKBOX to mark as complete or incomplete & checking it should update the database
    const deleteButton = document.createElement("button");      //DELETE BUTTON
    addImage.src = "./assets/sydney-rae-geM5lzDj4Iw-unsplash.jpg";
    addCheckBox.setAttribute("type", "checkbox");
    addToDo.textContent = todoForm.title.value;
    addDescrip.textContent = todoForm.description.value;
    addImage.textContent = todoForm.imgUrl.value;
    addImage.height = 100;
    addImage.width = 100;
    deleteButton.textContent = "Delete To Do";
    const newForList = document.getElementById("list");
    newForList.appendChild(addToDo);
    newForList.appendChild(addDescrip);
    newForList.appendChild(addImage);
    newForList.appendChild(addCheckBox)
    newForList.appendChild(deleteButton)

    deleteButton.addEventListener("click", e => {
        axios.delete(`https://api.vschool.io/kellyr/todo/${newtodo._id}`)
            .then(response => {
                console.log(response.data)

            })
            .catch(error => console.log(error))
    })

    axios.post("https://api.vschool.io/kellyr/todo", newtodo)         //Axios POST request (ADDS new TODO to database)
        .then(response => {
            console.log(response.data)
            clearData();                                         //Function to clear out web page data w/o refresh
            getToDos();
        })
        .catch(error => console.log(error))

})

//GET TODOS FROM DATABASE & ADD TO DOM
function getToDos() {
    axios.get("https://api.vschool.io/kellyr/todo")
        .then(response => {
            console.log(response.data)                                        //function to read/GET the todos list
            for (let i = 0; i < response.data.length; i++) {
                const subject = document.createElement("div");
                subject.textContent = response.data[i].title;
                const detail = document.createElement("li")
                detail.textContent = response.data[i].description;
                const imageInfo = document.createElement("img")
                imageInfo.src = response.data[i].imgUrl;
                imageInfo.height = 95;
                imageInfo.width = 95;
                if (response.data[i].completed === true) {
                    subject.style.textDecoration = "line-through";
                    detail.style.textDecoration = "line-through";
                }
                const checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                const deleteButton = document.createElement("button");      //DELETE BUTTON
                deleteButton.textContent = "Delete To Do";
                const getList = document.getElementById("list");
                getList.appendChild(subject)
                getList.appendChild(detail)
                getList.appendChild(imageInfo)
                getList.appendChild(checkBox)
                getList.appendChild(deleteButton)
                //console.log(response.data)
                deleteButton.addEventListener("click", e => {
                    axios.delete(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`)
                        .then(response => {
                            console.log(response.data)
                            clearData();                                               //Function to clear out web page data w/o refresh
                            getToDos();
                        })
                        .catch(error => console.log(error))
                })
            }
        })
        .catch(error => console.log(error))

}


//CLEAR database info from DOM
function clearData() {
    const el = document.getElementById("list");
    while (el.firstChild) {
        el.removeChild(el.firstChild)
    }
}


/*
function createTodo() {
}

function updateTodo() {               //function to update/PUT a todo that's on the DOM

}


/*
//EDIT/UPDATE TODO WITH NEW INFO -- CREATE EDIT BUTTON
const updateToDo = {
    title:
    description:
    imageUrl:
    completed:
}

axios.put(`https://api.vschool.io/kellyr/todo/${updateToDo._id}`, updateToDo)    //Axios UPDATE request (UPDATES a TODO in database)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
*/


/*
axios.get("https://api.vschool.io/kellyr/todo")
    .then(response => {
        getToDos();
        deleteButton.addEventListener("click", e => {
            axios.delete(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`)
                .then(response => {
                    console.log(response.data)
                    clearData();                                               //Function to clear out web page data w/o refresh
                    getToDos();
                })
                .catch(error => console.log(error))
        })

    })
    .catch(error => console.log(error))
*/

