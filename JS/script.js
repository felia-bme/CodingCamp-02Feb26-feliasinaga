// Temporary storage for todos items
let todos = [];

//Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('todo-date');

    // Simple validation to check if inputs are filled (both of them)
    if (todoInput.value.trim() === '' || todoDate.value === '') {
        alert('Please enter both a todo item and due date.')
    } else {
        // Create a new todo object
        const newTodo = {
            todo: todoInput.value.trim(),
            date: todoDate.value,
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

function filterByMonth(month) {
  if (month === "all") {
    renderTodos(todos);
    return;
  }

  const filtered = todos.filter(item => {
    const itemMonth = new Date(item.date).getMonth();
    return itemMonth === Number(month);
  });

  renderTodos(filtered);
}

function renderTodos(list = todos) {
  const todolist = document.getElementById('todo-list');
  todolist.innerHTML = '';

  if (list.length === 0) {
    todolist.innerHTML = "No task found";
    return;
  }

  list.forEach((item, _) => {
        todolist.innerHTML +=
        `<li class="text-gray-300">
            <p class="text-left text-gray-300 font-semibold">${item.todo} <span class="float-right text-sm text-gray-400"> ${item.date} </span></p>
        </li>`;
    });
}


//Function to delete all todo items
function deleteAllTodos() {
    todos = [];
    renderTodos();
}


