import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title}) => { 
	return (
    <div>
      <h1 style={{ textAlighn: 'center' }}> {title} </h1>
      {post.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};