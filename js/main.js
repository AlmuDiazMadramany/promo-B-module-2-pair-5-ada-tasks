const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    { name: "Aprender cómo se realizan las peticiones al servidor en JavaScript", completed: false, id: 4,},
  ];


  const taskList = document.querySelector (".js-tasklist")

function renderTask(){
        taskList.innerHTML="";
        for (const eachTask of tasks) {
                
                if (eachTask.completed === true){
                taskList.innerHTML += `<li class ="tachado"> ${eachTask.name} </li>`
                } else {
                    taskList.innerHTML += `<li> ${eachTask.name} </li>`
                }
            }
        }

renderTask ();
