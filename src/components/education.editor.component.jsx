import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react"; // Removed useEffect
import { updateResume } from "../../api/resume_api";

/**Portfolio-erick - version 56.14 - EducationEditor -
* Features:

    -→> Removing education subtitle 'EducationEditor' 

* Notes: The 'EducationEditor' will be use perform
* CRUD granular over every education field
**/

export default function EducationEditor({ education }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [isSavingIndex, setIsSavingIndex] = useState(null);
    
    // 1. Local state for the "Draft"
    const [localEducation, setLocalEducation] = useState(education || []);

    // 2. THE FIX: Syncing state during render instead of in an Effect
    // We store the "source of truth" to see if it has changed
    const [prevEducation, setPrevEducation] = useState(education);

    if (education !== prevEducation) {
        // If the database data changed (e.g., after a save), reset our local draft
        setPrevEducation(education);
        setLocalEducation(education || []);
    }

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
        }
    });

    const handleSave = (index) => {
        setIsSavingIndex(index);
        mutation.mutate({ education: localEducation }, {
            onSettled: () => setIsSavingIndex(null)
        });
    };

    const addEducation = () => {
        const newEdu = { 
            school: "New University", 
            degree: "Degree Name", 
            location: "City, Country", 
            dates: "20XX - 20XX" 
        };
        setLocalEducation([newEdu, ...localEducation]);
        setExpandedIndex(0);
    };

    const deleteEducation = (index) => {
        const newList = localEducation.filter((_, i) => i !== index);
        setLocalEducation(newList);
        mutation.mutate({ education: newList });
        
        if (index === expandedIndex) {
            setExpandedIndex(Math.max(0, index - 1));
        } else if (index < expandedIndex) {
            setExpandedIndex(expandedIndex - 1);
        }
    };

    const updateLocalField = (index, field, value) => {
        const newList = [...localEducation];
        newList[index] = { ...newList[index], [field]: value };
        setLocalEducation(newList);
    };

    if (!localEducation) return <div className="text-gray-400 p-4 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
                <button onClick={addEducation} className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-sm font-semibold text-sm transition-colors">
                    + Add Education
                </button>
            </div>

            {localEducation.map((edu, i) => {
                const isExpanded = expandedIndex === i;
                return (
                    <div key={i} className="border rounded-xl bg-white shadow-sm border-gray-200 overflow-hidden transition-all hover:shadow-md">
                        <div 
                            className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${isExpanded ? 'bg-blue-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                            onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
                        >
                            <div className="flex items-center space-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 text-gray-400 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <div>
                                    <h4 className="font-bold text-gray-900">{edu.school || "New University"}</h4>
                                    <p className="text-xs text-gray-500 uppercase font-semibold tracking-wider">{edu.degree || "Degree"}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleSave(i); }} 
                                    className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded font-bold shadow-sm disabled:bg-gray-400"
                                    disabled={mutation.isPending}
                                >
                                    {mutation.isPending && isSavingIndex === i ? "Saving..." : "Save"}
                                </button>
                                <button onClick={(e) => { e.stopPropagation(); deleteEducation(i); }} className="text-xs text-red-500 hover:text-red-700 font-bold px-2 py-1.5">
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="p-6 border-t border-gray-100 bg-white grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">University / School</label>
                                    <input className="w-full border-b-2 border-gray-100 p-2 text-black focus:border-blue-500 outline-none bg-transparent transition-all" 
                                        value={edu.school || ""} onChange={e => updateLocalField(i, 'school', e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Degree / Major</label>
                                    <input className="w-full border-b-2 border-gray-100 p-2 text-black focus:border-blue-500 outline-none bg-transparent transition-all" 
                                        value={edu.degree || ""} onChange={e => updateLocalField(i, 'degree', e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</label>
                                    <input className="w-full border-b-2 border-gray-100 p-2 text-black focus:border-blue-500 outline-none bg-transparent transition-all" 
                                        value={edu.location || ""} onChange={e => updateLocalField(i, 'location', e.target.value)} />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Dates</label>
                                    <input className="w-full border-b-2 border-gray-100 p-2 text-black focus:border-blue-500 outline-none bg-transparent transition-all" 
                                        value={edu.dates || ""} onChange={e => updateLocalField(i, 'dates', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}