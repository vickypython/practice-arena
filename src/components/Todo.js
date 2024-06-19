import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";

// const POSTS = [
//   { id: 1, title: "post 1" },
//   { id: 2, title: "post 2" },
// ];
// const addPostMutation= async(title)=>{
//   await new Promise(resolve=>setTimeout(resolve,1000))
//   const newPost={
//     id:POSTS.length+1,
//     title:title
//   }
//   POSTS.push(newPost)
//   return POSTS
//   }
const Todo = () => {
  // const [post, setPost] = useState("");
  const {
    isLoading,
    isError,
    data: postQuery,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => waitFor(),
  });
  const { mutate } = useMutation({
    mutationKey:['posts',],
    mutationFn: ()=>addPost(),
  });

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h2>errorElement</h2>;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name= Object.entries(formData);
    if (!name) return;
    mutate({ id:postQuery.length+1,name });
    e.target.reset();
  };

  return (
    <div>
      <div>
      <form onSubmit={handleSubmit}>
        <input  name="name"></input>
        <button>Add post</button>
      </form>
      </div>
      {postQuery.map((post) => (
        <div>
          <h1>{post.name}</h1>
          <div key={post.id}>{post.rollNumber}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
const waitFor = async () => {
  const response = await fetch("http://localhost:3000/todos?_sort=-id");
  const todoPost = await response.json();
  return todoPost;
};
const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  });
  return response.json();
};
