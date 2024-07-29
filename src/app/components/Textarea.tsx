'use client'

import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CalendarIcon, PaperClipIcon, TagIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import AWS from 'aws-sdk';

AWS.config.update({
});

const s3 = new AWS.S3();

const companies = [
  { id: 1, name: "Apple Inc." },
  { id: 2, name: "Google LLC" },
  // ... (add all companies from comboboxData.companies)
];

const jobPositions = [
  { id: 1, name: "Software Engineer" },
  { id: 2, name: "Data Scientist" },
  // ... (add all positions from comboboxData.jobPositions)
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function TextArea() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(companies[0]);
  const [selectedPosition, setSelectedPosition] = useState(jobPositions[0]);
  const [error, setError] = useState(null);
  const [postType, setPostType] = useState('short');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const uploadToDigitalOcean = async (textContent, company, position, type) => {
    const uploadContent = JSON.stringify({
      title: title,
      text: textContent,
      company: company?.name || '',
      position: position?.name || '',
      type: type
    });

    const params = {
      Bucket: 'scriptaaudiofiles',
      Key: `text-${Date.now()}.json`,
      Body: uploadContent,
      ACL: 'public-read',
      ContentType: 'application/json'
    };

    try {
      const data = await s3.upload(params).promise();
      console.log('Content uploaded successfully', data.Location);
      alert("Content uploaded successfully: " + data.Location);
    } catch (error) {
      console.error('Error uploading content:', error);
      alert("Error uploading content: " + error.message);
      setError('Error uploading content: ' + error.message);
    }
  };

  const handlePost = (e, type) => {
    e.preventDefault();
    setPostType(type);
    if (text) {
      uploadToDigitalOcean(text, selectedCompany, selectedPosition, type);
    } else {
      setError('Please enter some text before posting.');
    }
  };

  return (
    <form action="#" className="relative" onSubmit={(e) => e.preventDefault()}>
      <div className="p-4 overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
        <label htmlFor="description" className="sr-only">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={2}
          placeholder="Prompt the system..."
          className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={text}
          onChange={handleTextChange}
        />

        {/* Spacer element to match the height of the toolbar */}
        <div aria-hidden="true">
          <div className="py-2">
            <div className="h-9" />
          </div>
          <div className="h-px" />
          <div className="py-2">
            <div className="py-px">
              <div className="h-9" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-px bottom-0">
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <Listbox as="div" value={selectedCompany} onChange={setSelectedCompany} className="flex-shrink-0">
            <Label className="sr-only">Company</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <UserCircleIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" />
                <span className="hidden truncate sm:ml-2 sm:block">
                  {selectedCompany.name}
                </span>
              </ListboxButton>

              <ListboxOptions className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {companies.map((company) => (
                  <ListboxOption
                    key={company.id}
                    value={company}
                    className="relative cursor-default select-none bg-white px-3 py-2 hover:bg-gray-100 text-black"
                  >
                    {company.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          <Listbox as="div" value={selectedPosition} onChange={setSelectedPosition} className="flex-shrink-0">
            <Label className="sr-only">Position</Label>
            <div className="relative">
              <ListboxButton className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                <TagIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1" />
                <span className="hidden truncate sm:ml-2 sm:block">
                  {selectedPosition.name}
                </span>
              </ListboxButton>

              <ListboxOptions className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {jobPositions.map((position) => (
                  <ListboxOption
                    key={position.id}
                    value={position}
                    className="relative cursor-default select-none bg-white px-3 py-2 hover:bg-gray-100 text-black"
                  >
                    {position.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          {/* <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon aria-hidden="true" className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500" />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">Attach a file</span>
            </button>
          </div> */}
          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={(e) => handlePost(e, 'short')}
              className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-sm font-semibold ${
                postType === 'short' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`}
            >
              Short
            </button>
            <button
              type="button"
              onClick={(e) => handlePost(e, 'long')}
              className={`relative -ml-px inline-flex items-center rounded-r-md px-3 py-2 text-sm font-semibold ${
                postType === 'long' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900'
              } ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`}
            >
              Long
            </button>
          </div>
          {error && (
            <div className=" text-red-500 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </form>
  )
}