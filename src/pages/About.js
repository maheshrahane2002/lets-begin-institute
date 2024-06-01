import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">About Us</h2>
      <p className="text-lg md:text-xl lg:text-2xl mb-8 text-center">
        Let's Begin..! Institute is dedicated to providing high-quality education in Python programming, data science, and data analytics. Our experienced instructors are here to help you achieve your goals.
      </p>
      
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Founder</h3>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-lg mb-2"><strong>Mr. Ashok Kotkar</strong> - Lead Software Engineer Implementation (Sutherland Healthcare, USA)</p>
          <p className="text-sm md:text-base">Email: <a href="mailto:ashok.karbharikotkar@sutherlandglobal.com">ashok.karbharikotkar@sutherlandglobal.com</a></p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Managing Director</h3>
        <div className="bg-gray-100 rounded-lg p-4">
          <p className="text-lg mb-2"><strong>Mrs. Vandana Kotkar</strong> - Assistant Professor (Sinhgad Institute, Pune)</p>
          <p className="text-sm md:text-base">Email: <a href="mailto:vandanakotkar12@gmail.com">vandanakotkar12@gmail.com</a></p>
        </div>
      </div>
      
      {/* Add more external functionalities here */}
    </div>
  );
};

export default About;
