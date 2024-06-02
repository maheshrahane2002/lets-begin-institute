// src/pages/Blog.js

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const courses = [
    {
      id: 1,
      title: 'Python Basics',
      date: 'July 10, 2024',
      excerpt: 'Learn the basics of Python programming language...',
      path: '/courses/1',
    },
    {
      id: 2,
      title: 'Data Science with Python',
      date: 'July 25, 2024',
      excerpt: 'Explore how to use Python for data science...',
      path: '/courses/2',
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      date: 'August 5, 2024',
      excerpt: 'Enhance your Python skills with data analytics...',
      path: '/courses/3',
    },
    {
      id: 4,
      title: 'Advanced Python Programming',
      date: 'August 20, 2024',
      excerpt: 'Take your Python programming skills to the next level...',
      path: '/courses/4',
    },
    // New courses
    {
      id: 5,
      title: 'SQL Fundamentals',
      date: 'September 10, 2024',
      excerpt: 'Introduction to SQL fundamentals...',
      path: '/courses/5',
    },
    {
      id: 6,
      title: 'Power BI Essentials',
      date: 'September 25, 2024',
      excerpt: 'Master the essentials of Power BI for data visualization...',
      path: '/courses/6',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-2">{course.date}</p>
            <p className="mb-4">{course.excerpt}</p>
            <Link to={course.path} className="bg-blue-600 text-white px-4 py-2 rounded">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
