//Axios GET request for Current To Do List
getToDos();

//Axios POST request (ADDS new TODO to database)
const todoForm = document.todoForm
todoForm.addEventListener("submit", e => {
    e.preventDefault();
    createToDo();
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
                const checkBox = document.createElement("input");
                checkBox.setAttribute("type", "checkbox");
                if (response.data[i].completed === true) {
                    subject.style.textDecoration = "line-through";
                    detail.style.textDecoration = "line-through";
                    checkBox.checked = "true"
                }
                const editButton = document.createElement("button")         //CREATE EDIT BUTTON
                editButton.textContent = "Edit";
                const deleteButton = document.createElement("button");      //CREATE DELETE BUTTON
                deleteButton.textContent = "Delete";
                const getList = document.getElementById("list");
                getList.appendChild(subject)
                getList.appendChild(detail)
                getList.appendChild(imageInfo)
                getList.appendChild(checkBox)
                getList.appendChild(editButton)
                getList.appendChild(deleteButton)

                checkBox.addEventListener("change", () => {  //monitor checkbox for change & then update full todo list so stays on refresh
                    if (checkBox.checked === true) {
                        subject.style.textDecoration = "line-through";
                        detail.style.textDecoration = "line-through";
                        //response.data[i].completed = true;
                        const updateToDo = {
                            completed: true
                        }

                        axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, updateToDo)    //Axios UPDATE request (UPDATES a TODO in database)
                            .then(response => {
                                console.log(response.data)
                                clearData();                                               //Function to clear out web page data w/o refresh
                                getToDos();
                                console.log(response.data)

                            })
                            .catch(error => console.log(error))


                    } else if (checkBox.checked === false) {
                        subject.style.textDecoration = "none";
                        detail.style.textDecoration = "none";
                        //response.data[i].completed = false;
                        const updateToDo = {
                            completed: false
                        }

                        axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, updateToDo)     //Axios UPDATE request (UPDATES a TODO in database)
                            .then(response => {
                                console.log(response.data)
                                clearData();                                               //Function to clear out web page data w/o refresh
                                getToDos();
                                console.log(response.data)

                            })
                            .catch(error => console.log(error))
                    }
                })


                //EDIT/UPDATE TODO WITH NEW INFO -- CREATE EDIT BUTTON

                editButton.addEventListener("click", e => {
                    e.preventDefault();
                    const makeChanges = document.editForm
                    makeChanges.editTitle.value = response.data[i].title;
                    makeChanges.editDescrip.value = response.data[i].description;
                    makeChanges.editUrl.value = response.data[i].imgUrl;
                    makeChanges.style.display = "block"
                    getList.prepend(makeChanges)
                    subject.style.display = "none"   //???HOW ACCESS JUST LAST LIST ITEM???
                    detail.style.display = "none"
                    imageInfo.style.display = "none"
                    editButton.textContent = "Save"

                    //SET CSS DISPLAY TO NONE FOR current LI ENTRY & FLIP WITH TABLE DISPLAY NONE (flip from none to display: block??)
                    //w3schools:  document.getElementById("myDIV").style.display = "none";

                    const editToDo = {
                        title: makeChanges.title.value,
                        description: makeChanges.description.value,
                        imgUrl: makeChanges.imgUrl.value,
                    }

                    axios.put(`https://api.vschool.io/kellyr/todo/${response.data[i]._id}`, editToDo)
                        .then(response => {
                            console.log(response.data)
                            clearData();
                            getToDos();
                        })
                        .catch(error => console.log(error))
                })


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


//ADD A NEW TO DO
function createToDo() {
    const newtodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value,
        completed: false
    }
    //FIGURE OUT BEST  HTML TAGS SO CAN MOVE THINGS WHERE WANT THEM IN GRID

    const addToDo = document.createElement("div");
    const addDescrip = document.createElement("li");
    const addImage = document.createElement("img");
    const addCheckBox = document.createElement("input");
    const editButton = document.createElement("button")         //EDIT BUTTON
    const deleteButton = document.createElement("button");      //DELETE BUTTON
    addImage.src = "./assets/sydney-rae-geM5lzDj4Iw-unsplash.jpg";
    addCheckBox.setAttribute("type", "checkbox");
    addToDo.textContent = todoForm.title.value;
    addDescrip.textContent = todoForm.description.value;
    addImage.textContent = todoForm.imgUrl.value;
    addImage.height = 100;
    addImage.width = 100;
    editButton.textContent = "Edit";
    deleteButton.textContent = "Delete";
    const newForList = document.getElementById("list");
    newForList.appendChild(addToDo);
    newForList.appendChild(addDescrip);
    newForList.appendChild(addImage);
    newForList.appendChild(addCheckBox)
    newForList.appendChild(editButton)
    newForList.appendChild(deleteButton)


    //EDIT/UPDATE TODO WITH NEW INFO -- CREATE EDIT BUTTON -- creates new form???
    /*editButton.addEventListener("click", () => {
        const makeChanges = document.editForm
        makeChanges.style.display = "block"
        newForList.style.display = "none"
        editButton.textContent = "Save"
        makeChanges.editTitle.textContent = response.data[i].title;
        makeChanges.editDescrip.textContent = response.data[i].description;
        makeChanges.editUrl.textContent = response.data[i].imgUrl;

        //SET CSS DISPLAY TO NONE FOR current LI ENTRY & FLIP WITH TABLE DISPLAY NONE (flip from none to display: block??)
        //w3schools:  document.getElementById("myDIV").style.display = "none";

        const editToDo = {
            title: todoForm.title.value,
            description: todoForm.description.value,
            imgUrl: todoForm.imgUrl.value,
        }

        axios.put(`https://api.vschool.io/kellyr/todo/${editToDo._id}`, editToDo)
            .then(response => {
                console.log(response.data)
                clearData();
                getToDos();
            })
            .catch(error => console.log(error))
    })
*/

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
            getToDos();                                          //Get full to do list again
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




//checkbox listener info => https://stackoverflow.com/questions/14544104/checkbox-check-event-listener

