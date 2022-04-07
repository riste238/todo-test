import React, { Component} from 'react'; 
import Navbar from './components/navbar/Navbar';
import Nav from './components/Nav';
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home'; 
import About from './components/About/About';

class App extends Component {

    state = {
        url : [], 
        completed : ""
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(resolve => {
            return resolve.json();
        }).then(data =>{
            this.setState({url : data})
        })
    }

    deleteTodo =(index) =>{
        const copyData = [...this.state.url];
        copyData.splice(index,1);
        this.setState({url : copyData});
    }
   
    markTodo = (index,id) =>{
       const complete = [...this.state.url];
       complete[index].completed = !complete[index].completed;
        this.setState({completed : complete});
    }

    render(){
        return(
            <>
          
            <BrowserRouter> 
            <Navbar />
          <Nav todos={this.state.url} deleteTodo={this.deleteTodo} markTodo={this.markTodo}/>

            {/* mora da imame wraper Routes okolu Route */}
            <Routes>

            <Route path="/" exact element={<Home todos={this.state.url}/>} />
            
            {/* component vo novata verzija e zamenet so element */}
            <Route path="/about" exact element={<About/>} />
          
            </Routes>
            </BrowserRouter>
          </>
        )
    }
}
export default App;