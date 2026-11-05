const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completeCount = document.querySelector("#complete-count")
const cancelBtn = document.querySelector("#cancel-btn")



let todos = JSON.parse(localStorage.getItem("todos")) || [];

editTodoId = null;

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoValue = todoInput.value.trim();

    if (!todoValue) {
        return
    }


    if (editTodoId) {
        todos = todos.map((todo) => {

            if (todo.id === Number(editTodoId)) {

                return {
                    ...todo,
                    text: todoValue
                }

            }

            return todo;

        })
        localStorage.setItem("todos", JSON.stringify(todos))


    } else {


        let newTodo = {

            id: Date.now(),
            text: todoValue,
            isCompleted: false

        }

        todos.push(newTodo);
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    cancelEdit();
    renderTodo();
})





function renderTodo() {
    todoList.innerHTML = "";

    todos.forEach((todo) => {

        const li = document.createElement("li")

        li.className = "border border-slate-200 p-4 flex gap-2 rounded-xl"

        li.dataset.id = todo.id

        li.innerHTML = `   
                    <input data-action="toggle" ${todo.isCompleted ? "checked" : ""} type="checkbox">

                    <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400" : ""}">${todo.text}</p>

                   <div class="flex gap-2">

                    <button data-action="edit" class="px-2.5 py-1 text-xs font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 rounded transition-colors cursor-pointer" >Edit</button>
                    
                        <button data-action="delete" class="px-2.5 py-1 text-xs font-medium text-rose-600 bg-rose-50 hover:bg-rose-100 rounded transition-colors cursor-pointer" >Delete</button>

                   </div> 
                `

        todoList.append(li)


    })
    taskCount.textContent = `TASKS(${todos.length})`
    completeCount.textContent = `COMPLETED: ${todos.filter((todo) => todo.isCompleted).length}`
}

renderTodo();


todoList.addEventListener("click", (e) => {
    e.stopPropagation();

    const li = e.target.closest('li');
    const id = li.dataset.id;
    let action = e.target.dataset.action;

    if (action === "delete") {
        deleteTodo(id);
    }


    if (action === "edit") {
        startEdit(id)
    }

    if (action === "toggle") {
        todos = todos.map((todo) => {
            if (todo.id === Number(id)) {
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo
        })

        localStorage.setItem("todos", JSON.stringify(todos))
        renderTodo();
    }



})

function deleteTodo(id) {
    todos = todos.filter((todo) => {
        if (todo.id !== Number(id)) {
            return todo
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))

    renderTodo()
}


function startEdit(id) {
    editTodoId = id;

    let currentTodo = todos.find((todo) => {
        if (todo.id === Number(id)) {
            return todo
        }
    })

    todoInput.value = currentTodo.text
    formBtn.textContent = "Update"
    formBtn.className =
        "px-5 py-2 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.remove("hidden");
}



function cancelEdit() {
    editTodoId = null;
    todoInput.value = "";
    formBtn.textContent = "Add";

    formBtn.className =
        "px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors cursor-pointer";

    cancelBtn.classList.add("hidden");

}

cancelBtn.addEventListener("click", (e) => {
    cancelEdit();
});