const inputTask=document.getElementById("input-task")
const addTaskButton=document.getElementById("add-task");
const list_el = document.querySelector("#tasks");

addTaskButton.addEventListener('click',function(){
    
    const task=inputTask.value;
    if(task.trim()===""){
        alert('please enter a task')
    }
    else{
        const task_el = document.createElement('div');
		task_el.classList.add('task');

        const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

        const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_delete_el);
        
        task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

        inputTask.value = "";


        task_delete_el.addEventListener('click', function() {
            list_el.removeChild(task_el);
        });



        
	}
})



    

