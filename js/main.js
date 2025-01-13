
const taskList = document.querySelector (".js-tasklist")
const searchBtn = document.querySelector('.js-btn-filter');
const searchInput = document.querySelector('.js-text-task-filter');
const newTaskInput = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');


let tasks = [];

const GITHUB_USER = "AlmuDiazMadramany";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

// FUNCION PARA PINTAR LAS TAREAS EN EL HTML
const renderTasks = () => {
    taskList.innerHTML = ""; // Limpiar la lista actual
    for (const task of tasks) {
      if (task.completed) {
        taskList.innerHTML += `<li class="tachado"><input type="checkbox" checked id="${task.id}">${task.name}</li>`;
      } else {
        taskList.innerHTML += `<li><input type="checkbox" id="${task.id}">${task.name}</li>`;
      }
    }
  };


// TAREAS PINTADAS EN HTML DESDE EL SERVIDOR
fetch (SERVER_URL)
.then ((resp) => resp.json())
.then((data) =>{
    console.log (data)
    tasks=data.results;
    renderTasks(); // nos traemos la funcion de las tareas pintadas en el HTML
})


// BOTON CLICK EN EL LISTADO
const handleClickList = (event) => {
    const taskId = parseInt(event.target.id);  // Obtenemos el id del checkbos clicado
    if (!taskId) return; 
     const task = tasks.find ((t) => t.id === taskId); // Busca la tarea en el array
     if (task){
        task.completed =!task.completed; // Esto cambia el estado a completed, que se actualiza desde el rendertask el estado de checkbox - checked y tachado del texto. 
        renderTasks (); // Aquí volvemos a pintar las tareas según si esta checked o no. 
     }
  };
  
taskList.addEventListener("click", handleClickList);


// --> FILTRAR TAREAS -- NOS QUEDAMOS AQUÍ
const handleSearchBtn =(ev) =>{
    ev.preventDefault (); // para que no refresque la página
    const searchValue = searchInput.value; // obtenemos el value y lo pasamos todo a texto con minusculas. 
    const filterTasks = tasks.filter ((task) => task.name.includes (searchValue)) // Filtra las tareas que tengan solo el texto mostrado y pintamos solo esas tareas: 
    renderTasks (filterTasks);
}
searchBtn.addEventListener ("click", handleSearchBtn);

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


