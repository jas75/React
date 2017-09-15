import React, { Component } from 'react';


var todos = [
  {
    todoTitle: 'First todo',
    todoResponsible: 'Sebastien',
    todoDescription: 'hello',
    todoPriority: 'low'
  },
  {
    todoTitle: 'second todo',
    todoResponsible: 'jason',
    todoDescription: 'ouais',
    todoPriority: 'medium'
  },
  {
    todoTitle: 'third todo',
    todoResponsible: 'ilan',
    todoDescription: 'salut',
    todoPriority: 'high'
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      todos
    };
  }


  render() {
    return (
      <div className="container">
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo,index)=>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>

              <p><span className="glyphicon glyphicon-user"></span> {todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"></span> &nbsp;Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
