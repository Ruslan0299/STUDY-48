import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts") 
      .then((res) => res.json())
      .then((data) => setAbout(data.posts));
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <p>View our posts</p>
      <div className="posts-body">
        {about.map((item) => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`} role="li">{item.title}</Link>
          </li>
        ))} 
      </div>
    </>
  );
};

export default About;
