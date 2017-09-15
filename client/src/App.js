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

  handleRemoveTodo(index){
    this.setState({
      todos:this.state.todos.filter(function(e,i){
        return i!==index;
      })
    })
  }

  render() {
    return (
      <div className="container">
        <TodoInput />
        <h4>Todo Count: <span className="badge">{this.state.todos.length}</span></h4>
        <ul className="list-group">
          {this.state.todos.map((todo,index)=>
            <li className="list-group-item" key={index}>
              <h4 className="list-group-item-heading">{todo.todoTitle} <small><span className="label label-info">{todo.todoPriority}</span></small></h4>

              <p><span className="glyphicon glyphicon-user"></span> {todo.todoResponsible}</p>
              <p>{todo.todoDescription}</p>
              <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"></span> &nbsp;Delete</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

class TodoInput extends Component{
  constructor(props){
    super(props);

    this.state={
      todoTitle:'',
      todoResponsible:'',
      todoDescription: '',
      todoPriority:'Lowest'
    }
  }

  render(){
    return(
      <div>
        <h4>Add new Todo</h4>
        <form className='form-horizontal' onSubmit={this.handleSubmit}>
      {/* Title input */}
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
            <div className="col-sm-10">
              <input name="todoTitle" type="text" id="inputTodoTitle" className="form-control" value={this.state.todoTitle} onChange={this.handleInputChange} placeholder="Title"></input>
            </div>
          </div>

        {/* Responsible input */}
          <div className="form-group">
            <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
            <div className="col-sm-10">
              <input name="todoTitle" type="text" id="inputTodoResponsible" className="form-control" value={this.state.todoResponsible} onChange={this.handleInputChange} placeholder="Responsible"></input>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">Description</label>
            <div className="col-sm-10">
              <textarea name="todoDescription" id="inputTodoDesc" className="form-control" rows="3" value={this.state.todoDescription} onChange={this.handleInputChange} placeholder="Description"></textarea>
            </div>
          </div>

        {/* Priority input */}

          <div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">Priority</label>
            <div className="col-sm-10">
              <select name="todoPriority" id="inputTodoPriority" className="form-control" value={this.state.todoPriority} onChange={this.handleInputChange} placeholder="Responsible">
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
      
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add todo</button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}

export default App;
