import React from 'react';
import './nav.css';

const Todo = ({todo,index,deleteTodo,markTodo,id})=>{

    return(
       <div className="row" >
          
               <div className="card">
                   <div className="card-header m-1 p-2">
                       <h3 className="char">{todo.title}</h3>
                   </div>
                   <div className="card-body">
                       <h3 className="char">{todo.completed ? 'Completed' : 'Incompleted'}</h3>
                   </div>
                   <div className="card-footer">
                       <div className="left" style={{float: 'left'}}><button className="btn btn-primary" onClick={()=>{deleteTodo(index)}}>Delete</button></div>
                  <div className="right" style={{float: 'right'}}><button className="btn btn-danger" onClick={()=>{markTodo(index,id)}}>Mark</button></div>
                 
                   </div>
               </div>
          
       </div>
    )
}

export default Todo;