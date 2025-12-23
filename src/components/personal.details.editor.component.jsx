import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from "../../api/resume_api";
import { ButtonUI } from "./ui-components/ui.index.components";

 /**Portfolio-erick - version 57.08 - PersonalDetailsEditor -
* Features:

    -→> Refactoring 'handleSave' to preserve hidden keys ( ensure scheme structure)
    
    --> Adding missing inputs from data keys.

* Notes: The 'PersonalDetailsEditor' will be use perform
* CRUD granular over every PersonalDetail data
**/

export default function PersonalDetailsEditor({ initialPersonal, fullResume }) {
    // Initialize with empty object to prevent "null" errors on first render
    const [form, setForm] = useState(initialPersonal || {});
    const queryClient = useQueryClient();

    useEffect(() => {
        if (initialPersonal) {
            setForm(initialPersonal);
        }
    }, [initialPersonal]);

    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
            alert("Personal details updated!");
        }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        // Renamed variable to 'updatedData' to avoid conflict with the imported function
        const updatedData = {
            ...fullResume, personal: {
                ...fullResume.personal, //preserve hidden links ( github, linkdn )
                ...form
        } };
        mutation.mutate(updatedData);
    };

        return (
        /* CHANGE: Remove 'bg-white' and 'text-black'. Use 'bg-card' and 'text-foreground' */
        <div className="p-4 border border-border rounded-lg bg-card mt-4 shadow-sm">
            <h3 className="text-foreground font-bold mb-4 flex items-center gap-2">
                <span>🧑🏽‍🦲</span> Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* The inputs will automatically look good because 
                   we added global styles for 'input' in index.css! 
                */}
                <input
                    className="border p-2 rounded"
                    name="name"
                    placeholder="Name"
                    value={form.name || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded"
                    name="title"
                    placeholder="Job Title"
                    value={form.title || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded"
                    name="email"
                    placeholder="Email"
                    value={form.email || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone || ''}
                    onChange={handleChange}
                />
                
                <input
                    className="border p-2 rounded"
                    name="location"
                    placeholder="location"
                    value={form.location || ''}
                    onChange={handleChange}
                />
                
                <input
                    className="border p-2 rounded"
                    name="github"
                    placeholder="Github Url"
                    value={form.github || ''}
                    onChange={handleChange}
                />
                
                <input
                    className="border p-2 rounded col-span-1 md:col-span-2"
                    name='linkedin'
                    placeholder="LinkedIn URL"
                    value={form.linkedin || ''}
                    onChange={handleChange}
                />
            </div>

            {/* CHANGE: Added 'mt-6' to fix the "on top of inputs" feeling */}
            <div className="mt-6 flex justify-start">
                <ButtonUI
                    variant='primary'
                    onClick={handleSave}
                    disabled={mutation.isPending}
                >
                    {mutation.isPending ? 'Saving ...' : 'Save Personal Info'}
                </ButtonUI>
            </div>
        </div>
    );
}
