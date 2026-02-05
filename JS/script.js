// Temporary storage for todos items
let todos = [];

//Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    // Simple validation to check if inputs are filled (both of them)
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both a todo item and a date.')
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value
        };
        //Add the new todo to the todos array
        todos.push(newTodo);

        //Clear input fields after adding
        todoInput.value = '';
        todoDate.value = '';

        //Render the updated todo list
        renderTodos();
    }
}

///Function to render todos items on the DOM
function renderTodos() {
    const todolist = document.getElementById('todo-list');

    //Clear existing list
    todolist.innerHTML = '';

    //Render each todo item item
    todos.forEach((item, _) => {
        todolist.innerHTML +=
        `<li>
            <p class="text-2xl">${item.todo} <span class="text-sm text-gray-500"> ${item.date} </span></p>
            <hr />
        </li>`;
    });
}


//Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}


//Function to filter todo items (to be implemented)
function markAsCompleted() {
    //To be implemented
}