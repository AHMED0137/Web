window.addEventListener('load', () =>{
const form= document.querySelector('#form');
const input= document.querySelector('#m_input');
const list_element= document.querySelector('#task');

form.addEventListener('submit',(e) =>{
e.preventDefault();
const task = input.value;
    if(!task){
      alert("please enter the value to add");
      return;
    }
    
    const task_element= document.createElement("div");
    task_element.classList.add("task_input");

    const task_content= document.createElement("div");
    task_content.classList.add("input_bar");

    const task_input= document.createElement("input");
    task_input.type="text";
    task_input.value=task;
    task_input.setAttribute("readonly", "readonly");
    task_input.classList.add("t_input");

    const task_edit= document.createElement("div");
    task_edit.classList.add("edit_btn");
    task_edit.innerHTML='<i class="fa-solid fa-pen"></i>';

    const task_delete= document.createElement("div");
    task_delete.classList.add("delete_btn");
    task_delete.innerHTML='<i class="fa-solid fa-trash"></i>';

    task_element.appendChild(task_content);
    list_element.appendChild(task_element);
    task_content.appendChild(task_input);
    task_content.appendChild(task_edit);
    task_content.appendChild(task_delete);
    input.value="";

});
});