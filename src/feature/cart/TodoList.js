import { useState } from "react";
import {Query} from "../api/apiSlice"
const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
const {data:todos,isLoading,isSuccess,isError,error}=Query({})

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTodo("");
  };
  const newItemSection = 
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-Todo">Enter a new Todo item</label>
      <div className="new-Todo">
        <input
          type="text"
          id="new-Todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter new Todo"
        />
      </div>
      <button className="submit">submit</button>
    </form>
  

  let content;
  if (isLoading) {
    content=<p>loading ...</p>
  }else if(isSuccess){
    content=JSON.stringify(todos)
  }else if(isError){
    content=<p>{error}</p>
  }
  
  return (
    <main>
      <h1>TodoList</h1>
      {newItemSection}
      {content}
    </main>
  );
};

export default TodoList;
