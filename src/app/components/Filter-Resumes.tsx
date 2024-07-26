import React, { useState } from 'react';
import Modal from './Modal';
import Textarea from './Textarea';

const people = [
  { name: 'Michael Brown', title: 'Full-stack Developer', email: 'Google', role: 'Member' },
  { name: 'Sarah Davis', title: 'Project Manager', email: 'Meta', role: 'Manager' },
  { name: 'Lisa Anderson', title: 'Quality Assurance', email: 'NVIDIA', role: 'Member' },
  { name: 'James Martinez', title: 'Systems Analyst', email: 'NVIDIA', role: 'Senior' },
  { name: 'Patricia Harris', title: 'Database Administrator', email: 'NVIDIA', role: 'Member' },
  { name: 'Daniel Clark', title: 'Mobile Developer', email: 'NVIDIA', role: 'Lead' },
  { name: 'Nancy Rodriguez', title: 'Business Analyst', email: 'NVIDIA', role: 'Member' },
  { name: 'William White', title: 'Network Engineer', email: 'NVIDIA', role: 'Senior' },
  { name: 'Karen Lewis', title: 'Product Owner', email: 'NVIDIA', role: 'Manager' },
  { name: 'Thomas Moore', title: 'Cloud Architect', email: 'NVIDIA', role: 'Lead' },
  { name: 'Susan Hall', title: 'Scrum Master', email: 'NVIDIA', role: 'Member' },
  { name: 'Joseph Young', title: 'Security Specialist', email: 'NVIDIA', role: 'Senior' },
  { name: 'Donna King', title: 'Technical Writer', email: 'NVIDIA', role: 'Member' },
  { name: 'Richard Scott', title: 'AI Engineer', email: 'NVIDIA', role: 'Lead' }
];

export default function Filtered() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState([]);

    const handleNameClick = (person) => {
        setSelectedPerson(person);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPerson(null);
    };

    const handleCheckboxChange = (email) => {
        setSelectedPeople(prev => 
            prev.includes(email) 
                ? prev.filter(e => e !== email) 
                : [...prev, email]
        );
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedPeople(people.map(person => person.email));
        } else {
            setSelectedPeople([]);
        }
    };

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Filtered Resumes</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Enter a prompt or a job description in the text box below. This prompt will be sent to our system and will show all the resumes that match the prompt.
                    </p>
                    <ul className="list-disc mt-2 text-sm text-gray-700 pl-5 space-y-1">
                        <li className="ml-4">"Show me resumes that are proficient in Java"</li>
                        <li className="ml-4">"Resumes that show Python and C++ experience"</li>
                        <li className="ml-4">"Return all the resumes that match this job description: [paste the job description here]"</li>
                    </ul>ley
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">    
                </div>
            </div>
            <div className="h-7"></div>
            <Textarea />
            <div className="h-2"></div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                            onChange={handleSelectAll}
                                            checked={selectedPeople.length === people.length}
                                        />
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Company
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Role
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {people.map((person) => (
                                    <tr key={person.email}>
                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                                checked={selectedPeople.includes(person.email)}
                                                onChange={() => handleCheckboxChange(person.email)}
                                            />
                                        </td>
                                        <td 
                                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer"
                                            onClick={() => handleNameClick(person)}
                                        >
                                            {person.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isModalOpen && <Modal person={selectedPerson} closeModal={closeModal} />}
        </div>
    )
}