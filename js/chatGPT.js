
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