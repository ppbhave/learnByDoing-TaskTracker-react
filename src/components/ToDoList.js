import "./todolist.css";

function ToDoList ( {todos, deleteItem } ) {

    return (
        <div className="todo-list">
             { todos.length > 0 ? 
                 todos.map(todo => 
                    <Todo todo={todo} deleteTodo={deleteItem} />
                )  
                : "No todo items to display"}
        
        </div>
    )
}
 
function Todo ({todo, deleteTodo}) {

   const  toggleComplete = (todo) => {
       todo.done=!todo.done;
        if(todo.done) {
            document.getElementById("p#"+todo.id).style.textDecoration="line-through";
        } else {
            document.getElementById("p#"+todo.id).style.textDecoration="";
        }
   }
   
        return (
            <div className="todo card card-body">
            <button type="button" className="close" aria-label="Close" onClick={ () => { deleteTodo(todo) } }>
                <span aria-hidden="true">&times;</span>
            </button>
            <p style={{textDecoration : todo.done ? "line-through" : ""}} id={"p#"+todo.id}>
                {/* { todo.done ?
                <input type={"checkbox"} onChange={() => toggleComplete(todo)} id={"check#"+todo.id} 
                checked/> :
                <input type={"checkbox"} onChange={() => toggleComplete(todo)} id={"check#"+todo.id} 
                />} */} 
                
                <input type={"checkbox"} onChange={() => toggleComplete(todo)} id={"check#"+todo.id} 
                />&nbsp;
                {todo.task}
            </p>
       </div>
        );
}

export default ToDoList;