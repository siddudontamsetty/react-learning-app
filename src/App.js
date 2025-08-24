import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [post, setPost] = useState([]); // ✅ inside component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPost(response.data); // ✅ set state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // ✅ call the async function
  }, []);

  return (
    <div className="App">
      <h1>📌 Posts</h1>
      <ul>
        {post.slice(0, 5).map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <p>{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
