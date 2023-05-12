const form = document.querySelector("#new-task-form"); // form of input fields
const input = document.querySelector("#new-task-input"); // new task input field
const list_el = document.querySelector("#tasks"); // for generated task list

// listen on form that submit button is clicked
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const task = input.value; // new entered text for new task

    if(!task) {
        alert("Please fill in that task");
        return;
    }

    const task_el = document.createElement('div'); // create a new div with class "task"
    task_el.classList.add('task');
    
    const task_content_el = document.createElement('div'); // create a new div with class "content" (as child from task)
	task_content_el.classList.add('content');

    task_el.appendChild(task_content_el); // append div "content" to div "task"

    const task_input_el = document.createElement('input'); // create a new input field as readonly with class "text" (as child from content)
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el); // append input field to div "content"

    const task_actions_el = document.createElement('div'); // create a new div with class "actions"
    task_actions_el.classList.add('actions');
    
    const task_edit_el = document.createElement('button'); // create a new button with class "edit"
    task_edit_el.classList.add('button');
    let  task_edit_icon = document.createElement('span');
    task_edit_icon.classList.add("material-symbols-outlined");
    task_edit_icon.innerText = 'edit';
    task_edit_el.appendChild(task_edit_icon);
    task_actions_el.appendChild(task_edit_el);


    const task_delete_el = document.createElement('button'); // create a new button with class "delete"
    task_delete_el.classList.add('delete');
    let  task_delete_icon = document.createElement('span');
    task_delete_icon.classList.add("material-symbols-outlined");
    task_delete_icon.innerText = 'delete';
    task_delete_el.appendChild(task_delete_icon);
   

    task_actions_el.appendChild(task_edit_el); // append div with class "actions" to div with class "actions"
    task_actions_el.appendChild(task_delete_el); // append button with class "delete" to div with class "actions"

    task_el.appendChild(task_actions_el); // append div with class "actions" to div "task"

    list_el.appendChild(task_el); // append all divs to div with ID "tasks"

    input.value = ''; // empty the input field for next entry

    // listen on button edit that it is clicked
    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() == "edit") { 
            task_edit_icon.innerText = 'save';
            task_input_el.removeAttribute("readonly"); // change attribute that you can edit text of task
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Edit";
            task_input_el.setAttribute("readonly", "readonly"); // change attribute back to readonly (no edit possible)
        }
    });
    // listen on button delete that it is clicked
    task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el); // remove child element
    });
});