// src/pages/CourseDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const courses = {
    1: { name: 'Python Basics', description: 'Learn the basics of Python.', duration: '4 weeks', fees: '$100' },
    2: { name: 'Data Science with Python', description: 'Explore data science using Python.', duration: '8 weeks', fees: '$200' },
    3: { name: 'Data Analytics with Python', description: 'Analyze data using Python tools.', duration: '6 weeks', fees: '$150' },
    4: { name: 'Advanced Python Programming', description: 'Master advanced Python concepts.', duration: '10 weeks', fees: '$250' },
    5: { name: 'SQL Fundamentals', description: 'Introduction to SQL fundamentals.', duration: '5 weeks', fees: '$120' },
    6: { name: 'Power BI Essentials', description: 'Essential skills for using Power BI.', duration: '6 weeks', fees: '$180' },
  };
  const course = courses[courseId];

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
      <p>{course.description}</p>
      <p className="mt-4"><strong>Duration:</strong> {course.duration}</p>
      <p className="mt-2 mb-4"><strong>Fees:</strong> {course.fees}</p>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-4 py-2 rounded">Register</a>
    </div>
  );
};

export default CourseDetails;
