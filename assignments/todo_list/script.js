var todoButton = document.querySelector('button');
var userInput= document.querySelector('input');
var todoList = document.querySelector('.todos')
var count = 0;
todoButton.addEventListener("click", AddTodo)
function AddTodo(){
    var  todo=document.createElement('p');
    todo.setAttribute('key',count);
    count=count+1;
    todo.innerHTML=userInput.value;
    todoList.appendChild(todo);
    userInput.value='';
    todo.addEventListener('click',function(e){
        todoList.removeChild(todo);
    })
}

