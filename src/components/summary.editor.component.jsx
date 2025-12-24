import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from '../../api/resume_api';
import { ButtonUI } from './ui-components/ui.index.components';

/**Portfolio-erick - version 57.09 - SummaryEditor -
* Features:

    -→> Refactoring 'Saving' payload, with summary text and full resume
    
    --> Receiving fullResume from parent component 

* Notes: The whole resume needs to be sends it when
* the summary is modified - solve the issue that does
* not let save the summary - ( before was sending only
* the summary )
**/

// Add fullResume to the props here!
export default function SummaryEditor({ initialSummary, fullResume }) {
    const [text, setText] = useState(initialSummary || "");
    const queryClient = useQueryClient();

    useEffect(() => {
        setText(initialSummary);
    }, [initialSummary]);

    const mutation = useMutation({
        mutationFn: updateResume,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['resumeData'] });
            alert("Summary saved successfully!");
        }
    });

    const handleSave = () => {
        // BUG FIX 1 & 2: Use 'text' (state) and ensure 'fullResume' is spread
        const updatedData = { 
            ...fullResume, 
            summary: text 
        };
        
        // BUG FIX 3: Do not wrap in an extra object {} here
        mutation.mutate(updatedData);
    };

    return (
        <div className='p-4 border border-border rounded-lg bg-card mt-4 shadow-sm'>
            <h3 className='text-foreground font-bold mb-2 flex items-center gap-2'>
                <span>✏️</span> Professional Summary
            </h3>
            
            <textarea
                className='w-full p-3 bg-background text-foreground border border-border rounded-md min-h-[120px] focus:ring-2 focus:ring-primary outline-none transition-all'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your professional summary here..."
            />
            
            <div className="flex justify-end mt-4">
                <ButtonUI
                    variant="primary"
                    onClick={handleSave}
                    disabled={mutation.isPending || text === initialSummary}
                >
                    {mutation.isPending ? 'Saving...' : 'Save Summary'}   
                </ButtonUI>
            </div>
        </div>
    );
}
