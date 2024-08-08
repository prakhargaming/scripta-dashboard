import React, { useState } from 'react';
import Question_Modal from './Question-Modal';
import peopleII from './peopleII';
import peopleIII from './peopleIII'


const projects = [
  { name: 'Java, Python, .NET', initials: 'JA', href: '#', members: 16, bgColor: 'bg-pink-600', date: 'November 9, 2024' },
  { name: 'C, C++, low-level', initials: 'C', href: '#', members: 6, bgColor: 'bg-purple-600', date: 'October 7, 2024' },
  { name: 'Resumes that are proficient with machine learning skills', initials: 'RE', href: '#', members: 16, bgColor: 'bg-yellow-500', date: 'December 20, 2024' },
  { name: 'Applicants that are good at React, Typescript, and Node', initials: 'AP', href: '#', members: 8, bgColor: 'bg-green-500', date: 'November 5, 2024' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PastQuestions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPeople, setSelectedPeople] = useState(null);
    const [selectedQuestion, setSelectedQuestion] = useState('');
    const [applicantCount, setApplicantCount] = useState(0);
  
    const handleCardClick = (project) => {
      setSelectedPeople(peopleII.slice(0, project.members)); // Only select the number of people shown on the card
      setSelectedQuestion(project.name);
      setApplicantCount(project.members);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedPeople(null);
      setSelectedQuestion('');
      setApplicantCount(0);
    };
    
return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">Past Questions</h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all questions that you have previously asked our system. Click on a card for the question asked and a corresponding list of applicants.
        </p>
      </div>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 pt-4">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm cursor-pointer" onClick={() => handleCardClick(project)}>
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <p className="font-medium text-gray-900 hover:text-gray-600 block truncate" title={project.name}>
                  {project.name}
                </p>
                <p className="text-gray-500">{project.members} Applicants</p>
                <p className="text-gray-500">{project.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Question_Modal 
          people={selectedPeople} 
          closeModal={closeModal} 
          questionTitle={selectedQuestion}
          applicantCount={applicantCount}
        />
      )}
    </div>
  );
}