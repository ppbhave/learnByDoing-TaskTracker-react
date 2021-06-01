import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import ToDoList from "./components/ToDoList";
import Addtodo from "./components/Addtodo";

function App() {

  const getTodoLists = () => {
    return JSON.parse(localStorage.getItem("todoLists"));
  }

  const [todoLists,updateTodoLists] =useState(getTodoLists() ? getTodoLists() : []);
  const [displayElements,updateDisplay] =useState( todoLists.length > 0 ? true : false );
  const [index,setIndex]= useState(todoLists.length > 0 ? todoLists.length-1 : 0);
  const [todos, setTodos] = useState(todoLists.length > 0 ? todoLists[index].todos : []);
  const [listTitle, setTitle] = useState(todoLists.length >0 ? todoLists[index].title: "");

  useEffect(() => {
    updateDisplay(todoLists.length > 0 ? true : false);
    console.log(displayElements);
    setIndex(todoLists.length > 0 ? todoLists.length-1 : 0);
}, [todoLists])

useEffect(() => {
  console.log(index);
  setTodos(todoLists.length > 0 ? todoLists[index].todos : []);
  setTitle(todoLists.length > 0 ? todoLists[index].title : "");
}, [index])


  const setTodoLists = (tlists) => {
    localStorage.setItem("todoLists",JSON.stringify(tlists));
    updateTodoLists(tlists);
  }

  const deleteItem = (item) => {
    setTodos( 
      todos.filter(todo => todo != item )
    )
  };

  const addToDo = (taskElement) => {
    if(taskElement.value === "")
    {
      alert("Please describe the task.")
    }
    else{
    let toDo = {
      id: todos.length==0 ? 0 :todos[todos.length - 1].id + 1,
      task: taskElement.value,
      done: false
    };
    taskElement.value = "";
    setTodos([...todos, toDo]);
  }
};

const addList = (titleElement) => {
  if(titleElement.value === "")
  {
    alert("Please describe the title.")
  }
  else{
  let todoList = {
    title : titleElement.value,
    todos: []
  };
  titleElement.value = "";
  setTodoLists([...todoLists,todoList]);
  setTodos(todoList.todos);
}
};

const deleteList = () => {
  setTodoLists(todoLists.filter(tlist => tlist != todoLists[index]));
}

const listSelector = ( i ) => {
  if (window.confirm("Any unsaved changes will be lost. Wish to continue?")) {
    setIndex(i);
    setTitle(todoLists[i].title);
    setTodos(todoLists[i].todos);
  }
}

const savetodos = () => {
  todoLists[index].todos=todos;
  setTodoLists(todoLists);
}

  return ( 
    <div className="App">
      <Header todoLists = {todoLists} listSelector={ listSelector } addList={ addList }/>
      <Addtodo addToDo = {addToDo} displayNeeded = { displayElements }/>
      <ToDoList
        todos  = { todos }
        deleteItem={ deleteItem }
        index={index}
        title={listTitle}
        displayNeeded = {displayElements}
        deleteList = { deleteList }
        savetodos = {savetodos}
      />
      <Footer />
    </div>
  );
}
export default App;
