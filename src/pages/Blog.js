import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const courses = [
    {
      id: 1,
      title: 'Python Basics',
      date: 'June 1, 2024',
      excerpt: 'Learn the basics of Python programming language...',
      path: '/courses/1', // Path to the course details page
    },
    {
      id: 2,
      title: 'Data Science with Python',
      date: 'May 20, 2024',
      excerpt: 'Explore how to use Python for data science...',
      path: '/courses/2',
    },
    {
      id: 3,
      title: 'Data Analytics with Python',
      date: 'April 15, 2024',
      excerpt: 'Enhance your Python skills with data analytics...',
      path: '/courses/3',
    },
    {
      id: 4,
      title: 'Advanced Python Programming',
      date: 'March 10, 2024',
      excerpt: 'Take your Python programming skills to the next level...',
      path: '/courses/4',
    },
    {
      id: 5,
      title: 'SQL Fundamentals',
      date: 'February 5, 2024',
      excerpt: 'Learn the fundamentals of SQL for database management...',
      path: '/courses/5',
    },
    {
      id: 6,
      title: 'Power BI Essentials',
      date: 'January 1, 2024',
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
