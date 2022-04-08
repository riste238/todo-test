import React from 'react';
import Completed from '../Completed';

const Complete = ({todosArray,deleteTodo,markTodo})=> {
    
    return (
        <Completed toDo={todosArray} deleteTodo={deleteTodo} markTodo={markTodo}/>
        
    )
}
export default Complete;