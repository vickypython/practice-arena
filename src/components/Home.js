import React, { useEffect, useState } from "react";
//import BlogList from "./BlogList";
const BASE_URL = "https://jsonplaceholder.typicode.com";
const Home = () => {
  const [error, setError] = useState();
  const [isloading, setisLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      setisLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setisLoading(false);
      }
    };
    fetchBlog();
  }, [

  ]);
  if (isloading) {
    return <div>loading..</div>;
  }
  if (error) {
    return <div>something dummy</div>;
  }
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
