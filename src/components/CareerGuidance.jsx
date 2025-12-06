import React, { useState } from 'react';
import { motion } from 'framer-motion'; // For animations

const careerPaths = {
  '10th': {
    options: [
      {
        name: 'Intermediate',
        exams: [],
        steps: ['Choose MPC, BiPC, MEC, or HEC', 'Focus on base subjects for future careers'],
        resources: [
          { name: 'Telangana Intermediate Board', link: 'https://tsbie.cgg.gov.in/' },
        ],
        careerPaths: ['Engineer', 'Doctor', 'Businessperson', 'Teacher'],
      },
      {
        name: 'Polytechnic',
        exams: ['TS POLYCET', 'AP POLYCET'],
        steps: ['Prepare for POLYCET entrance exam', 'Apply for diploma colleges'],
        resources: [
          { name: 'TS POLYCET Site', link: 'https://polycet.sbtet.telangana.gov.in/' },
          { name: 'AP POLYCET Site', link: 'https://polycetap.nic.in/' },
        ],
        careerPaths: ['Engineer (Diploma)', 'Technician', 'Production Manager'],
      },
      {
        name: 'ITI/Vocational',
        exams: [],
        steps: ['Choose trade like Electrician, Fitter, etc.', 'Join government/private ITI'],
        resources: [
          { name: 'NCVT ITI Portal', link: 'https://www.ncvtmis.gov.in/' },
        ],
        careerPaths: ['Electrician', 'Plumber', 'Machinist', 'Welder'],
      },
    ],
  },

  'Inter/Diploma': {
    options: [
      {
        name: 'B.Tech',
        exams: ['EAMCET', 'JEE Mains'],
        steps: [
          'Prepare for EAMCET/JEE after Inter or Diploma',
          'Choose a branch like CSE, ECE, Mech, etc.',
        ],
        resources: [
          { name: 'TS EAMCET', link: 'https://eamcet.tsche.ac.in/' },
          { name: 'JEE Mains', link: 'https://jeemain.nta.nic.in/' },
        ],
        careerPaths: ['Software Engineer', 'Mechanical Engineer', 'Civil Engineer'],
      },
      {
        name: 'Paramedical/Nursing',
        exams: ['NEET (for BiPC)', 'State Paramedical Exams'],
        steps: ['Apply for paramedical diploma/degree programs'],
        resources: [
          { name: 'NEET Info', link: 'https://neet.nta.nic.in/' },
        ],
        careerPaths: ['Nurse', 'Pharmacist', 'Radiologist', 'Lab Technician'],
      },
    ],
  },

  'B.Tech': {
    options: [
      {
        name: 'M.Tech',
        exams: ['GATE'],
        steps: ['Prepare for GATE exam', 'Apply for PG in top engineering colleges'],
        resources: [
          { name: 'GATE Official', link: 'https://gate.iitk.ac.in/' },
        ],
        careerPaths: ['Research Scientist', 'Lecturer/Professor', 'R&D Engineer'],
      },
      {
        name: 'MBA',
        exams: ['CAT', 'MAT', 'ICET'],
        steps: ['Prepare for entrance', 'Focus on aptitude and reasoning'],
        resources: [
          { name: 'CAT Info', link: 'https://iimcat.ac.in/' },
        ],
        careerPaths: ['Business Analyst', 'Marketing Manager', 'Product Manager'],
      },
      {
        name: 'Government Jobs',
        exams: ['SSC CGL', 'RRB JE', 'UPSC'],
        steps: ['Start preparation during final year or after graduation'],
        resources: [
          { name: 'SSC', link: 'https://ssc.nic.in/' },
          { name: 'UPSC', link: 'https://upsc.gov.in/' },
        ],
        careerPaths: ['IAS Officer', 'IPS Officer', 'RRB Engineer', 'SSC CGL Officer'],
      },
    ],
  },
};

function CareerGuidance() {
  const [selectedLevel, setSelectedLevel] = useState('10th');
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-green-400 to-yellow-500 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-opacity-60 backdrop-blur-lg"></div>
      <div className="relative z-10 mx-auto max-w-7xl text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-6 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore Career Paths
        </motion.h2>
        <p className="text-lg mb-8">
          Select your current education level to explore the next steps in your career journey.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.keys(careerPaths).map((level) => (
            <motion.button
              key={level}
              onClick={() => setSelectedLevel(level)}
              className={`text-white font-semibold py-4 px-6 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                selectedLevel === level
                  ? 'bg-indigo-700 shadow-xl'
                  : 'bg-pink-600 hover:bg-pink-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {level}
            </motion.button>
          ))}
        </div>

        {selectedLevel && (
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">Next Steps After {selectedLevel}</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {careerPaths[selectedLevel].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className="text-white bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500 py-3 px-6 rounded-xl font-medium transform transition-all hover:scale-105"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {option.name}
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {selectedOption && (
          <div className="mt-12 p-8 bg-white bg-opacity-90 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-900 mb-4">How to Approach {selectedOption.name}</h3>
            <p className="text-gray-700">
              Here's what you need to know about pursuing <span className="font-bold">{selectedOption.name}</span>:
            </p>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              {selectedOption.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>

            <p className="font-semibold mt-6">Recommended Resources:</p>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              {selectedOption.resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="font-semibold mt-6">Potential Career Paths:</p>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              {selectedOption.careerPaths.map((career, index) => (
                <li key={index}>{career}</li>
              ))}
            </ul>

            <p className="font-semibold mt-6">Exams to Prepare For:</p>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              {selectedOption.exams.length === 0 ? (
                <li>No entrance exams required</li>
              ) : (
                selectedOption.exams.map((exam, index) => (
                  <li key={index}>{exam}</li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CareerGuidance;
