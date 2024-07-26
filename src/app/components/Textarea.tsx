'use client'
import { useState } from 'react';
import AWS from 'aws-sdk';
import Comboboxy from './Combobox';

// AWS configuration remains the same
AWS.config.update({
    accessKeyId: "DO004TC96DEW4WCAJQ7J",
    secretAccessKey: "stlN1hiEK3nxhzW68nCtZod+cPUU2QCKzl/wsnM32WY", 
    endpoint: 'https://nyc3.digitaloceanspaces.com'
});

const s3 = new AWS.S3();

const comboboxData = {
  companies: [
    { id: 1, name: "Apple Inc." },
    { id: 2, name: "Google LLC" },
    { id: 3, name: "Microsoft Corporation" },
    { id: 4, name: "Amazon.com Inc." },
    { id: 5, name: "Meta Platforms Inc." },
    { id: 6, name: "Tesla Inc." },
    { id: 7, name: "Netflix Inc." },
    { id: 8, name: "NVIDIA Corporation" },
    { id: 9, name: "Adobe Inc." },
    { id: 10, name: "Intel Corporation" }
  ],
  jobPositions: [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Data Scientist" },
    { id: 3, name: "Product Manager" },
    { id: 4, name: "UX Designer" },
    { id: 5, name: "DevOps Engineer" },
    { id: 6, name: "Marketing Specialist" },
    { id: 7, name: "Financial Analyst" },
    { id: 8, name: "Human Resources Manager" },
    { id: 9, name: "Sales Representative" },
    { id: 10, name: "Business Development Manager" }
  ]
};

export default function Textarea() {
  const [text, setText] = useState('');
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const uploadToDigitalOcean = async (textContent, company, position) => {
    const uploadContent = JSON.stringify({
      text: textContent,
      company: company?.name || '',
      position: position?.name || ''
    });

    const params = {
      Bucket: 'scriptaaudiofiles', // You might want to change this to a different bucket for text
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

  const handlePost = (e) => {
    e.preventDefault();
    if (text) {
      uploadToDigitalOcean(text, selectedCompany, selectedPosition);
    } else {
      setError('Please enter some text before posting.');
    }
  };

  return (
    <div className="flex flex-col items-start space-y-4">
      <div className="min-w-0 flex-1 w-full">
        <form onSubmit={handlePost}>
          <div className="border-b border-gray-200 focus-within:border-blue-600">
            <label htmlFor="comment" className="sr-only">
              Prompt the system
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Prompt the system..."
              className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-blue-600 focus:ring-0 sm:text-sm sm:leading-6"
              value={text}
              onChange={handleTextChange}
            />
          </div>
          <div className="flex justify-between items-center pt-2 mt-2">
            <div className="flex space-x-4">
              <Comboboxy 
                people={comboboxData.companies} 
                title="Company"
                onSelect={setSelectedCompany}
              />
              <Comboboxy 
                people={comboboxData.jobPositions}
                title="Position"
                onSelect={setSelectedPosition}
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Post
            </button>
          </div>
        </form>
        {error && (
          <div className="mt-2 text-red-500">
            {error}
          </div>
        )}
      </div>
    </div>
  )
}