const saveAllButton = document.getElementById('saveAll');
const clearAllButton = document.getElementById('clearAll');

saveAllButton.addEventListener('click', saveAll)

function saveAll() {
    localStorage.setItem('todoText', todoText.innerHTML);
}

clearAllButton.addEventListener('click', deleteAll)

function deleteAll() {
    todoText.innerHTML = "";
    localStorage.removeItem('todoText', todoText.innerHTML);
}

let inputText = document.getElementById('inputText');
let addTask = document.getElementById('addTask');
let todoText = document.getElementById('todoText');
let clearCompleted = document.getElementById('clearCompleted');

addTask.addEventListener('click', addNewTask);

function addNewTask() {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('todoSpan');

    const newTask = inputText.value;
    span.append(newTask);

    const deleteTask = document.createElement('span');
    deleteTask.classList.add('todoDelete');

    const icon = document.createElement('i');
    icon.classList.add("fas", "fa-backspace");
    deleteTask.appendChild(icon);


    todoText.appendChild(li).append(span, deleteTask);
    inputText.value = '';

    deleteTodoTask(deleteTask);
}


inputText.addEventListener('keypress', useEnter);

function useEnter(elem) {
    const enter = 13;
    if (elem.which == enter) {
        addNewTask();
    }
}


function deleteTodoTask(elem) {
    elem.addEventListener('click', (event) => {
        elem.parentElement.remove();
        event.stopPropagation();
    });
}

todoText.addEventListener('click', markCompleted);

function markCompleted(event) {
    if (event.target.className === 'todoSpan') {
        event.target.classList.toggle('completed');
    }
}

function loadTodoData() {
    const data = localStorage.getItem('todoText');
    if (data) {
        todoText.innerHTML = data;
    }
    const deleteButton = document.querySelectorAll('span.todoDelete');
    for (const button of deleteButton) {
        deleteTodoTask(button);
    }
}

loadTodoData();


























// addTask.addEventListener('click', addTaskToDo);

// function addTaskToDo() {
//     let inputText = document.getElementById('inputText').value;
//     let data = {};
//     data.todo = inputText;
//     data.check = false;

//     let i = todoList.length;
//     todoList[i] = data;

//     console.log(todoList);
//     showTask();
// }

// function showTask() {
//     let todoText = '';
//     for ( let key in todoList) {
//         if(todoList[key].check == true) {
//             todoText += '<input type="checkbox" checked>'
//         } 
//         else {
//             todoText += '<input type="checkbox">'
//         }
//         todoText += todoList[key].todo + '<br>';
//     }    
//     document.getElementById('todoText').innerHTML = todoText;
// }

//     // let clearCompleted = document.getElementById('clearCompleted');
//     // clearCompleted.addEventListener('click', clearCompletedTasks);

//     // function clearCompletedTasks() {
//     //     let arr = [];
//     //     for ( let key in todoList) {
//     //         if(todoList[key].check == inputText.checked) {
//     //             arr += todoList[key].check;
//     //         } 
//     //         return arr;
//     //     }

//     //    console.log(arr);
//     // }
//     // clearCompletedTasks();






// // let listItemLi = document.createElement('li');
//     // let listItemSpan = document.createElement('span');
//     // todoText.appendChild(listItemLi);
//     // todoText = document.getElementById('todoText').appendChild(listItemLi);
//     // let newTodo = inputText.value;
//     // todoText.append(newTodo);