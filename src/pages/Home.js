import React from 'react';
import { Link } from 'react-router-dom';

const LatestCourse = ({ course }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-6">
    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
    <p className="mb-2">{course.date}</p>
    <p className="mb-4">{course.description}</p>
    <Link to={`/courses/${course.id}`} className="text-blue-600 hover:underline">Learn More</Link>
  </div>
);

const Home = () => {
  const latestCourses = [
    {
      id: 5,
      title: 'SQL Fundamentals',
      date: 'July 15, 2024',
      description: 'Learn the fundamentals of SQL for database management.',
    },
    {
      id: 6,
      title: 'Power BI Essentials',
      date: 'July 30, 2024',
      description: 'Master the essentials of Power BI for data visualization.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to Let's Begin..!</h2>
      <p className="mb-4">
        Welcome to Let's Begin..!, where we offer a variety of Python-related courses including data science, data analytics, and more. Explore our courses and start your learning journey with us!
      </p>
      
      <h3 className="text-2xl font-bold mb-4">Latest Courses</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {latestCourses.map(course => (
          <LatestCourse key={course.id} course={course} />
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-2">For inquiries and assistance, please contact us:</h3>
        <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@letsbegininstitute.com">info@letsbegininstitute.com</a></p>
        <p className="mb-2"><strong>Phone:</strong> <a href="tel:+1234567890">+1234567890</a></p>
      </div>
    </div>
  );
};

export default Home;
