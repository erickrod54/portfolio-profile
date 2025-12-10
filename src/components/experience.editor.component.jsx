import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchResumeData } from '../../api/resume_api';
import { useAddExperience, useDeleteExperience } from '../hooks/use.experience.mutations';

/**Portfolio-erick - version 56.07 - Card component -
* Features:

    -→> Building 'ExperienceEditor' 

* Notes: The 'ExperienceEditor' will be use perform
* CRUD only over the 'experience' item, as this first 
* step work successfully it will be extendibile and
* and applied to the Whole resume
**/

const RESUME_QUERY_KEY = ['resumeData'];

export default function ExperienceEditor() {
    //1.- fetch the data query using useQuery
    const {
        data: resume,
        isLoading,
        isError
    } = useQuery({
        queryKey: RESUME_QUERY_KEY,
        queryFn: fetchResumeData
    });

    //2.- Initialize the mutations
    const addMutation = useAddExperience();
    const deleteMutation = useDeleteExperience();

    if (isLoading) return <div className='text-black'>Loading resume data...</div>
    if (isError) return <div className='text-black'>Error loading resume data</div>

    //the expereince array from the data, defaulting to an empty array
    const experience = resume?.experience || [];

    // Handlers

    const handleAddExperience = () => {
        // Define the shape of the new experience item the user would input
        const newJob = {
            title: 'New Position (Temp)',
            company: 'New Company Inc',
            dates: 'Present',
            location: 'Anytown, USA',
            achievements: ["Describe a new task or achievement here"]
        };
        //Trigger the mutation to POST the new data
        addMutation.mutate(newJob);
    };

    const handleDeleteExperience = (index) => {
        // Trigger the mutation to DELETE the item by index
        deleteMutation.mutate(index)
    };

    return (
        <div className='experience-editor text-black'>
            <h2>🧳 Work Experience Editor</h2>
            
            {/**the Add Button */}
            <button
                className='text-white'
                onClick={handleAddExperience}
                disabled={addMutation.isPending}
            >
                {addMutation.isPending ? 'Adding' : '➕ Add New Job'}
            </button>

            {/**List of current experience entries */}
            {experience.map((job, index) => (
                <div
                    //We use the tempId (for optimistic uopdates) or the index key
                    key={job.tempId || index}
                    className='job-entry'
                    style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}
                >
                    <h3>{job.title} at {job.company}</h3>
                    <p>Dates: {job.dates}</p>

                    {/**The delete dates */}
                    <button
                        className='text-white'
                        onClick={() => handleDeleteExperience(index)}
                        disabled={deleteMutation.isPending}
                    >
                        {deleteMutation.isPending ? 'Deleting' : '🗑️ Delete Job'}
                    </button>
                </div>
            ))}

            {/** Feedback Messages */}
            {addMutation.isError && <p style={{ color: 'red' }}>🛑 Error adding the job please try again</p>}
            {deleteMutation.isError && <p style={{ color: 'red' }}>🛑 Error deleting job. Please reload</p>}
        </div>
    );
}