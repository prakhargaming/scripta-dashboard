import React, { useState } from 'react';
import Modal from './Modal';

const people = [
    { name: 'Robert Taylor', title: 'Data Scientist', email: 'robert.taylor@example.com', role: 'Lead' },
    { name: 'Lisa Anderson', title: 'Quality Assurance', email: 'lisa.anderson@example.com', role: 'Member' },
    { name: 'James Martinez', title: 'Systems Analyst', email: 'james.martinez@example.com', role: 'Senior' },
    { name: 'Patricia Harris', title: 'Database Administrator', email: 'patricia.harris@example.com', role: 'Member' },
    { name: 'Daniel Clark', title: 'Mobile Developer', email: 'daniel.clark@example.com', role: 'Lead' },
    { name: 'Nancy Rodriguez', title: 'Business Analyst', email: 'nancy.rodriguez@example.com', role: 'Member' },
    { name: 'William White', title: 'Network Engineer', email: 'william.white@example.com', role: 'Senior' },
    { name: 'Karen Lewis', title: 'Product Owner', email: 'karen.lewis@example.com', role: 'Manager' },
    { name: 'Thomas Moore', title: 'Cloud Architect', email: 'thomas.moore@example.com', role: 'Lead' },
    { name: 'Susan Hall', title: 'Scrum Master', email: 'susan.hall@example.com', role: 'Member' },
    { name: 'Joseph Young', title: 'Security Specialist', email: 'joseph.young@example.com', role: 'Senior' },
    { name: 'Donna King', title: 'Technical Writer', email: 'donna.king@example.com', role: 'Member' },
    { name: 'Richard Scott', title: 'AI Engineer', email: 'richard.scott@example.com', role: 'Lead' }
  ];
  
export default function Scored() {
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
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Scored Resumes</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all resumes that have been automatically scored by our system.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                </div>
            </div>
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
                                    <th
                                        scope="col"
                                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                                    >
                                        Name
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Title
                                    </th>
                                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Email
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
                                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8 hover:text-blue-600 cursor-pointer"
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