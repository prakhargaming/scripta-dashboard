import React, { useState, useEffect } from 'react';
import Modal from './Name-Modal';
import Textarea from './Textarea';
import people from './people';

export default function Filtered() {
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
            setSelectedPeople(people.map(person => person.email));
        } else {
            setSelectedPeople([]);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const search_table = () => {
            var input, filter, table, tr, td, i, j;
            input = document.getElementById("search_field_input");
            if (!input) return; // Ensure input exists
            filter = input.value.toUpperCase();
            table = document.getElementById("table_id");
            if (!table) return; // Ensure table exists
            tr = table.getElementsByTagName("tr");

            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td");
                for (j = 0; j < td.length; j++) {
                    let tdata = td[j];
                    if (tdata) {
                        if (tdata.innerHTML.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                            break;
                        } else {
                            tr[i].style.display = "none";
                        }
                    }
                }
            }
        };

        search_table();
    }, [searchTerm]);

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Filtered Resumes</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        Enter a prompt or a job description in the text box below. This prompt will be sent to our system and will show all the resumes that match the prompt. There are two buttons you can press to send a prompt to the system. If your query contains a lot of specific details, press long. If it's a simple question, press short.
                    </p>
                    <ul className="list-disc mt-2 text-sm text-gray-700 pl-5 space-y-1">
                        <li className="ml-4">"Show me resumes that are proficient in Java"</li>
                        <li className="ml-4">"Resumes that show Python and C++ experience"</li>
                        <li className="ml-4">"Return all the resumes that match this job description: [paste the job description here]"</li>
                    </ul>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">    
                </div>
            </div>
            <div className="h-7"></div>
            <Textarea />

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
            <button
                type="button"
                className="rounded bg-blue-600 px-2 py-1 text-xl font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                Send Interview
            </button>
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
