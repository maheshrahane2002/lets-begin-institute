import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();

  const posts = {
    1: {
      title: 'Introduction to Python',
      date: 'June 1, 2024',
      content: 'Python is a versatile language that you can use on the backend, frontend, or full stack...',
    },
    2: {
      title: 'Data Science with Python',
      date: 'May 20, 2024',
      content: 'Data science is an exciting field that uses algorithms, data analysis, and machine learning to extract knowledge and insights from data...',
    },
    3: {
      title: 'Advanced Python Tips',
      date: 'April 15, 2024',
      content: 'In this post, we will go over some advanced Python tips and tricks to help you write cleaner, more efficient code...',
    },
  };

  const post = posts[postId];

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
