
const taskList = document.querySelector (".js-tasklist")
const searchBtn = document.querySelector('.js-btn-filter');
const searchInput = document.querySelector('.js-text-task-filter');

let tasks = [];
const GITHUB_USER = "AlmuDiazMadramany";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

// TAREAS PINTADAS EN HTML DESDE EL SERVIDOR
fetch (SERVER_URL)
.then ((resp) => resp.json())
.then((data) =>{
    console.log (data)
    tasks=data.results;
    taskList.innerHTML = "";
    for (const task of tasks) {
        const isChecked = task.completed ? "checked" : ""; 
        const isTachado = task.completed ? "tachado" : "";
        taskList.innerHTML+= `<li class="${isTachado}"> <input type="checkbox" class ="js-checkbox" id="task-${task.id}" ${isChecked} data-id="${task.id}"> <label for="task-${task.id}">${task.name}</label></li>`
    }
    addCheckboxListeners()
    })

const checkbox = docuemnt.querySelector (".js-checkbox")
//function addCheckboxListeners

//checkbox.addEventListener ("click", addCheckboxListeners)

/*function addCheckboxListeners() {
const checkboxes = document.querySelectorAll("input[type='checkbox']"); 
checkboxes.forEach((checkbox) => { 
    checkbox.addEventListener("click", (event) => { 
        const taskId = parseInt(event.target.dataset.id); 

        for (let i = 0; i < tasks.length; i++) { 
            if (tasks[i].id === taskId) { 
                tasks[i].completed = event.target.checked;
                break;
            } 
        } 
     

    }); 
}); 

} 


/*renderSearch(list){
    for (const element of list) {
        taskList.innerHTML += `<li> ${element.name} </li>`
    }
    }
*/

/*function handleChange () {
    const searchValue = searchInput.value;
    const filterTasks = tasks.filter((task) => task.name.toLowerCase() === searchValue);
    renderSearch(filterTasks);
}


    
searchBtn.addEventListener('change', handleChange);

*/