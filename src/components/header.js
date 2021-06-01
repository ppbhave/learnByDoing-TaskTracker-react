import "./header.css";
import React from "react";
export default function Header( {todoLists, listSelector, addList} ) {
  return (
    <header className="headerComponent">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Pranav Bhave
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                about
              </a>
            </li>
          </ul>

          <button className="btn btn-primary"data-toggle="modal" data-target="#newListForm">+</button> &nbsp;
          <form className="selectListForm">
            
          <label className="form-group">
          select the todo list:
          <select className="form-control" id="listSelector" onChange={(e)=>{listSelector(e.target.value)}}>

          {
              todoLists.map ( todoList => (
               <option key={todoList.title} value={todoLists.indexOf(todoList)}>{todoList.title}</option>
              )) }

          </select>
           </label>
          </form>
        </div>
        
      </nav>

<div class="modal fade" id="newListForm" tabindex="-1" role="dialog" aria-labelledby="Add-new-task" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="Add-new-task">Add new task list</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form className="todoForm card card-body">
          <div className="form-group">
          <h4 for="task">List title</h4>
          <input type="text" className="form-control" id="title" placeholder="Enter title"/>
          <button className="btn btn-sm btn-info" onClick= { (e) => {
            e.preventDefault();
            addList(document.getElementById("title")) }}>Add</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

    </header>
  );
}
