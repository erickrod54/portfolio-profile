import React, { useState, useEffect } from "react";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from "../../api/resume_api";

 /**Portfolio-erick - version 56.09 - PersonalDetailsEditor -
* Features:

    -→> Building 'PersonalDetailsEditor' 

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
        const updatedData = { ...fullResume, personal: form };
        mutation.mutate(updatedData);
    };

    return (
        <div className="personal-editor p-4 border rounded bg-white mt-4 shadow-sm">
            <h3 className="text-black font-bold mb-4">
                🧑🏽‍🦲 Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4">
                <input
                    className="border p-2 rounded text-black"
                    name="name" // <--- Added this
                    placeholder="Name"
                    value={form.name || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded text-black"
                    name="title"
                    placeholder="Job Title"
                    value={form.title || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded text-black" // <--- Fixed "tex" to "text"
                    name="email"
                    placeholder="Email"
                    value={form.email || ''}
                    onChange={handleChange}
                />
                <input
                    className="border p-2 rounded text-black"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone || ''}
                    onChange={handleChange}
                />
            </div>
            <button
                onClick={handleSave}
                disabled={mutation.isPending}
                className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:bg-gray-400"
            >
                {mutation.isPending ? 'Saving ...' : 'Save Personal Info'}
            </button>
        </div>
    );
}
