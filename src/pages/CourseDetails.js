import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  const courses = {
    1: { name: 'Python Basics', description: 'Learn the basics of Python.' },
    2: { name: 'Data Science with Python', description: 'Explore data science using Python.' },
    3: { name: 'Data Analytics with Python', description: 'Analyze data using Python tools.' },
    4: { name: 'Advanced Python Programming', description: 'Master advanced Python concepts.' },
    5: { name: 'SQL Fundamentals', description: 'Introduction to SQL fundamentals.' },
    6: { name: 'Power BI Essentials', description: 'Essential skills for using Power BI.' },
  };
  const course = courses[courseId];

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">{course.name}</h2>
      <p>{course.description}</p>
    </div>
  );
};

export default CourseDetails;
