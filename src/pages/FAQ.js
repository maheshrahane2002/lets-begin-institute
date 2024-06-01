import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What courses do you offer?',
      answer: 'We offer a variety of courses in Python programming, data science, and data analytics. Check our Courses page for more details.',
    },
    {
      question: 'How can I enroll in a course?',
      answer: 'You can enroll in a course by visiting our Courses page and selecting the course you are interested in. Follow the enrollment instructions provided there.',
    },
    {
      question: 'Do you offer online classes?',
      answer: 'Yes, we offer both online and in-person classes. Check the specific course details for more information.',
    },
    {
      question: 'What is the duration of the courses?',
      answer: 'The duration of our courses varies. Please refer to the specific course page for detailed information on the duration.',
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept various payment methods including credit cards, debit cards, and online bank transfers. More details are provided during the enrollment process.',
    },
    {
      question: 'Do you provide any certification?',
      answer: 'Yes, upon successful completion of a course, we provide a certificate of completion which you can use to showcase your skills.',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded">
            <button
              className="w-full text-left p-4 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl font-semibold">{faq.question}</h3>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t border-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
