import React from 'react';
import Nav from '../../components/Nav';


const Home = ({ todosArray, deleteTodo, markTodo }) => {
    return (
        <Nav toDo={todosArray} deleteTodo={deleteTodo} markTodo={markTodo} />
    )
}

export default Home;