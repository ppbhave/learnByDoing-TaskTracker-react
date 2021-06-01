import "./addtodo.css"
function Addtodo ({ addToDo, displayNeeded }) {
 let visibilityClass = "todoForm card card-body" + (displayNeeded ? " showElement" : " hidenElement");
    return (
 <form className={visibilityClass} >
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