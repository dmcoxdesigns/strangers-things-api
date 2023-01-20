/* eslint-disable no-unreachable */
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(
        "https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts"
      );
      const data = await resp.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <div>{post.body}</div>
        </div>
      ))}
    </>
  );
  root.render(<App />, document.getElementById("root"));
};
