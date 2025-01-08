const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4,},
  ];


const taskList = document.querySelector (".js-tasklist")
const searchBtn = document.querySelector('.js-btn-filter');
const searchInput = document.querySelector('.js-text-task-filter');

function renderTask(){
        taskList.innerHTML="";

        for (const eachTask of tasks) {
            const isChecked = eachTask.completed ? "checked" : ""; 
            const isTachado = eachTask.completed ? "tachado" : "";

            taskList.innerHTML += ` <li class="${isTachado}"> <input type="checkbox" id="task-${eachTask.id}" ${isChecked} data-id="${eachTask.id}"> <label for="task-${eachTask.id}">${eachTask.name}</label> </li>`;

            //     if (eachTask.completed === true){
            //         taskList.innerHTML += `<li class ="tachado"><input type="checkbox" id="${eachTask.id}"> ${eachTask.name} </li>`
            //     } else {
            //         taskList.innerHTML += `<li><input type="checkbox"> ${eachTask.name} </li>`
            //     }
             }

        addCheckboxListeners(); 
    
    }

// Añadir eventos a los checkboxes después de renderizar 

function addCheckboxListeners() {
const checkboxes = document.querySelectorAll("input[type='checkbox']"); 
checkboxes.forEach((checkbox) => { 
    checkbox.addEventListener("change", (event) => { 
        const taskId = parseInt(event.target.dataset.id); 

        for (let i = 0; i < tasks.length; i++) { 
            if (tasks[i].id === taskId) { 
                tasks[i].completed = event.target.checked;
                break;
            } 
        } 
        renderTask();

    }); 
}); 

} 


renderSearch(list) {
    for (const element of list) {
        taskList.innerHTML += `<li> ${element.name} </li>`
    }
}


function handleChange () {
    const searchValue = searchInput.value;
    const filterTasks = tasks.filter((task) => task.name.toLowerCase() === searchValue);
    renderSearch(filterTasks);
}

renderTask();
    
searchBtn.addEventListener('change', handleChange);