import React, { useState } from 'react'
import style from './newtodo.module.css'
const NewTodo = (props) => {
    const [todo, setTodo] = useState({ title: "", desc: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddTodo(todo);
        setTodo({title:"", desc:""})
    }
    const handleChange =(e)=>{
        const name=e.target.name;
       
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:e.target.value}
        })

    }
    return (
        <form className={style.form} onSubmit={handleSubmit} >
            <div className={style["form-field"]}>
                <label htmlFor="title">Title:</label>
                <input type="text"
                       id="title" name="title"
                       value={todo.title} 
                       onChange={handleChange} />
            </div>

            <div className={style["form-field"]}>
                <label htmlFor="desc">Description</label>
                <textarea type="text"
                          id="desc"
                          name="desc" 
                         value={todo.desc}
                         onChange={handleChange} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo
