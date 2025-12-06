import React, { useState } from 'react';

const resources = {
  '10th Grade': {
    SSC: {
      syllabus: [
        { title: 'Mathematics Syllabus', link: 'https://scert.telangana.gov.in/PDF/publication/syllabus/Maths_EM.pdf' },
        { title: 'Physical Science Syllabus', link: 'https://www.entrancezone.com/admissions/ts-ssc-syllabus/' },
        { title: 'Biological Science Syllabus', link: 'https://www.entrancezone.com/admissions/ts-ssc-syllabus/' },
        { title: 'Social Studies Syllabus', link: 'https://www.entrancezone.com/admissions/ts-ssc-syllabus/' },
        { title: 'Telugu/Hindi Syllabus', link: 'https://www.entrancezone.com/admissions/ts-ssc-syllabus/' },
        { title: 'English Syllabus', link: 'https://www.entrancezone.com/admissions/ts-ssc-syllabus/' },
      ],
      textbooks: [
        { title: 'Mathematics Textbook', link: 'https://scert.telangana.gov.in/pdf/publication/ebooks2019/xth%20maths%20em.pdf' },
        { title: 'Physical Science Textbook', link: 'https://scert.telangana.gov.in/pdf/publication/ebooks2019/x%20physics%20em.pdf' },
        { title: 'Biological Science Textbook', link: 'https://www.scert.telangana.gov.in/pdf/publication/ebooks2019/x%20biology%20em.pdf' },
        { title: 'Social Studies Textbook', link: 'https://scert.telangana.gov.in/pdf/publication/ebooks2019/10th%20social%20em.pdf' },
        { title: 'Telugu Textbook', link: 'https://scert.telangana.gov.in/pdf/publication/ebooks2019/10th%20telugu%20fl%202020-21.pdf' },
        { title: 'English Textbook', link: 'https://www.scert.telangana.gov.in/pdf/publication/ebooks2019/10th%20class%20english%202020-21%2020.pdf' },
        { title: 'Hindi Textbook', link: 'https://scert.telangana.gov.in/pdf/publication/ebooks/10%20hindi%20sl%202023-24.pdf' },
      ],
      extraNotes: [
        { title: 'Mathematics Extra Notes', link: '#' },
        { title: 'Science Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Mathematics Tutorials', link: 'https://youtu.be/oPtqAnh8c78?si=e0LPyDmE2l_GgphG' },
        { title: 'Science Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Mathematics Sample Paper', link: '#' },
        { title: 'Science Sample Paper', link: '#' },
      ],
    },
    CBSE: {
      syllabus: [
        { title: 'Mathematics Syllabus', link: '#' },
        { title: 'Science Syllabus', link: '#' },
        { title: 'Social Science Syllabus', link: '#' },
        { title: 'English Syllabus', link: '#' },
        { title: 'Hindi/Sanskrit Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Mathematics NCERT', link: '#' },
        { title: 'Science NCERT', link: '#' },
        { title: 'Social Science NCERT', link: '#' },
        { title: 'English NCERT', link: '#' },
        { title: 'Hindi/Sanskrit NCERT', link: '#' },
      ],
      extraNotes: [
        { title: 'Mathematics Extra Notes', link: '#' },
        { title: 'Science Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Mathematics Tutorials', link: '#' },
        { title: 'Science Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Mathematics Sample Paper', link: '#' },
        { title: 'Science Sample Paper', link: '#' },
      ],
    },
  },
  '12th Grade': {
    Inter: {
      syllabus: [
        { title: 'Mathematics Syllabus', link: '#' },
        { title: 'Physics Syllabus', link: '#' },
        { title: 'Chemistry Syllabus', link: '#' },
        { title: 'Biology Syllabus', link: '#' },
        { title: 'English Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Mathematics Textbook', link: '#' },
        { title: 'Physics Textbook', link: '#' },
        { title: 'Chemistry Textbook', link: '#' },
        { title: 'Biology Textbook', link: '#' },
        { title: 'English Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Mathematics Extra Notes', link: '#' },
        { title: 'Physics Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Mathematics Tutorials', link: '#' },
        { title: 'Physics Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Mathematics Sample Paper', link: '#' },
        { title: 'Physics Sample Paper', link: '#' },
      ],
    },
    Diploma: {
      syllabus: [
        { title: 'Mechanical Engineering Syllabus', link: '#' },
        { title: 'Electrical Engineering Syllabus', link: '#' },
        { title: 'Civil Engineering Syllabus', link: '#' },
        { title: 'Electronics Engineering Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Mechanical Engineering Textbook', link: '#' },
        { title: 'Electrical Engineering Textbook', link: '#' },
        { title: 'Civil Engineering Textbook', link: '#' },
        { title: 'Electronics Engineering Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Mechanical Engineering Extra Notes', link: '#' },
        { title: 'Electrical Engineering Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Mechanical Engineering Tutorials', link: '#' },
        { title: 'Electrical Engineering Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Mechanical Engineering Sample Paper', link: '#' },
        { title: 'Electrical Engineering Sample Paper', link: '#' },
      ],
    },
  },
  Undergraduate: {
    BTech: {
      syllabus: [
        { title: 'Computer Science Syllabus', link: '#' },
        { title: 'Electrical Engineering Syllabus', link: '#' },
        { title: 'Mechanical Engineering Syllabus', link: '#' },
        { title: 'Civil Engineering Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Computer Science Textbook', link: '#' },
        { title: 'Electrical Engineering Textbook', link: '#' },
        { title: 'Mechanical Engineering Textbook', link: '#' },
        { title: 'Civil Engineering Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Computer Science Extra Notes', link: '#' },
        { title: 'Electrical Engineering Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Computer Science Tutorials', link: '#' },
        { title: 'Electrical Engineering Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Computer Science Sample Paper', link: '#' },
        { title: 'Electrical Engineering Sample Paper', link: '#' },
      ],
    },
    BBA: {
      syllabus: [
        { title: 'Management Syllabus', link: '#' },
        { title: 'Marketing Syllabus', link: '#' },
        { title: 'Finance Syllabus', link: '#' },
        { title: 'Accounting Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Management Textbook', link: '#' },
        { title: 'Marketing Textbook', link: '#' },
        { title: 'Finance Textbook', link: '#' },
        { title: 'Accounting Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Management Extra Notes', link: '#' },
        { title: 'Marketing Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Management Tutorials', link: '#' },
        { title: 'Marketing Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Management Sample Paper', link: '#' },
        { title: 'Marketing Sample Paper', link: '#' },
      ],
    },
  },
  Postgraduate: {
    MTech: {
      syllabus: [
        { title: 'Data Science Syllabus', link: '#' },
        { title: 'Artificial Intelligence Syllabus', link: '#' },
        { title: 'Software Engineering Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Data Science Textbook', link: '#' },
        { title: 'Artificial Intelligence Textbook', link: '#' },
        { title: 'Software Engineering Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Data Science Extra Notes', link: '#' },
        { title: 'Artificial Intelligence Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Data Science Tutorials', link: '#' },
        { title: 'Artificial Intelligence Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Data Science Sample Paper', link: '#' },
        { title: 'Artificial Intelligence Sample Paper', link: '#' },
      ],
    },
    MBA: {
      syllabus: [
        { title: 'Business Strategy Syllabus', link: '#' },
        { title: 'Marketing Management Syllabus', link: '#' },
        { title: 'Finance Management Syllabus', link: '#' },
      ],
      textbooks: [
        { title: 'Business Strategy Textbook', link: '#' },
        { title: 'Marketing Management Textbook', link: '#' },
        { title: 'Finance Management Textbook', link: '#' },
      ],
      extraNotes: [
        { title: 'Business Strategy Extra Notes', link: '#' },
        { title: 'Marketing Management Extra Notes', link: '#' },
      ],
      tutorials: [
        { title: 'Business Strategy Tutorials', link: '#' },
        { title: 'Marketing Management Tutorials', link: '#' },
      ],
      papers: [
        { title: 'Business Strategy Sample Paper', link: '#' },
        { title: 'Marketing Management Sample Paper', link: '#' },
      ],
    },
  },
};

function Resources() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setSelectedBoard(null);
  };

  const renderSection = (section) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {Object.entries(section).map(([key, items]) => (
        <div key={key} className="bg-white shadow-xl rounded-xl p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2 text-blue-700">{key}</h3>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  • {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-sky-300 py-10 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 drop-shadow-lg">📚 Educational Resources</h2>
          <p className="text-lg text-gray-700 mt-2">Find Syllabus, Textbooks, Notes, and more for your level.</p>
        </div>

        {/* Level Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(resources).map((level) => (
            <button
              key={level}
              onClick={() => handleLevelChange(level)}
              className={`px-6 py-2 text-white font-medium rounded-full shadow-md transition duration-200 ${
                selectedLevel === level
                  ? 'bg-gradient-to-r from-blue-600 to-blue-800'
                  : 'bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700'
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Board/Stream Selection */}
        {selectedLevel && (
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(resources[selectedLevel]).map((board) => (
              <button
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={`px-5 py-2 text-white font-medium rounded-full shadow-md transition duration-200 ${
                  selectedBoard === board
                    ? 'bg-gradient-to-r from-green-600 to-green-800'
                    : 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700'
                }`}
              >
                {board}
              </button>
            ))}
          </div>
        )}

        {/* Display Resource Sections */}
        {selectedLevel && selectedBoard && (
          <div>
            {Object.entries(resources[selectedLevel][selectedBoard]).map(([sectionName, items]) => (
              <div key={sectionName} className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4 border-b-2 border-blue-400 pb-2">
                  {sectionName}
                </h2>
                {renderSection({ [sectionName]: items })}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Resources;