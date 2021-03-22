
const todoForm = document.todoForm

todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const newtodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        imgUrl: todoForm.imgUrl.value
    }

    axios.post("https://api.vschool.io/kellyr/todo", newtodo)         //Axios POST request (ADDS new TODO to database)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))

})




//Axios GET request
/*
axios.get("https://api.vschool.io/kellyr/todo")
    .then(response => console.log(response.data))
    */


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
