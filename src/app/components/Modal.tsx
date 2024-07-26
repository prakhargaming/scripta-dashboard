import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Modal({ person, closeModal }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black opacity-50 fixed inset-0" onClick={closeModal}></div>
            <div className="bg-white shadow sm:rounded-lg relative z-10 w-3/4 h-3/4 overflow-auto">
                <div className="px-4 py-6 sm:px-6">
                    <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                </div>
                <div className="border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <div>
                                <dt className="text-sm font-medium text-gray-900">Full name</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{person.name}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-900">Application for</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{person.title}</dd>
                            </div>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-6">
                            <div>
                                <dt className="text-sm font-medium text-gray-900">Email</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{person.email}</dd>
                            </div>
                            <div>
                                <dt className="text-sm font-medium text-gray-900">Years of Experience</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{person.yearsOfExperience}</dd>
                            </div>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Skills</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                <ul className="grid grid-cols-3 gap-x-4 gap-y-2 list-disc pl-5">
                                    {person.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">Resume Score</dt>
                            <dd className="mt-1 text-2xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {person.resumeScore}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium text-gray-900">About</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                {person.about}
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                    {person.attachments.map((attachment, index) => (
                                        <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                            <div className="flex w-0 flex-1 items-center">
                                                <PaperClipIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0 text-gray-400" />
                                                <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                    <span className="truncate font-medium">{attachment.name}</span>
                                                    <span className="flex-shrink-0 text-gray-400">{attachment.size}</span>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                                    Download
                                                </a>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </div>
                        <div className="px-4 py-6 flex justify-center">
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Send Interview
                            </button>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}