import React, { Component} from 'react'; 
import Navbar from './components/navbar/Navbar';
import Nav from './components/Nav';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'; 
import Complete from './components/complete/Complete';
import Incompleted from './components/incomplete/Incompleted';

class App extends Component {

    state = {
        todosArray : [], 
        completed : Boolean
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resolve => {
            return resolve.json();
        }).then(data => {
            this.setState({todosArray : data})
        })
    }

    deleteTodo =(index) =>{
        const copyData = [...this.state.todosArray];
        copyData.splice(index,1);
        this.setState({todosArray : copyData});
    }
   
    markTodo = (index,id) =>{
       const complete = [...this.state.todosArray];
       complete[index].completed = !complete[index].completed;
        this.setState({completed : complete});
    }

    render(){
        return(
            <>
          
            <BrowserRouter> 
            <Navbar />
                   
            <Routes>

            { (this.state != undefined) &&
            <Route path="/" exact element={<Home todosArray={this.state.todosArray} deleteTodo={this.deleteTodo} markTodo={this.markTodo}/>} />
    }
          
            <Route path="/complete" exact element={<Complete  todosArray={this.state.todosArray} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />} />
            <Route path="/incompleted" exact element={<Incompleted  todosArray={this.state.todosArray} deleteTodo={this.deleteTodo} markTodo={this.markTodo} />} />
          
            </Routes>
            </BrowserRouter>
          </>
        )
    }
}
export default App;