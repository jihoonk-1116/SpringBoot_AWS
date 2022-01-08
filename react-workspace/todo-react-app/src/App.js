import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import {
        Paper,
        List, 
        Container, 
        Grid, 
        Button, 
        AppBar, 
        Toolbar, 
        Typography
      } from "@material-ui/core";
import './App.css';
import {call, signout} from './service/ApiService'


class App extends React.Component{
  constructor(props){
    super(props);
    //converted item -> items list
    this.state = {
      items:[],
      loading: true, //loading variable in constructor
    };
  }

  componentDidMount(){
    call("/todo","GET",null)
    .then((res) =>
      this.setState({items:res.data, loading:false}) //successful init -> set loading false
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

  update = (item) => {
    call("/todo","PUT",item)
    .then((res)=>
      this.setState({items:res.data})
    )
  }

  render(){
    //Use map function in JS to create component with the items list
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.items.map((item, idx) => (
            <Todo 
              item={item} 
              key={item.id} 
              delete={this.delete}
              update={this.update}  
            />
            //Todo component's delete is connected with the delete function here.
            //but there is no delete function at Todo.js
            //So, It has to use props object to untilize the delete in App.js
          ))}
        </List>
      </Paper>
    );
    //Nav bar
    var navigationBar = (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item>
              <Typography variant = "h6">
                Today's Todo
              </Typography>
            </Grid>
            <Grid>
              <Button color="inherit" onClick={signout}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );

    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add = {this.add} />
          <div className = "TodoList">{todoItems}</div>
        </Container>
      </div>
    );

    var loadingPage = <h1>Loading...</h1>;

    var content = loadingPage;

    if (!this.state.loading){
      content = todoListPage;
    }

    return <div className="App">{content}</div>
    //return the generated component
    
  }
}

export default App;
