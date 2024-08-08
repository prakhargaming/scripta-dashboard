import React, { useState } from 'react';
import Interview_Modal from './Interview-Modal';
import peopleIV from './peopleIV';

export default function Tracker() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [selectedPeople, setSelectedPeople] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

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
            setSelectedPeople(peopleIV.map(person => person.email));
        } else {
            setSelectedPeople([]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredPeople = peopleIV.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Interview Tracker</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        These are all applicants that have had an interview sent to them. Click a name to check their status.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            <div className="h-1"></div>

            <div className="flex items-end space-x-4">
                <div className="flex-grow">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                        Filter resumes based on company, role, etc.
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            id="search_field_input"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle">
                        <table id="table_id" className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                                        <input
                                            type="checkbox"
                                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                            onChange={handleSelectAll}
                                            checked={selectedPeople.length === peopleIV.length}
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
                                        Interview Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {filteredPeople.map((person) => (
                                    <tr key={person.email}>
                                        <td className="relative px-7 sm:w-12 sm:px-6">
                                            <input
                                                type="checkbox"
                                                className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
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
                                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                                            <span className={`
                                                ${person.status === 'taken' ? 'text-yellow-500 font-bold' : ''}
                                                ${person.status === 'sent' ? 'text-blue-500 font-bold' : ''}
                                                ${person.status === 'scored' ? 'text-green-500 font-bold' : ''}
                                            `}>
                                                {person.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isModalOpen && <Interview_Modal person={selectedPerson} closeModal={closeModal} />}
        </div>
    );
}
