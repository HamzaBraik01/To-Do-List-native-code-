let taskTitle = document.getElementById('taskTitle');
let taskDescription = document.getElementById('taskDescription');
let taskStatus = document.getElementById('taskStatus');
let taskStartDate = document.getElementById('taskStartDate');
let taskDueDate = document.getElementById('taskDueDate');
let taskPriority = document.getElementById('taskPriority');
let SaveTask = document.getElementById('SaveTask');
let AnnulerTask = document.getElementById('AnnulerTask');
let AddTask = document.getElementById('AddTask');

let dataTask;
if(localStorage.Task != null){
  dataTask=JSON.parse(localStorage.Task);
}else{
  let dataTask = [];

}


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
SaveTask.onclick=function () {
  let NewTask = {
    taskTitle:taskTitle.value,
    taskDescription:taskDescription.value,
    taskStatus:taskStatus.value,
    taskStartDate:taskStartDate.value,
    taskDueDate:taskDueDate.value,
    taskPriority:taskPriority.value,
  }
  dataTask.push(NewTask);
  localStorage.setItem('Task',JSON.stringify(dataTask));
  showdata();
  
}


function showdata() {
  let todoTasks = '';
  let doingTasks = '';
  let doneTasks = '';
  let taskItem;

  for (let i = 0; i < dataTask.length; i++) { 
    let priorityClass = '';
    switch (dataTask[i].taskPriority) {
      case 'P1':
        priorityClass = 'border-l-8 border-red-500';
        break;
      case 'P2':
        priorityClass = 'border-l-8 border-orange-500';
        break;
      case 'P3':
        priorityClass = 'border-l-8 border-green-500';
        break;
    }
    taskItem = `
      <div class="border border-gray-300 shadow-lg rounded-lg bg-white p-4 mb-4 transition-transform transform hover:scale-105 max-w-full break-words ${priorityClass}">
        <h3 class="text-xl font-semibold text-teal-500 mb-2 task-title">Task: <span class="text-gray-800">${dataTask[i].taskTitle}</span></h3>
        <p class="hidden text-gray-700 mb-2 task-description">
            <strong>Description:</strong> <span>${dataTask[i].taskDescription}</span>
        </p>
        <p class="text-gray-600 mb-2 task-start-date">
            <strong>Start Date:</strong> ${dataTask[i].taskStartDate}
        </p>
        <p class="text-gray-600 mb-2 task-due-date">
            <strong>Due Date:</strong> ${dataTask[i].taskDueDate}
        </p>
        <div class="flex justify-end">
            <button onclick="toggleModal('edit', this.parentElement.parentElement)" class="mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Edit</button>
            <button onclick="deleteTask(this.parentElement.parentElement)" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">Delete</button>
        </div>
      </div>
    `;
    if (dataTask[i].taskStatus === "todo") {
      todoTasks += taskItem;
    } else if (dataTask[i].taskStatus === "doing") {
      doingTasks += taskItem;
    } else if (dataTask[i].taskStatus === "done") {
      doneTasks += taskItem;
    }
  }

  document.getElementById('todoColumn').innerHTML = todoTasks;
  document.getElementById('doingColumn').innerHTML = doingTasks;
  document.getElementById('doneColumn').innerHTML = doneTasks;
}

showdata();