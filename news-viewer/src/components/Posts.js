import React from 'react';
import NewsItem from "./NewsItem";
const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {posts.map(post => (
        <NewsItem key={post.url} article={post}>

        </NewsItem>
      ))}
    </div>
  );
};

export default Posts;
