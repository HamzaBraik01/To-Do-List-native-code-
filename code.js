let taskTitle = document.getElementById('taskTitle');
let taskDescription = document.getElementById('taskDescription');
let taskStatus = document.getElementById('taskStatus');
let taskStartDate = document.getElementById('taskStartDate');
let taskDueDate = document.getElementById('taskDueDate');
let taskPriority = document.getElementById('taskPriority');
let SaveTask = document.getElementById('SaveTask');
let AnnulerTask = document.getElementById('AnnulerTask');
let AddTask = document.getElementById('AddTask');

let dataTask = [];

AddTask.onclick = function(){
  let taskForm = document.getElementById('taskForm')
  if(taskForm.classList.contains('hidden')){
    taskForm.classList.remove('hidden');
  }
  
}
AnnulerTask.onclick = function(){
  let taskForm = document.getElementById('taskForm')
  taskForm.classList.add('hidden');
  let taskFormContent = document.getElementById('taskFormContent');
  taskFormContent.reset();
}
