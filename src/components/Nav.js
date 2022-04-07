import React from 'react';
import Todo from './Todo';
import './nav.css';

const Nav = ({ todos,deleteTodo,markTodo }) => {

    const data = todos.map((todo,index)=> {
        
        return (
       
            <div className="col-5 offset-1 m-3" style={{float: 'left'}}>
            <Todo todo={todo} index={index} deleteTodo={deleteTodo} id={todo.id} markTodo={markTodo}/>
            </div>
   
        )
    })

    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-10 offset-1" style={{float: 'left'}}>
                {data}
                </div>
            </div>
            </div>
           
        </>
    )
}
export default Nav;