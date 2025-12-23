import React, { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateResume } from '../../api/resume_api';
import { ButtonUI } from './ui-components/ui.index.components';

/**Portfolio-erick - version 57.08 - SummaryEditor -
* Features:

    -→> Refactoring 'Saving' payload 

* Notes: The whole resume needs to be sends it when
* the summary is modified - solve the issue that does
* not let save the summary - ( before was sending only
* the summary )
**/

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
            // Consider using a toast library later!
        }
    });

    const handleSave = () => {
        const updatedData = { ...fullResume, summary: currentSummaryText };
        mutation.mutate({ updatedData });
    };

    return (
        /* 1. Change bg-white to bg-card and text-black to text-foreground */
        <div className='p-4 border border-border rounded-lg bg-card mt-4 shadow-sm'>
            <h3 className='text-foreground font-bold mb-2 flex items-center gap-2'>
                <span>✏️</span> Professional Summary
            </h3>
            
            {/* 2. Remove hardcoded border/text colors; let index.css handle it */}
            <textarea
                className='w-full p-3 bg-background text-foreground border border-border rounded-md min-h-[120px] focus:ring-2 focus:ring-primary outline-none transition-all'
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your professional summary here..."
            />
            
            <div className="flex justify-end mt-4">
                {/* 3. CLEAN BUTTON: No hardcoded bg-blue or bg-gray! 
                      The Button component handles 'disabled' styles automatically via CVA. */}
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
