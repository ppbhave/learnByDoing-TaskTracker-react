import "./todolist.css";

function ToDoList ( {todos, deleteItem, index, title, displayNeeded, deleteList, savetodos } ) {

    let visibilityClassDelete = "btn btn-sm btn-danger" + (displayNeeded ? " showElement" : " hidenElement");
    let visibilityClassSave = "btn btn-sm btn-success" + (displayNeeded ? " showElement" : " hidenElement");
    return (
        <div className="todolist-container">
        <div className="card-body todoListheader">
            <h4>{title}</h4> &nbsp;
            <button className={visibilityClassDelete} onClick= { (e) => {
        e.preventDefault();
        deleteList();
         }} >delete</button>
        &nbsp;
       <button className={visibilityClassSave} onClick= { (e) => {
        e.preventDefault();
        savetodos();
         }} >save</button>
        </div>
        
        <div className="todo-list">
             { todos.length > 0 ? 
                 todos.map(todo => 
                    <Todo key={todo.id} todo={todo} deleteTodo={deleteItem} index={index}/>
                )  
                : "No todo items to display"}
        
        </div>
    </div>
    )
}
 
function Todo ({todo, deleteTodo, index}) {

   const  toggleComplete = (todo,checkId) => {
       let Listindex=checkId.split("-")[0];
       todo.done=!todo.done;
        if(todo.done) {
            document.getElementById(Listindex+"p#"+todo.id).style.textDecoration="line-through";
        } else {
            document.getElementById(Listindex+"p#"+todo.id).style.textDecoration="";
        }
   }
   
        return (
        <div className="todo card card-body">
            <button type="button" id={index+"-"+todo.id} className="close" aria-label="Close" onClick={ () => { deleteTodo(todo) } }>
                <span aria-hidden="true">&times;</span>
            </button>
            <p style={{textDecoration : todo.done ? "line-through" : ""}} id={"pg#"+index+"p#"+todo.id}>
                {/* { todo.done ?
                <input type={"checkbox"} onChange={() => toggleComplete(todo)} id={"check#"+todo.id} 
                checked/> :
                <input type={"checkbox"} onChange={() => toggleComplete(todo)} id={"check#"+todo.id} 
                />} */} 
                
                <input type={"checkbox"} onChange={(e) => toggleComplete(todo,e.target.id)} id={"pg#"+index+"-check#"+todo.id} 
                />&nbsp;
                {todo.task}
            </p>
       </div>
        );
}

export default ToDoList;