interface Todo {
    text:string;
    completed:boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")! as HTMLFormElement;
const ul = document.querySelector("#todolist")! as HTMLUListElement;
const readTodos = ():Todo[]=>{
    const todosJSON = localStorage.getItem("todos");
    if(todosJSON===null) return [];
    return JSON.parse(todosJSON);
}
const checkTodoCompleted = (todo:Todo,li:HTMLLIElement):void =>{
    if(todo.completed)
            li.style.setProperty("text-decoration","line-through");
        else
            li.style.setProperty("text-decoration","none");
}

const createTodo = (todo:Todo):void => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked=todo.completed;

    checkbox.addEventListener("change",()=>{
        todo.completed = checkbox.checked;
        //remove the completed task
        // todos = todos.filter(todo=>!todo.completed);
        // ul.removeChild(li);

        //line through the completed task
        checkTodoCompleted(todo,li);
        saveTodos();
    })
    li.textContent = todo.text;
    checkTodoCompleted(todo,li);
    li.append(checkbox);
    ul.appendChild(li);
}

const saveTodos = ():void=>{
    localStorage.setItem("todos",JSON.stringify(todos));
}
let todos:Todo[] = readTodos(); 
todos.forEach(createTodo);


const handleSubmit = (e:SubmitEvent)=>{
    e.preventDefault();
    const newTodo:Todo = {
        text:input.value,
        completed:false
    }
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value=""
}

form.addEventListener("submit",handleSubmit);