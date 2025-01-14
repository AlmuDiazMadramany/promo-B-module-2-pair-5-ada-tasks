
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
    const taskId = parseInt(event.target.id);  // Obtenemos el id del checkbox clicado
    if (!taskId) return; 
     const task = tasks.find ((t) => t.id === taskId); // Busca la tarea en el array
     if (task){
        task.completed =!task.completed; // Esto cambia el estado a completed, que se actualiza desde el rendertask el estado de checkbox - checked y tachado del texto. 
        renderTasks (); // Aquí volvemos a pintar las tareas según si esta checked o no. 
     }
  };
  
taskList.addEventListener("click", handleClickList);


// --> FILTRAR TAREAS 

function renderFilteredTasks (array) {
  taskList.innerHTML = ""; // Limpiar la lista actual
  for (const task of array) {
    if (task.completed) {
      taskList.innerHTML += `<li class="tachado"><input type="checkbox" checked id="${task.id}">${task.name}</li>`;
    } else {
      taskList.innerHTML += `<li><input type="checkbox" id="${task.id}">${task.name}</li>`;
    }
  }
}

const handleSearchBtn =(ev) =>{
    ev.preventDefault (); // para que no refresque la página
    const searchValue = searchInput.value.toLowerCase().trim(); // Convertir a minúsculas y eliminar espacios
    // Filtrar las tareas que incluyan el texto buscado
    const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchValue));
    // Volver a pintar las tareas con el listado filtrado
    renderFilteredTasks(filteredTasks);
    console.log(filteredTasks);
};

// Asociar el evento de clic al botón de buscar
searchBtn.addEventListener("click", handleSearchBtn);


// AGREGAR UNA NUEVA TAREA
function newTaskAdded(){
    const taskAdded = {
        id: tasks.length +1,
        name: newTaskInput.value,
        completed: false, 
    };
    tasks.push(taskAdded);
    renderTasks ();
    newTaskInput.value= "";
    };

function handleClick(event) {
    event.preventDefault();
    newTaskAdded();
}

addBtn.addEventListener('click', handleClick);

taskList.addEventListener('click', (event) => {
  if (event.target.type === 'checkbox') {
    const taskId = parseInt(event.target.id);
    const task = tasks.find(t => t.id === taskId);
    
    if (task) {
      task.completed = event.target.checked; // Actualizar el estado de la tarea
      // Actualizar la visualización de la tarea (tachado si está completada)
      event.target.parentElement.style.textDecoration = task.completed ? 'line-through' : 'none';
    }
  }
});


// GUARDAR LISTA DE TAREAS EN EL SERVIDOR

const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if (tasksLocalStorage === null) {
   localStorage.setItem ("tasklocalStorage", JSON.stringify(tasksLocalStorage));
   taskList.innerHTML += tasksLocalStorage
} else {
  
  //sino existe el listado de tareas en el local storage
  // pide los datos al servidor
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      localStorage.getItem 
      taskList.innerHTML += tasksLocalStorage
    })
    .catch((error) => {
      console.error(error);
    });
}