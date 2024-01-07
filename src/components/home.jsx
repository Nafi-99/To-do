import React, { useState } from 'react'
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from "uuid"
// const dummyTodos = [
//     {
//         id: 1,
//         title: "Todo1",
//         desc: "This is the description"
//     },
//     {
//         id: 2,
//         title: "Todo2",
//         desc: "This is the description"
//     }
// ];
function Home() {
    const [todos, setTodos] = useState([]);

    const handleNewTodo = (todo) => {
        //console.log(todo)
        setTodos((prevTodos) => {
            return [...prevTodos, {id:uuidv4(), todo }]
        })
    }

    const handleRemoveTodo =(id)=>{
       
       setTodos((prevTodo)=>{
        const filterTodo = prevTodo.filter((todo)=> todo.id!=id);
        return filterTodo;
       })
       
    }
    return (
        <div className={style.container}>

            <h1 style={{ color: "white" }}>To-Do</h1>
            <NewTodo onAddTodo={handleNewTodo} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home;
