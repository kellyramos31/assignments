//Axios GET request for Current To Do List

axios.get("https://api.vschool.io/kellyr/todo")
    .then(response => {
        for (let i = 0; i < response.data.length; i++) {
            const subject = document.createElement("div");
            const detail = document.createElement("li")
            const imageInfo = document.createElement("img")
            subject.textContent = response.data[i].title;
            detail.textContent = response.data[i].description;
            imageInfo.src = response.data[i].imgUrl;
            imageInfo.height = 100;
            imageInfo.width = 100;
            const getList = document.getElementById("list");
            getList.appendChild(subject)
            getList.appendChild(detail)
            detail.appendChild(imageInfo)
        }
    })
    .catch(error => console.log(error))


//const getMyList = response.data.map(arr => {



//Axios POST request (ADDS new TODO to database)
const todoForm = document.todoForm

todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const newtodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    const addToDo = document.createElement("div");
    const addDescrip = document.createElement("li");
    const addImage = document.createElement("img");
    addImage.src = "./assets/sydney-rae-geM5lzDj4Iw-unsplash.jpg";
    addToDo.textContent = todoForm.title.value;
    addDescrip.textContent = todoForm.description.value;
    addImage.textContent = todoForm.imgUrl.value;
    addImage.height = 100;
    addImage.width = 100;
    const newForList = document.getElementById("list");
    newForList.appendChild(addToDo);
    newForList.appendChild(addDescrip);
    newForList.appendChild(addImage);

    axios.post("https://api.vschool.io/kellyr/todo", newtodo)         //Axios POST request (ADDS new TODO to database)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})






//function to create/POST a new todo and add it to the DOM
/*
function createTodo() {
}

function getTodos() {              //function to read/GET a todo and add it to the DOM

}

function updateTodo() {               //function to update/PUT a todo that's on the DOM

}


function deleteTodo() {               //function to destroy/DELETE a todo from the DOM

}
*/
