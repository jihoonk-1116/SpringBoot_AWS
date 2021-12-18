import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';
import {call} from './service/ApiService'

class App extends React.Component{
  constructor(props){
    super(props);
    //converted item -> items list
    this.state = {
      items:[
        {id:"0", title:"Hello World 1", done : true},
        {id:"1", title:"Hello World 2", done : false},
      ],
    };
  }

  componentDidMount(){
    call("/todo","GET",null)
    .then((res) =>
      this.setState({items:res.data})
    );
  }

  add = (item) => {
    call("/todo","POST",item)
    .then((res)=>
      this.setState({items:res.data})
    );
  }

  delete = (item) => {
    call("/todo","DELETE", item)
    .then((res)=>
      this.setState({items:res.data})
    );
  };

  render(){
    //Use map function in JS to create component with the items list
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete}/>
            //Todo component's delete is connected with the delete function here.
            //but there is no delete function at Todo.js
            //So, It has to use props object to untilize the delete in App.js
          ))}
        </List>
      </Paper>
    );
    
    //return the generated component
    return (
      <div className="App">
        <Container maxwidth="md">
            <AddTodo add={this.add}/>
            <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    );
  }
}

export default App;
