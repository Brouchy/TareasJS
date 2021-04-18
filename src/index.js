import './styles.css';


import {Todo,TodoList} from './classes'; 
//al escribir la ruta a si por defecto busca el index de la carpeta clasess
import{crearTodoHtml} from './js/componentes'

export const todoList = new TodoList();
//console.log(todoList.todos);
todoList.todos.forEach(todo =>crearTodoHtml(todo));
console.log('todos',todoList.todos);
//  const tarea = new Todo('Aprender JS');

//  todoList.nuevoTodo(tarea);
// console.log(tarea.id);
// console.log(todoList);
// crearTodoHtml(tarea);

//localStorage.setItem('mi-key','abc123');