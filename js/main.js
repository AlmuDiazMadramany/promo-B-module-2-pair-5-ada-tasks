
const taskList = document.querySelector (".js-tasklist")
const searchBtn = document.querySelector('.js-btn-filter');
const searchInput = document.querySelector('.js-text-task-filter');
const newTaskInput = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');


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
        if(task.completed){
            taskList.innerHTML += `<li class="tachado"><input type="checkbox" checked id="${task.id}">${task.name}</li>`
        } else {
            taskList.innerHTML += `<li><input type="checkbox" id="${task.id}">${task.name}</li>`
        }
    }
})


const handleClickList = (event) => {
    const taskId = parseInt(event.target.id); 
    if (!taskId) return; 

    for (const task of tasks) {

    }
    
  
    // Busca la tarea que tenga el id `taskId` en el array `tasks`. O sea ver que numero de id corresponde al checkbox que se ha marcado, y a esa tarea añadirle completed.
    // Una vez que has obtenido la tarea, actualiza la propiedad `completed`
    // Pinta de nuevo las tareas en el html
  };
  
  list.addEventListener("click", handleClickList);

taskList.addEventListener('click', handleClickList);

function newTaskAdded(){
    const taskAdded = {
        name: newTaskInput.value,
    };
    taskList.innerHTML += taskAdded;
}

function handleClick(event) {
    event.preventDefault();
    newTaskAdded();
}


addBtn.addEventListener('click', handleClick);


