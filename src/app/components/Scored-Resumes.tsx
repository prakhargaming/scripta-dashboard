import React, { useState } from 'react';
import Question_Modal from './Question-Modal';

const projects = [
  { name: 'Java, Python, .NET', initials: 'JA', href: '#', members: 16, bgColor: 'bg-pink-600', date: 'November 9, 2024' },
  { name: 'C, C++, low-level', initials: 'C', href: '#', members: 6, bgColor: 'bg-purple-600', date: 'October 7, 2024' },
  { name: 'Resumes that are proficient with...', initials: 'RE', href: '#', members: 16, bgColor: 'bg-yellow-500', date: 'December 20, 2024' },
  { name: 'Applicants that are good at React...', initials: 'AP', href: '#', members: 8, bgColor: 'bg-green-500', date: 'November 5, 2024' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PastQuestions() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);

    const handleNameClick = (person) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPerson(null);
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
            <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
                <div
                className={classNames(
                    project.bgColor,
                    'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
                )}
                onClick={() => handleNameClick(person)}
                >
                {project.initials}
                </div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-2 text-sm">
                    <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600 block truncate" title={project.name}>
                    {project.name}
                    </a>
                    <p className="text-gray-500">{project.members} Applicants</p>
                    <p className="text-gray-500">{project.date}</p>
                </div>
                </div>
            </li>
            ))}
        </ul>
            {isModalOpen && <Question_Modal people={selectedPerson} closeModal={closeModal} />}
        </div>
    )
}