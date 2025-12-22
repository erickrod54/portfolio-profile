import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react"; // Removed useEffect
import { updateResume } from "../../api/resume_api";
import { ButtonUI } from "./ui-components/ui.index.components";
import { cn } from "../utils/utils";

/**Portfolio-erick - version 57.06 - EducationEditor -
* Features:

    -→> Adding 'ButtonUI' primary to Save  

* Notes: this component is almost complete:
* the changes to the 'dropdown arrow' and 
* dropdown 'titles' should be applied to the
* experience editor
*
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

    /**this can be placed in loadingMessages cva */
    if (!localEducation) return <div className="text-gray-400 p-4 text-center">Loading...</div>;

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
                <ButtonUI onClick={addEducation} variant='primary'>
                    + Add Education
                </ButtonUI>
            </div>

            {localEducation.map((edu, i) => {
                const isExpanded = expandedIndex === i;
                return (
                    /* Use border-border and bg-card */
        <div key={i} className="border rounded-xl shadow-sm border-border overflow-hidden transition-all hover:shadow-md bg-card">
            <div 
                /* Change bg-secondary to a muted background for better contrast */
                className={cn(
                    "flex justify-between items-center p-4 cursor-pointer transition-colors",
                    isExpanded ? 'bg-muted/50' : 'hover:bg-muted/30'
                )}
                onClick={() => setExpandedIndex(isExpanded ? -1 : i)}
            >
                <div className="flex items-center space-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                         className={cn("h-5 w-5 text-primary transition-transform duration-300", isExpanded && "rotate-180")} 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <div>
                        <h4 className="font-bold text-foreground">{edu.school || "New University"}</h4>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-primary/80">
                            {edu.degree || "Degree"}
                        </p>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    {/* Replaced manual button with your ButtonUI or themed buttons */}
                    <ButtonUI 
                        onClick={(e) => { e.stopPropagation(); handleSave(i); }} 
                        disabled={mutation.isPending}
                        variant='primary'
                    >
                        {mutation.isPending && isSavingIndex === i ? "Saving..." : "Save"}
                    </ButtonUI>
                    <button 
                        onClick={(e) => { e.stopPropagation(); deleteEducation(i); }} 
                        className="text-xs text-red-500 hover:text-red-700 font-bold px-2 py-1.5 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>

            <div className={cn("transition-all duration-500 ease-in-out overflow-hidden", isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0')}>
                <div className="p-6 border-t border-border bg-card grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['school', 'degree', 'location', 'dates'].map((field) => (
                        <div key={field} className="space-y-1">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                {field === 'school' ? 'University / School' : field.replace(/^\w/, c => c.toUpperCase())}
                            </label>
                            <input 
                                className="w-full border-b-2 border-border p-2 text-sm text-foreground focus:border-primary outline-none bg-muted/50 transition-all rounded-t-md" 
                                value={edu[field] || ""} 
                                onChange={e => updateLocalField(i, field, e.target.value)} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
                );
            })}
        </div>
    );
}