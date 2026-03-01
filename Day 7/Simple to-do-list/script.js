function addTask(){
    const taskInput = document.getElementById('taskInput');
    //when task is button is clicked, the value is stored in the task-list.
    const taskList = document.getElementById('task-list');
   const taskText = taskInput.value;
   const li=document.createElement('li');
   li.innerText=`${taskText}`;

   //delete the task ...
   const deletebtn=document.createElement('button');
   deletebtn.innerText='Delete';
   deletebtn.onclick=function(){
    li.remove();

   }
   li.appendChild(deletebtn);
   taskList.appendChild(li);
   taskInput.value="";

}
