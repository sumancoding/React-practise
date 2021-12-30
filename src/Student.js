import React, { useState } from "react";

function Student() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="">
        <h2> Controlled by React</h2>
        <label> Enter your company: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />{" "}
        <br />
        <label> Why in this company: </label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>{" "}
        <br />
        <label> Author name: </label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario"> Mario </option>
          <option value="Yashin"> Yashin </option>
        </select>
        <br />
        <button onClick={handleChange}>Ready to go</button>
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
}

export default Student;
