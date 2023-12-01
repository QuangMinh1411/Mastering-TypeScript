"use strict";
const btn = document.getElementById("btn");
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const ul = document.querySelector("#todolist");
const readTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
};
const checkTodoCompleted = (todo, li) => {
    if (todo.completed)
        li.style.setProperty("text-decoration", "line-through");
    else
        li.style.setProperty("text-decoration", "none");
};
const createTodo = (todo) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        //remove the completed task
        // todos = todos.filter(todo=>!todo.completed);
        // ul.removeChild(li);
        //line through the completed task
        checkTodoCompleted(todo, li);
        saveTodos();
    });
    li.textContent = todo.text;
    checkTodoCompleted(todo, li);
    li.append(checkbox);
    ul.appendChild(li);
};
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
};
let todos = readTodos();
todos.forEach(createTodo);
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false
    };
    todos.push(newTodo);
    createTodo(newTodo);
    saveTodos();
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
