import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from '../../api/resume_api';

/**Portfolio-erick - version 56.09 - SkillsEditor -
* Features:

    -→> Building 'SkillsEditor' 

* Notes: The 'SkillsEditor' will be use perform
* an adition of the new skill to the exisiting 
* array
**/

export default function SkillsEditor({ initialSkills }) {
    const queryClient = useQueryClient();
    const [newSkill, setNewSkill] = useState("");
    const [activeCategory, setActiveCategory] = useState("");

    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
            setNewSkill(""); // Clear input
            setActiveCategory(""); 
        }
    });

    const handleUpdate = (updatedSkills) => {
        // We only send the 'skills' key. 
        // Postgres merges this with the existing row.
        mutation.mutate({ skills: updatedSkills });
    };

    const handleAddSkill = (category) => {
        if (!newSkill.trim()) return;

        // 1. Clone the current category's array and add the new skill
        const updatedCategoryArray = [...(initialSkills[category] || []), newSkill.trim()];
        
          handleUpdate({
            ...initialSkills,
            [category]: updatedCategoryArray
        });
    };

    const handleRemoveSkill = (category, skillToRemove) => {
        const updatedCategoryArray = initialSkills[category].filter(s => s !== skillToRemove);
        
        handleUpdate({
            ...initialSkills,
            [category]: updatedCategoryArray
        });
    };

    return (
        <div className="skills-editor p-2 border rounded-lg bg-white mt-6 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2">🛠️ Technical Skills</h3>
            
            {Object.entries(initialSkills || {}).map(([category, skills]) => (
                <div key={category} className="mb-8 last:mb-0">
                    <h4 className="text-lg font-semibold text-blue-600 mb-3 uppercase tracking-wider">{category}</h4>
                    
                    {/* Tag Cloud */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills.map(skill => (
                            <div key={skill} className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full border border-gray-200 group">
                                <span className="text-sm font-medium">{skill}</span>
                                <button 
                                    onClick={() => handleRemoveSkill(category, skill)}
                                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add Input */}
                    <div className="flex items-center gap-2 max-w-xs">
                        <input 
                            className="flex-1 border-b-2 border-gray-200 p-1 text-sm text-black focus:border-blue-500 outline-none transition-colors"
                            placeholder={`Add ${category}...`}
                            value={activeCategory === category ? newSkill : ""}
                            onChange={(e) => {
                                setActiveCategory(category);
                                setNewSkill(e.target.value);
                            }}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(category)}
                        />
                        <button 
                            onClick={() => handleAddSkill(category)}
                            className="text-blue-500 hover:text-blue-700 font-bold text-xl mt-4 p-1"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}