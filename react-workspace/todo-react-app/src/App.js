import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {Paper, List, Container} from "@material-ui/core";
import './App.css';

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
  add = (item) => {
    const thisItems = this.state.items;
    item.id = "ID-" + thisItems.length;
    item.done = false;
    thisItems.push(item);
    this.setState({items:thisItems});
    console.log("items : ",this.state.items);
  }

  delete = (item) =>{
    const thisItems= this.state.items;
      console.log("Before Update Items :" , this.state.items)
    //use filter function to get rid of the input item
    //copy item when its id is not same as the input item's 
    const newItems = thisItems.filter(e=>e.id !== item.id); 
    this.setState({items:newItems}, ()=> {
      console.log("Update Items : ", this.state.items) //For debuging
    });
  }

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
