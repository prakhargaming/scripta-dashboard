'use client'

import { useState } from 'react'
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY, 
  endpoint: 'https://nyc3.digitaloceanspaces.com'
});

const s3 = new AWS.S3();

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Upload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    const blob = new Blob([file], { type: file.type });
    setFile(blob);
    uploadToDigitalOcean(blob);
  };
  

  const uploadToDigitalOcean = async (file) => {
    const reader = new FileReader();
  
    reader.onload = async (e) => {
      const params = {
        Bucket: 'scriptaaudiofiles',
        Key: `resume-${Date.now()}.pdf`,
        Body: e.target.result,
        ACL: 'public-read',
        ContentType: 'application/pdf'
      };
  
      try {
        const data = await s3.upload(params).promise();
        console.log('File uploaded successfully', data.Location);
        alert("File uploaded successfully: " + data.Location);
      } catch (error) {
        console.error('Error uploading file:', error);
        alert("Error uploading file: " + error.message);
        setError('Error uploading file: ' + error.message);
      }
    };
  
    reader.readAsArrayBuffer(file);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf';
    fileInput.onchange = handleFileInput;
    fileInput.click();
  };

  return (
    <button
      type="button"
      onClick={handleUpload}
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400"
      >
        <path
          d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="mt-2 block text-sm font-semibold text-gray-900">Upload Resumes Here</span>
      {file && (
        <div className="mt-2 text-gray-600 text-sm">
          {file.name}
        </div>
      )}
      {error && (
        <div className="mt-2 text-red-500 text-sm">
          {error}
        </div>
      )}
    </button>
  )
}