import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import Addtodo from "./components/Addtodo";
function App() {

  const [todos, setTodos] = useState([
    {
        id:1,
        task: "Write a new blog post.",
        done: false
    },
    {
        id:2,
        task: "Pick up laundry.",
        done: false
    },
    {
        id:3,
        task: "Die.",
        done: false
    }
]);

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

  return ( 
    <div className="App">
      <Header />
      <Addtodo addToDo = {addToDo} />
      <ToDoList
        todos  = { todos }
        deleteItem={ deleteItem }
      />
      <Footer />
    </div>
  );
}
export default App;
