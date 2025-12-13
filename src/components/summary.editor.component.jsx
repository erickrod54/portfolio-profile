import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from '../../api/resume_api';

/**Portfolio-erick - version 56.09 - SummaryEditor -
* Features:

    -→> Building 'SummaryEditor' 

* Notes: The 'SummaryEditor' will add/ edit the 
* summary section
**/

// 1. Remove fullResume from props - we don't need it anymore!
export default function SummaryEditor({ initialSummary }) {
    const [text, setText] = useState(initialSummary || "");
    const queryClient = useQueryClient();

    useEffect(() => {
        setText(initialSummary);
    }, [initialSummary]);

    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
            alert("Summary updated successfully!");
        }
    });

    const handleSave = () => {
        // 2. Simplified Payload: Only send the summary key.
        // The backend '||' operator preserves everything else automatically.
        mutation.mutate({ summary: text });
    };

    return (
        <div className='summary-editor p-4 border rounded bg-white mt-4 shadow-sm'>
            <h3 className='text-black font-bold mb-2'>✏️ Professional Summary</h3>
            <textarea
                className='w-full p-2 border rounded text-black min-h-[100px] focus:ring-2 focus:ring-blue-500 outline-none'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your professional summary here..."
            />
            <div className="flex justify-end">
                <button
                    onClick={handleSave}
                    disabled={mutation.isPending || text === initialSummary}
                    className={`mt-2 px-4 py-2 rounded text-white transition-colors ${
                        mutation.isPending || text === initialSummary 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    {mutation.isPending ? 'Saving...' : 'Save Summary'}   
                </button>
            </div>
        </div>
    );
}