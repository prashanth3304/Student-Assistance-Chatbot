import React from 'react';
import { Link } from 'react-router-dom';

const educationLevels = [
  {
    level: '10th Grade',
    description: 'Secondary education resources and guidance',
    icon: '📚',
  },
  {
    level: '12th Grade',
    description: 'Higher secondary education materials',
    icon: '📖',
  },
  {
    level: 'Undergraduate',
    description: 'Bachelor degree course materials',
    icon: '🎓',
  },
  {
    level: 'Postgraduate',
    description: 'Master degree specialized content',
    icon: '🔬',
  },
];

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Student Assistance System
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Access comprehensive academic resources, study materials, and guidance for all educational levels
        </p>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {educationLevels.map((level) => (
            <div
              key={level.level}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <div>
                <span className="text-4xl">{level.icon}</span>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  <Link to="/resources" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {level.level}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-gray-500">{level.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link
            to="/chat"
            className="block p-6 bg-indigo-50 rounded-lg shadow hover:bg-indigo-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-indigo-900">Interactive Chat Support</h3>
            <p className="mt-2 text-indigo-700">Get instant answers to your academic queries</p>
          </Link>
          <Link
            to="/career"
            className="block p-6 bg-green-50 rounded-lg shadow hover:bg-green-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-green-900">Career Guidance</h3>
            <p className="mt-2 text-green-700">Explore career paths and get personalized advice</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;