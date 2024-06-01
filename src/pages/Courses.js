import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courseList = [
    { id: 1, name: 'Python Basics' },
    { id: 2, name: 'Data Science with Python' },
    { id: 3, name: 'Data Analytics with Python' },
    { id: 4, name: 'Advanced Python Programming' },
    { id: 5, name: 'SQL Fundamentals' }, // New course
    { id: 6, name: 'Power BI Essentials' } // New course
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Our Courses</h2>
      <ul>
        {courseList.map(course => (
          <li key={course.id} className="mb-2">
            <Link to={`/courses/${course.id}`} className="text-blue-600 hover:underline">
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;