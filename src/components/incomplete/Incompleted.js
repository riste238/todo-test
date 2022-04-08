import React from 'react';
import Incomplete from '../../components/Incomplete';


const Incompleted = ({todosArray,deleteTodo,markTodo})=>{
    return(
        <Incomplete toDo={todosArray} deleteTodo={deleteTodo} markTodo={markTodo}/>
    )
}

export default Incompleted;