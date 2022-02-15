import React, { useState } from "react";
import uniqid from "uniqid";
import axios from "axios";

function AddPost() {
  const [title, settitle] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [description, setdescription] = useState("");

  function addpost() {
    var post = {
      title: title,
      imageurl: imageurl,
      description: description,
      postid: uniqid(),
    };

    axios
      .post("/api/post/addnewpost", post)
      .then((res) => {
        alert(res.data);
      })
      .then((err) => {
        console.log(err);
      });
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="title"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url"
          value={imageurl}
          onChange={(e) => {
            setimageurl(e.target.value);
          }}
        />
        <textarea
          className="form-control"
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <button onClick={addpost} className="btn btn-primary  ">
          ADD POST{" "}
        </button>
      </div>
    </div>
  );
}

export default AddPost;
