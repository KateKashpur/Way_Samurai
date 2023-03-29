import React from "react";
import col from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={col.posts}>

     
      <Post message='Hi, how are you?'
      like="15"/>
      <Post message="I'ts my first post"
      like="20"/>
   
      </div>
    </div>
  );
};

export default MyPosts;
