import { useMutation, useQueryClient } from "@tanstack/react-query"
import React, { useState, useEffect } from "react" // Added useEffect
import { updateResume } from "../../api/resume_api"

/**Portfolio-erick - version 56.14 - ExperienceEditor -
* Features:

    -→> Removing 'Work Experience' title 

* Notes: The next step will be removing hard coded text styles
**/

export default function ExperienceEditor({ experience }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    
    // 1. Create a local state to hold "Draft" changes
    const [localExperience, setLocalExperience] = useState(experience);

    // 2. Sync local state whenever the "experience" prop changes (initial load or external updates)
    useEffect(() => {
        setLocalExperience(experience);
    }, [experience]);

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
            alert("Changes saved successfully!"); // Optional feedback
        }
    });

    // This now sends the CURRENT local state to the database
    const handleSave = () => mutation.mutate({ experience: localExperience });
    
    const addJob = () => {
        const newJob = { 
            company: "New Co", 
            title: "Role", 
            dates: "Present", 
            location: "Remote", 
            achievements: [""], 
            stakeholder: "" 
        };
        const newList = [newJob, ...localExperience];
        setLocalExperience(newList); // Update local state
        setExpandedIndex(0);
    };

    const deleteJob = (index) => {
        const newList = localExperience.filter((_, i) => i !== index);
        setLocalExperience(newList);
        // Important: We still trigger a save/mutation for deletions usually, 
        // but for consistency with your request, you could also wait for manual save.
        // Let's trigger mutation here so "Delete" is permanent.
        mutation.mutate({ experience: newList });

        if (index === expandedIndex) {
            setExpandedIndex(Math.max(0, index - 1))
        } else if (index < expandedIndex) {
            setExpandedIndex(expandedIndex - 1)
        }
    };

    const toggleExpand = (index) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? -1 : index))
    }

    // 3. Update ONLY local state while typing
    const updateLocalField = (index, field, value) => {
        const newList = [...localExperience];
        newList[index] = { ...newList[index], [field]: value };
        setLocalExperience(newList);
    };

    const updateLocalAchievement = (jobIdx, achIdx, value) => {
        const newList = [...localExperience];
        const updatedJob = { ...newList[jobIdx] };
        const updatedAch = [...updatedJob.achievements];
        updatedAch[achIdx] = value;
        updatedJob.achievements = updatedAch;
        newList[jobIdx] = updatedJob;
        setLocalExperience(newList);
    };

    const addLocalAchievement = (jobIdx) => {
        const newList = [...localExperience];
        const updatedJob = { ...newList[jobIdx] };
        updatedJob.achievements = [...updatedJob.achievements, ""];
        newList[jobIdx] = updatedJob;
        setLocalExperience(newList);
    };

    if (!localExperience || !Array.isArray(localExperience)) {
        return <div className="p-4">Initializing experience data...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
                <button onClick={addJob} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg shadow-sm font-semibold text-sm transition-colors">
                    + Add job
                </button>
            </div>

            {localExperience.map((job, i) => {
                const isExpanded = expandedIndex === i;
                return (
                    <div key={i} className="border rounded-xl bg-white shadow-sm border-gray-200 overflow-hidden transition-all hover:shadow-md">
                        <div 
                            className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${isExpanded ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                            onClick={() => toggleExpand(i)}
                        >
                            <div className="flex items-center space-x-4">
                                {/**arrow to display dropdown */ }
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <div>
                                    <h4 className="font-bold text-lg">{job.company || "New Company"}</h4>
                                    <p className="text-sm">{job.title} {job.dates ? `• ${job.dates}` : ''}</p>
                                </div>
                            </div>
                            
                            {/* ACTION BUTTONS GROUP */}
                            <div className="flex items-center space-x-2">
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleSave(); // Commits changes to DB
                                    }} 
                                    disabled={mutation.isPending}
                                    className="text-sm bg-green-600 hover:bg-green-700 px-3 py-1 rounded shadow-sm font-semibold transition-all z-10 disabled:bg-gray-400"
                                >
                                    {mutation.isPending ? "Saving..." : "Save"}
                                </button>
                                {/**i will keep the text color on this button to make it a primitive ui */}
                                <button 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        deleteJob(i);
                                    }} 
                                    className="text-sm text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded border border-transparent hover:border-red-200 transition-all z-10"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* CONTENT SECTION (Inputs) */}
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-gray-100">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wide">Company</label>
                                        <input className="w-full border-b-2 border-gray-200 p-2 focus:border-blue-500 outline-none bg-transparent transition-colors" 
                                            value={job.company || ""} onChange={e => updateLocalField(i, 'company', e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wide">Title</label>
                                        <input className="w-full border-b-2 border-gray-200 p-2 focus:border-blue-500 outline-none bg-transparent transition-colors" 
                                            value={job.title || ""} onChange={e => updateLocalField(i, 'title', e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wide">Dates</label>
                                        <input className="w-full border-b-2 border-gray-200 p-2 focus:border-blue-500 outline-none bg-transparent transition-colors" 
                                            value={job.dates || ""} onChange={e => updateLocalField(i, 'dates', e.target.value)} />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wide">Location</label>
                                        <input className="w-full border-b-2 border-gray-200 p-2 focus:border-blue-500 outline-none bg-transparent transition-colors" 
                                            value={job.location || ""} onChange={e => updateLocalField(i, 'location', e.target.value)} />
                                    </div>
                                    <div className="space-y-1 md:col-span-2">
                                        <label className="text-xs font-bold uppercase tracking-wide">Stakeholder (Contact)</label>
                                        <input className="w-full border-b-2 border-blue-200 p-2 focus:border-blue-500 outline-none bg-blue-50/50 italic transition-colors" 
                                            value={job.stakeholder || ""} onChange={e => updateLocalField(i, 'stakeholder', e.target.value)} />
                                    </div>
                                </div>

                                {/* Achievements Section */}
                                <div className="mt-6 pt-4 border-t border-dashed border-gray-200">
                                    <h4 className="text-sm font-bold mb-3 flex items-center">
                                        <span className="text-xl mr-2">🏆</span> Key Achievements
                                    </h4>
                                    <div className="space-y-3 pl-2">
                                        {job.achievements?.map((ach, achIdx) => (
                                            <div key={achIdx} className="flex items-start group relative">
                                                <span className="mr-2 mt-2">•</span>
                                                <textarea 
                                                    className="w-full border-2 border-gray-100 p-3 rounded-lg text-sm focus:ring-2 focus:ring-blue-200 focus:border-blue-400 outline-none min-h-[80px] transition-all resize-y"
                                                    value={ach || ""}
                                                    onChange={e => updateLocalAchievement(i, achIdx, e.target.value)}
                                                />
                                            </div>
                                        ))}
                                        {/**i will keep the text on hover for later make it a primitive ui */}
                                        <button 
                                            onClick={() => addLocalAchievement(i)} 
                                            className="inline-flex items-center text-xs font-bold hover:text-blue-800 hover:underline mt-2 transition-all"
                                        >
                                            + Add Achievement Bullet
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}