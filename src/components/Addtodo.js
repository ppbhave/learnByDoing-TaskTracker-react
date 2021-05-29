import "./addtodo.css"
function Addtodo ({addToDo}) {

    return (
 <form className="todoForm card card-body">
  <div className="form-group">
    <h4 for="task">New task todo</h4>
    <input type="text" className="form-control" id="task" placeholder="Enter task"/>
    <button className="btn btn-xsm btn-info" onClick= { (e) => {
        e.preventDefault();
        addToDo(document.getElementById("task")) }} > Add</button>
    </div>
  </form>
    )
}

export default Addtodo;