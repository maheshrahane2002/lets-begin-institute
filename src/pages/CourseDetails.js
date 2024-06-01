import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const courses = {
    1: { name: 'Python Basics', description: 'Learn the basics of Python.', duration: '4 weeks', fee: '$200', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
    2: { name: 'Data Science with Python', description: 'Explore data science using Python.', duration: '6 weeks', fee: '$300', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
    3: { name: 'Data Analytics with Python', description: 'Analyze data using Python tools.', duration: '8 weeks', fee: '$400', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
    4: { name: 'Advanced Python Programming', description: 'Master advanced Python concepts.', duration: '6 weeks', fee: '$300', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
    5: { name: 'SQL Fundamentals', description: 'Introduction to SQL fundamentals.', duration: '4 weeks', fee: '$200', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
    6: { name: 'Power BI Essentials', description: 'Essential skills for using Power BI.', duration: '5 weeks', fee: '$250', registrationLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfnK-meoG-2pU7CZe4z3wpBb3pOhbOTi0stEC64QzXW-_TxDA/viewform?pli=1' },
  };
  const course = courses[courseId];

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="container mx-auto p-4 course-details-container">
      <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
      <p>{course.description}</p>
      <div>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p style={{ marginBottom: '10px' }}><strong>Fee:</strong> {course.fee}</p>
        <a href={course.registrationLink} className="bg-blue-600 text-white px-4 py-2 rounded" target="_blank" rel="noopener noreferrer">Register</a>
      </div>
    </div>
  );
};

export default CourseDetails;
