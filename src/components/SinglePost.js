import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [about, setAbout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((rest) => rest.json())
      .then(data => {
        if (!data.id) {
            navigate("/posts")
            return
        }
        setAbout(data)
      }) 
  }, [id, navigate]);

  return (
    <div>
      {about && (
        <>
          <h1>{about.title}</h1>
          <p>{about.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePost;
