var todoButton = document.querySelector('button');
var inputfield = document.querySelector('input');
var todoList= document.querySelector('div.todos')
var todos=[]

async function callAPI(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos') 
        .then(response=>response.json())
        .then(json=>{
            // const json=response.json()
            todos=json.slice(0,10)
            console.log(todos)
            todos.forEach((todo,index)=>{
                const newTodo =document.createElement('p')
                newTodo.setAttribute('key',index)
                newTodo.innerHTML=todo.title
                todoList.appendChild(newTodo)
                })
            })
        .catch((e)=>console.log(e))
        }
        catch(e){
            console.log(e);
        }
}
callAPI()

todoButton.addEventListener('click',function(){
    todoList.innerHTML='' 
    todos.filter(todo => todo.completed).forEach((todo,index)=>{
        const newTodo=document.createElement('p')
        newTodo.setAttribute('key',index)
        newTodo.innerHTML=todo.title 
        todoList.appendChild(newTodo) ; 
    })
})