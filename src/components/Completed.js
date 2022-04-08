import React from 'react';
import Todo from './Todo';
import './nav.css';

const Completed = ({ toDo,deleteTodo,markTodo }) => {

    const data = toDo.map((todos,index)=> {
        if(todos.completed == true){
        return (
       
            <div className="col-5 offset-1 m-3" style={{float: 'left'}}>
            <Todo toDo={todos} index={index} deleteTodo={deleteTodo} id={todos.id} markTodo={markTodo}/>
            </div>
   
        )
        }
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
export default Completed;